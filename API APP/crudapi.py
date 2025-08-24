import time
from flask import Flask, jsonify, request,send_from_directory
from flask_cors import CORS
from flasgger import Swagger
import dtomodel as dtomodel
import pandas as pd
import os
import localwhisper as saapi
from langchain.prompts import PromptTemplate
import sampleapi 
import json

#import transcript as trans
app = Flask(__name__)
swagger = Swagger(app)
CORS(app)  
# Sample data
data = [
    {"id": 1, "name": "Item One"},
    {"id": 2, "name": "Item Two"}
]
UPLOAD_FOLDER = 'uploads'

os.makedirs(UPLOAD_FOLDER, exist_ok=True)
 
# GET endpoint
@app.route('/items', methods=['GET'])
def get_items():
    # print("Retrieving all items...")
    # response = dtomodel.retrieve_all()
    # return jsonify(response)
    try:
        df = pd.read_csv('data.csv')  # Read CSV
        data_json = df.to_dict(orient='records')  # Convert to list of dicts
        return jsonify(data_json)
    except Exception as e:
        return jsonify({'error': str(e)}), 500
 
# POST endpoint
@app.route('/items', methods=['POST'])
def add_item():
    new_item = request.json
    print("Received new item:", new_item)
    data.append(new_item)
    return jsonify(new_item), 201

@app.route('/items/<int:id>', methods=['GET']) 
def get_itemsByid(id):
    try:
        df = pd.read_csv('data.csv')
        record = df[df['id'] == id]
        return record.iloc[0].to_dict() if not record.empty else None
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/upload', methods=['POST'])
def upload_file():   
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No file selected'}), 400

    filepath = os.path.join(UPLOAD_FOLDER, file.filename)
    file.save(filepath)
    #time.sleep(10) # Simulate processing time
    saapi.process_audio_file(filepath)
    return jsonify({'message': 'File uploaded successfully'})
    #return jsonify({'message': 'File uploaded successfully'})

@app.route('/audio/<path:filename>')
def serve_audio(filename):
    return send_from_directory(UPLOAD_FOLDER, filename)

@app.route('/getcallinsights', methods=['POST'])
def get_sentiment():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No file selected'}), 400

    filepath = os.path.join(UPLOAD_FOLDER, file.filename)
    file.save(filepath)

    minutes, seconds, result= saapi.getTranscript(filepath)
    #get sentiment from post request
    #data = request.get_json()
    #xprint("Received data for sentiment analysis:", data)
    #result = saapi.get_sentiment(data["text"])
    sampleapi.CustomLLM.llm = sampleapi.CustomLLM(
        model=sampleapi.config['MODEL_NAME']
        , temperature= 0.5 #0.5
        , top_p=0.9)
    #Prompt Template
    template = """        
        You are an assistant that returns ONLY valid JSON.
        Do not include any text outside the JSON.        
        You are a sentiment analysis tool. Analyze the sentiment of the provided text in single word as Positive , Negative, or Neutral, and provide a brief summary , sentiment progression detail,Extract the topics, intent,Compliance Summary, key entities , Quality Scoring , Action item, Customer Name ,Agent Name , Is Inbound call and Compliance provide text in single word as Yes and No for your analysis: {text}
        
        Respond in the following JSON format:
        {{
            "sentiment": "<string>",
            "summary": "<string>",
            "sentimentProgressionDetail": "<string>",
            "topics": "<string>",
            "intent": "<string>",
            "complianceSummary": "<string>",
            "keyEntities": "<string>",
            "compliance": "<string>",
            "qualityScoring": "<number>",
            "actionItem": "<string>",
            "customerName": "<string>",
            "agentName": "<string>",
            "isInboundCall": "<boolean>"
            
            
        }}
        """
    # Create a PromptTemplate instance
    prompt  = PromptTemplate(
        input_variables=["text"],
        template=template
    )
    # Format the prompt with the input text    
    user_input = prompt.format(text=result["text"])        
    response=sampleapi.CustomLLM._call(self=sampleapi.CustomLLM.llm, prompt=user_input)
    data = json.loads(response)  # Parse the JSON response
    responseoutput = {
        "sentiment": data["sentiment"],
        "summary": data["summary"],
        "sentimentProgressionDetail": data["sentimentProgressionDetail"],
        "topics": data["topics"],
        "intent": data["intent"],
        "complianceSummary": data["complianceSummary"],
        "keyEntities": data["keyEntities"],
        "compliance": data["compliance"],
        "qualityScoring": data["qualityScoring"],
        "actionItem": data["actionItem"],
        "customerName": data["customerName"],
        "agentName": data["agentName"],
        "isInboundCall": data["isInboundCall"],
        "callDuration": f"{minutes} min {seconds} sec",
        "transcript": result["text"]
    }
    
    #print("LLM Response - sentiment:", sentiment)

    print("LLM Response -sentiment :", data["sentiment"])
    print("LLM Response:", responseoutput)
    return responseoutput
    

# Run the app
if __name__ == '__main__':
    app.run(debug=True)
 