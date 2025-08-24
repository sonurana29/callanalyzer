import json
import whisper
from pydub import AudioSegment
import sampleapi as saapi
from langchain.prompts import PromptTemplate
import textfinding as tf 
import dtomodel as dtorepo
import os

audio_file_path = ""
def process_audio_file(audio_file_path):   
    # Load audio file
    minutes, seconds, result = getTranscript(audio_file_path)

    print("Transcript:")
    print(result["text"])
    saapi.CustomLLM.llm = saapi.CustomLLM(
        model=saapi.config['MODEL_NAME']
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
        
    response=saapi.CustomLLM._call(self=saapi.CustomLLM.llm, prompt=user_input)
    print("LLM Response:", response)    
    data = json.loads(response)

    ## comment code below if you want to use the LLM for sentiment analysis
    # saapi.CustomLLM.llm = saapi.CustomLLM(
    #     model=saapi.config['MODEL_NAME']
    #     , temperature=0.5
    #     , top_p=0.9)
    # # Prompt Template
    # prompt = PromptTemplate.from_template("You are a sentiment analysis tool. Analyze the sentiment of the provided text in single word as Positive , Negative, or Neutral, and provide a brief summary and sentiment progression for your analysis: {text}")
    # #prompt = PromptTemplate.from_template("You are a semantic analysis tool. Extract the topics, intent,Compliance and key entities from the input text.: {text}")
    # user_input = prompt.format(text=result["text"])
    
    # response=saapi.CustomLLM._call(self=saapi.CustomLLM.llm, prompt=user_input)
    # print("LLM Response:", response)

    # sentiment_analysis, summary, sentiment_progression = tf.extract_sentiment_analysis(response)


    # # Print the results
    # print("Sentiment Analysis:", sentiment_analysis)
    # print("\nSummary:", summary)
    # print("\nSentiment Progression:", sentiment_progression)

    # #prompt1 = PromptTemplate.from_template("You are a semantic analysis tool. Extract the topics, intent,Compliance and key entities from the input text.: {text}")
    # prompt1 = PromptTemplate.from_template("You are a semantic analysis tool. Extract the Compliance and Compliance provide text in single word as Yes and No from the input text.: {text}")

    # user_input2 = prompt1.format(text=result["text"])
    
    # response2=saapi.CustomLLM._call(self=saapi.CustomLLM.llm, prompt=user_input2)
    # print("LLM Response 2:", response2)
    # compliance= tf.extract_compliance(response2)
    # print("\ncompliance:", compliance)

    # Save the audio file and metadata to the database
    next_id = dtorepo.get_next_id()
    filename = os.path.splitext(os.path.basename(audio_file_path))[0]
    filepath = os.path.basename(audio_file_path)
    
    crud_data = {
        'id': next_id,
        'recordingName': filename,
        'callDuration': f"{minutes} min {seconds} sec",
        'sentiment': data["sentiment"],# sentiment_analysis,
        'compliance': data["compliance"],  # compliance,
        'summary': data["summary"],
        'sentimentProgression': data["sentimentProgressionDetail"],
        'recordingPath': filepath,
        'topics': data["topics"],
        'intent': data["intent"],
        'keyEntities': data["keyEntities"],
        'qualityScoring': data["qualityScoring"],
        'actionItem': data["actionItem"],
        'customerName': data["customerName"],
        'agentName': data["agentName"],
        'isInboundCall': data["isInboundCall"],
        'complianceSummary': data["complianceSummary"],
        'transcript': result["text"]
          # Parse the JSON response
   
    # topics = data["topics"] 
    # intent = data["intent"]
    # key_entities = data["keyEntities"]
    # quality_scoring = data["qualityScoring"]
    # action_item = data["actionItem"]
    # customer_name = data["customerName"]
    # agent_name = data["agentName"]
    # is_inbound_call = data["isInboundCall"]
    # complianceSummary = data["complianceSummary"]
    }

    addResponse= dtorepo.add_record(new_data=crud_data)
    print("CRUD Response:", addResponse)

def getTranscript(audio_file_path):
    audio = AudioSegment.from_file(audio_file_path)  # or .wav
    # Get duration in seconds
    duration_seconds = len(audio) / 1000.0
    # Print duration in minutes:seconds format
    minutes = int(duration_seconds // 60)
    seconds = int(duration_seconds % 60)
    print(f"Call Duration: {minutes} min {seconds} sec")
    # Load Whisper model and transcribe audio
    model = whisper.load_model("medium")  # or "small", "medium", "large"
    result = model.transcribe(audio_file_path)
    return minutes,seconds,result
# print("LLM Response Sentiment Progression :", response["Sentiment Progression"])
# print("LLM Response Sentiment Analysis :", response["Sentiment Analysis"])


