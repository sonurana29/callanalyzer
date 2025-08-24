from langchain_core.language_models import LLM
from langchain.prompts import PromptTemplate
import requests
from typing import List, Optional
from dotenv import load_dotenv
import os

load_dotenv(override=True)
config = os.environ

class CustomLLM(LLM):
    """Custom LLM wrapper for LangChain using a REST API."""
    model: str
    endpoint_url: str = config['API_URL']
    headers: dict = {
        "Content-Type": "application/json", 
        "X-API-KEY": config['API_KEY']
    }
    temperature: float = 0 #0.7
    top_p: float = 1.0
    max_tokens: int = 2000
    stream: bool = False
    stop: Optional[List[str]] = None

    def _call(self, prompt: str, stop: Optional[List[str]] = None) -> str:
        print("API prompt:", prompt)   
        payload = {
            "model": self.model,
            "messages": [
                { "role": 'system', "content": 'You are an assistant that analyzes transcripts for sentiment, topics, and actionable insights.', },
                {"role": "user", "content": prompt}],
            "temperature": self.temperature,
            "top_p": self.top_p,
            "max_tokens": self.max_tokens,
        }
        if stop:
            payload["stop"] = stop

        response = requests.post(self.endpoint_url, headers=self.headers, json=payload)
        response.raise_for_status()
        data = response.json()
        print("API Response:", data)        
        return data['choices'][0]['message']['content']

    @property
    def _llm_type(self) -> str:
        return "custom-llm"

# Initialize custom LLM
llm = CustomLLM(
    model=config['MODEL_NAME'],
    temperature=0,
    top_p=0.9,
    max_tokens=1000
)

# Prompt Template
#prompt = PromptTemplate.from_template("You are a sentiment analysis tool. Analyze the sentiment of the provided text as Positive , Negative, or Neutral, and provide a brief summary and sentiment progression for your analysis: {text}")
#prompt = PromptTemplate.from_template("You are a semantic analysis tool. Extract the topics, intent,Compliance and key entities from the input text.: {text}")

# === Run with example input ===
# if __name__ == "__main__":
#     user_input = prompt.format(text="The stale smell of old beer lingers. It takes heat to bring out the odor. A cold dip restores health and zest. A salt pickle tastes fine with ham. Tacos al pastor are my favorite. A zestful food is the hot cross bun. Account No 412123")
#     response = llm.invoke(user_input)
#     print("LLM Response:", response)