import { Component, OnInit } from '@angular/core';
import { ApiService } from '../app.services';
import { RecordDetails } from '../Recordmodel';
import { CommonModule } from '@angular/common';
import * as Highcharts from 'highcharts';
import { HighchartsChartComponent } from 'highcharts-angular';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  imports: [CommonModule,HighchartsChartComponent,RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  recordDetails: RecordDetails[] = [];
  title = 'sentiment-app';
  selectedFile!: File;
  uploadMessage = '';
  postiveSentiment = 0;
  negativeSentiment = 1;
  neutralSentiment = 0;
  complianceSurveyYes = 1;
  ComplianceSurveyNo = 3; 
  showModal :boolean= false;
  isHidden: boolean = true; // Initially hidden
  constructor(private apiService: ApiService,private router: Router) { }
  ngOnInit(): void {
     this.getAllData();
  }
 Highcharts: typeof Highcharts = Highcharts; // required
 chartOptions: Highcharts.Options = {
    chart: {
      type: 'pie'
    },    
    series: [],
    
  };

  
  chartbarOptions: Highcharts.Options = {  
    chart: {
      type: 'column'  // ✅ Horizontal bars on Y-axis
    },       
    series: []
    
  };

  chartmethod() {
    this.chartOptions ={
      title: {  text: 'Analysis Sentiment' },
      series: [{
      type: 'pie',
      name: 'Analysis Sentiment',
      data: [
        { name: 'Postive', y: this.postiveSentiment, color: '#19fb8b' },
        { name: 'Negative', y: this.negativeSentiment, color: 'maroon' },
        { name: 'Netural', y: this.neutralSentiment, color: 'orange' }
      ],
    }]
    }    
  }
  chartbarmethod() {
    this.chartbarOptions ={
      title: {text: 'Compliance Survey' }, 
      xAxis: {
      type: 'category',  // ✅ Category axis for Yes/No responses
      categories: ['Yes','No'],  // Single category axis
      //title: { text: null }
    },
    yAxis: {    
      min: 0, 
      title: {
        text: 'Number of Responses'
      },
       // ✅ Set max to 1 for Yes/No responses
    },
    legend: {
      reversed: true
    },
    plotOptions: {
      series: {
        stacking: 'normal' // ✅ Stack Yes/No responses
       }
    },
      series: [
        {
        name: 'Yes',
        type: 'column',
        data: [
              {y:this.complianceSurveyYes, color:'#F08080'}, // Number of Yes responses
              {y:this.ComplianceSurveyNo,color:'lightgreen'}
              ]  // Number of Yes responses
      }
    ]
  }
}
  
private getAllData() {
    this.apiService.getData().subscribe(response => {
      this.recordDetails = response;      
      this.postiveSentiment= this.recordDetails.filter(record => record.sentiment === 'Positive').length;
      this.negativeSentiment = this.recordDetails.filter(record => record.sentiment === 'Negative').length;
      this.neutralSentiment = this.recordDetails.filter(record => record.sentiment === 'Neutral').length; 
      this.complianceSurveyYes = this.recordDetails.filter(record => record.compliance === 'Yes').length;
      this.ComplianceSurveyNo = this.recordDetails.filter(record => record.compliance === 'No').length;    
      this.chartmethod();
      this.chartbarmethod();  
      //this.isHidden = true;   
  });
      
    }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }
  uploadFile() {
    if (!this.selectedFile) {
      this.uploadMessage = 'No file selected.';
      return;
    }
    // const formData = new FormData();
    // formData.append('file', this.selectedFile);
     this.isHidden = false;
     this.apiService.fileUpload(this.selectedFile).subscribe({
        next: (value) => {
          if(value.message == 'File uploaded successfully'){          
          this.uploadMessage =value.message;
          this.isHidden = true; // Hide the loader           
          this.getAllData(); // Refresh the data after upload       
         }    
        },
        error: (err) => this.uploadMessage = 'Upload failed: ' + err.message
      //   complete: () => {
      //          // This code executes when the Observable completes
      //   console.log('Observable completed.');
      // }
      
      });    
  }
  

  openModal() {
    //this.uploadMessage ='';
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  getById(id: number) {
    this.router.navigate(['/Detail', id]);   
  }
}


