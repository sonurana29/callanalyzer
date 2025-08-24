import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../app.services';
import { RecordDetails } from '../Recordmodel';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-record-detail',
  imports: [CommonModule,FormsModule],
  templateUrl: './record-detail.component.html',
  styleUrl: './record-detail.component.css'
})
export class RecordDetailComponent implements OnInit {
  // Define properties and methods for the record detail component
  id: number | undefined;
  record: RecordDetails | undefined;
  searchTerm:string = '';
  constructor(private route: ActivatedRoute,private apiService: ApiService) { }
@ViewChild('audioPlayer') audioPlayerRef!: ElementRef<HTMLAudioElement>;

      playAudio(): void {
        this.audioPlayerRef.nativeElement.play();
        
      }

      pauseAudio(): void {
        this.audioPlayerRef.nativeElement.pause();
      }
  ngOnInit(): void {
    // Initialize component state, fetch record details by ID, etc.
    //this.recordId = 1; // Example record ID
    const idParam = this.route.snapshot.paramMap.get('id');
    this.id = idParam ? Number(idParam) : 0;
    this.apiService.getbyId(this.id).subscribe(response => {
      this.record = response;      
    });
  }

  // Additional methods to handle record details can be added here

}
