import csv
import os
import pandas as pd

CSV_FILE = 'data.csv'

# ✅ Retrieve All Records
def retrieve_all():
    with open(CSV_FILE, mode='r', newline='', encoding='utf-8') as file:
        reader = csv.DictReader(file)
        records = list(reader)
        print(f"Retrieved {len(records)} records.")
        return records

def read_csv_file():
    data = []
    with open(CSV_FILE, mode='r', newline='', encoding='utf-8') as file1:
        reader = csv.DictReader(file1)
        for row in reader:
            data.append(row)
            print(f"Read row: {row}")    
    return data

# ✅ Add a New Record
def add_record(new_data):
    file_exists = os.path.exists(CSV_FILE)    
    print("Adding new record Id:", new_data['id'])
    print("Adding new record recordingName:", new_data['recordingName'])
    print("Adding new record recordingName:", new_data['callDuration'])
    with open(CSV_FILE, mode='a', newline='', encoding='utf-8') as file:
        writer = csv.writer(file)
        if not file_exists:
            writer.writerow(['id', 'recordingName', 'callDuration','sentiment','compliance', 'summary', 'sentimentProgression',
                             'recordingPath','topics','intent','keyEntities','qualityScoring','actionItem','customerName','agentName','isInboundCall',
                             'complianceSummary', 'transcript'])
        #writer = csv.DictWriter(file, fieldnames=['id', 'recordingName', 'callDuration','sentiment','compliance', 'summary', 'sentimentProgression','recordingPath'])
        writer.writerow([new_data['id'], new_data['recordingName'], new_data['callDuration'], new_data['sentiment'], new_data['compliance'], 
                         new_data['summary'], new_data['sentimentProgression'], new_data['recordingPath'],
                         new_data['topics'],new_data['intent'],new_data['keyEntities'],new_data['qualityScoring'],new_data['actionItem'],new_data['customerName'],new_data['agentName'],
                         new_data['isInboundCall'],new_data['complianceSummary'],new_data['transcript']])
    print("Record added.")
    return "Record added successfully."

# ✅ Update an Existing Record
def update_record(updated_data):
    records = retrieve_all()
    updated = False
    for record in records:
        if record['id'] == updated_data['id']:
            record.update(updated_data)
            updated = True
            break
    if updated:
        with open(CSV_FILE, mode='w', newline='', encoding='utf-8') as file:
            writer = csv.DictWriter(file, fieldnames=['id', 'name', 'age'])
            writer.writeheader()
            writer.writerows(records)
        print("Record updated.")
    else:
        print(f"No record found with ID {updated_data['id']}")

def get_next_id():    
    if not os.path.exists(CSV_FILE):
        return 1

    with open(CSV_FILE, mode='r', newline='') as file:
        reader = csv.reader(file)
        next(reader, None)  # Skip header
        task_ids = [int(row[0]) for row in reader if row]
        return max(task_ids, default=0) + 1
    
#retrieve_all()
# dat2= read_csv_file()
# print("Data read from CSV:", dat2)

crud_data = {
    'id': 1,
    'recordingName': os.path.splitext("Sales Call example.mp3")[0],
    'callDuration': "2 min 2 sec",
    'sentiment': "Neutral",
    'compliance': "Yes",
    'summary': """The text is a customer service interaction between a Nissan representative and a customer, John Smith, regarding the cost of updating the map in his vehicle. The conversation is polite and professional, with the representative providing information about the update's cost and benefits, while the customer deliberates on whether to proceed with the purchase. Eventually, the customer agrees to make the purchase.""",
    'sentimentProgression': """1. **Neutral:** The conversation begins with polite introductions and information exchange about the customer's profile and vehicle details.
2. **Neutral:** The representative provides pricing and details about the map update, and the customer expresses uncertainty about affordability.
3. **Neutral to Positive:** The representative shares promotional benefits and reasons to purchase, leading the customer to decide to proceed with the order.

The overall sentiment remains neutral, with a slight positive shift toward the end as the customer agrees to the purchase.""",
    'recordingPath': "Sales Call example.mp3"
}

#addResponse= add_record(new_data=crud_data)
def get_items(id):
    # print("Retrieving all items...")
    # response = dtomodel.retrieve_all()
    # return jsonify(response)
    try:
        df = pd.read_csv('data.csv')
        record = df[df['id'] == id]
        # Read CSV
        #data_json = df.to_dict(orient='records')  
        return record.iloc[0].to_dict(orient='records') if not record.empty else None
        # Convert to list of dicts
    except Exception as e:
        print(f'error {e}')

#get_items()
# df = pd.read_csv(csv_file)
# record = df[df['id'] == record_id]
