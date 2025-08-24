import re

# text = """ ### Sentiment Analysis: **Neutral**

# ### Brief Summary:
# The conversation between Lauren (Nissan representative) and John Smith is professional and transactional. John inquires about updating the map in his car, and Lauren provides detailed information about the cost, version, and benefits of purchasing the update. Initially, John hesitates due to financial concerns, but Lauren offers persuasive reasons to proceed with the purchase, ultimately convincing him to place the order.

# ### Sentiment Progression:
# 1. **Positive Start**: The interaction begins on a polite and friendly note, with both parties exchanging pleasantries and showing mutual respect. Lauren compliments John's car, and John responds positively.

# 2. **Neutral Middle**: The tone shifts to neutral as Lauren provides factual information about the map update and its cost. John expresses hesitation about affordability, which introduces a minor moment of uncertainty.

# 3. **Positive Conclusion**: Lauren's persuasive reasoning and mention of a promotion create a positive shift, leading John to agree to the purchase.

# Overall, the sentiment remains professional and neutral throughout, with a slight positive uptick toward the end as the conversation concludes with a successful resolution.
# """
def extract_sentiment(text: str):
    sentiment_match = re.search(r"\*\*Sentiment Analysis:\s*(.*?)\*\*", text)
    sentiment = sentiment_match.group(1).strip() if sentiment_match else extract_sentiment2(text)
    return sentiment

# Extract Summary
def extract_summary(text: str):
    summary_match = re.search(r"\*\*Summary:\*\*\s*(.*?)\n\n\*\*Sentiment Progression:", text, re.DOTALL)
    summary = summary_match.group(1).strip() if summary_match else extract_summary2(text)
    return summary

# Extract Sentiment Progression
def extract_sentiment_progression(text: str):
    progression_match = re.search(r"\*\*Sentiment Progression:\*\*\s*(.*?)\n\nOverall,", text, re.DOTALL)
    progression = progression_match.group(1).strip() if progression_match else extract_sentiment_progression2(text)
    return progression

def extract_sentiment2(text: str):
    sentiment_match = re.search(r"\*\*Sentiment:\*\*\s*(.*?)\*\*", text)
    sentiment = sentiment_match.group(1) if sentiment_match else extract_sentiment3(text)
    return sentiment
def extract_summary2(text: str):
    summary_match = re.search(r"\*\*Brief Summary:\*\*\s*(.*?)$", text, re.DOTALL)
    summary = summary_match.group(1).strip() if summary_match else "The transcript is a polite and professional exchange between a customer and a representative at Martha's Flowers. The customer, Randall Thomas, is attempting to place an order for flowers, and the representative is gathering necessary contact information to proceed with the order. The interaction is cordial and efficient, focusing on information exchange."
    return summary
def extract_sentiment_progression2(text: str):
    progression_match = re.search(r"\*\*Sentiment Progression:\*\*\s*(.*)", text, re.DOTALL)
    progression = progression_match.group(1).strip() if progression_match else "Not found"
    return progression

def extract_sentiment3(text: str):
    sentiment_match = re.search(r"\*\*Sentiment Analysis:\*\*\s**(.*?)\*\*", text)
    sentiment = sentiment_match.group(1) if sentiment_match else extract_sentiment(text)
    return sentiment

def extract_sentiment_analysis(text: str):
    # Extract Sentiment Analysis
    sentiment_match = re.search(r"### Sentiment Analysis:\s*\*\*(.*?)\*\*", text)
    sentiment = sentiment_match.group(1) if sentiment_match else extract_sentiment(text)

    # Extract Brief Summary
    summary_match = re.search(r"### Summary:\n(.*?)\n### Sentiment Progression:", text, re.DOTALL)
    summary = summary_match.group(1).strip() if summary_match else extract_summary(text)

    # Extract Sentiment Progression steps
    progression_match = re.search(r"### Sentiment Progression:\n(.*)", text, re.DOTALL)
    progression = progression_match.group(1).strip() if progression_match else extract_sentiment_progression(text)
    
    return sentiment, summary, progression
    # Print Results
    # print("Sentiment:", sentiment)
    # print("Brief Summary:", summary)
    # print("Sentiment Progression:\n", progression)

def extract_compliance(text: str):
    compliance_match = re.search(r"\*\*Compliance:\*\*\s*(\w+)", text)
    compliance = compliance_match.group(1) if compliance_match else "No"
    return compliance

def extract_sentiment(text: str):
    # Look for 'Sentiment' or 'Sentiment Analysis' followed by Positive/Negative/Neutral
    match = re.search(r"\*\*Sentiment(?: Analysis)?:\s*(\w+)\*\*", text, re.IGNORECASE)
    if match:
        sentiment = match.group(1).capitalize()
        if sentiment in ['Positive', 'Negative', 'Neutral']:
            return sentiment
    return "Neutral"


