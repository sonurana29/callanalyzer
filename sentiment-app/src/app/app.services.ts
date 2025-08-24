import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RecordDetails } from './Recordmodel';
import id from '@angular/common/locales/id';
 
@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  private apiUrl = 'http://127.0.0.1:5000'; // Replace with your API URL
 
  constructor(private http: HttpClient) { }
 
  getData(): Observable<RecordDetails[]> {
    return this.http.get<RecordDetails[]>(this.apiUrl+'/items');
  }
 
  postData(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  fileUpload(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post(this.apiUrl+'/upload', formData);
  }

   getbyId(id: number): Observable<RecordDetails> {
    return this.http.get<RecordDetails>(this.apiUrl+'/items/' + id);
  }

  
}
 
 