# #from langchain_core.llms import LLM
# #from langchain_core.prompts import PromptTemplate
# import requests
# from typing import List, Optional
# from dotenv import load_dotenv
# import os

# load_dotenv(override=True)
# config = os.environ

# class CustomLLM():
#     """Custom LLM wrapper for LangChain using a REST API."""
#     model: str = config['MODEL_NAME']  # e.g., "whisper-1"
#     api_key: str = config['API_KEY']  # e.g., "a963d118-007d-45ea-a47f-741b00c056dc"
#     print("Using API    URL:", config['API_URL'])
#     print("Using Model Name:", model)   
    
#     endpoint_url: str = config['API_URL']
#     headers: dict = {
#         #"Content-Type": "multipart/form-data", 
#         "X-API-KEY": config['API_KEY']
#     }
#     temperature: float = 0.7
#     top_p: float = 1.0
#     max_tokens: int = 2000
#     stream: bool = False
#     stop: Optional[List[str]] = None

#     def _call(self, stop: Optional[List[str]] = None) -> str:
#        print("Sending request to the API...")
#        print(f"Using model: {self.model}")
#        filepath="M1F1-Alaw-AFsp.wav"
#        payload = {
#             "model": self.model,
#             "file": open(filepath, "rb"),
#             # "messages": [{"role": "user", "content": prompt}],
#             # "temperature": self.temperature,
#             # "top_p": self.top_p,
#             # "max_tokens": self.max_tokens,
#         }
#        if stop:
#             payload["stop"] = stop
#        print("Request payload:", payload)
#        print("Request headers:", self.headers)
#        response = requests.post(self.endpoint_url, headers=self.headers, files=payload)
#        #response.raise_for_status()
#        data = response.json()
#        print("Response status code:", response.status_code)
#        print("Response json:", response.json())
#        return data

#     @property
#     def _llm_type(self) -> str:
#         return "custom-llm"

# # Initialize custom LLM
# llm = CustomLLM()

#     #model=config['MODEL_NAME']   
#     # temperature=0.5,
#     # top_p=0.9,
#     # max_tokens=1000
# #)

# # Prompt Template
# #prompt = PromptTemplate.from_template("You are helpful AI. Reply to: {text}")

# # === Run with example input ===
# if __name__ == "__main__":
#     #user_input = prompt.format(text="What is Quantum Computing?")
#     response = llm._call()
#     print("LLM Response:", response)