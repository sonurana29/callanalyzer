export interface RecordDetails {
  id: number;
  callDuration: string;
  compliance: string;
  recordingName: string;
  recordingPath: string;
  sentiment: string;
  sentimentProgression: string;
  summary: string;
  complianceSummary:string;
  customerName: string;
  intent: string;
  isInboundCall: boolean;
  keyEntities: string;
  qualityScoring:number;
  topics: string;
  transcript: string;
  actionItem: string;
  agentName: string;
  
}