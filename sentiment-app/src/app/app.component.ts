import { Component } from '@angular/core';
//import { HighchartsChartModule } from 'highcharts-angular';
// import { RouterOutlet } from '@angular/router';
// import { ApiService } from './app.services';
// import { RecordDetails } from './Recordmodel';
import { CommonModule } from '@angular/common';
// import * as Highcharts from 'highcharts';
//import { HighchartsChartComponent } from 'highcharts-angular';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  // recordDetails: RecordDetails[] = [];
  // title = 'sentiment-app';
  // selectedFile!: File;
  // uploadMessage = '';
  // constructor(private apiService: ApiService,private router: Router) { }
  // ngOnInit(): void {
  //    this.apiService.getData().subscribe(response => {
  //     this.recordDetails = response;
  //     // for (let item of this.data) {
  //     //   console.log(item.id, item.callDuration, item.compliance, item.recordingName);
  //     //   console.log(item.recordingPath, item.sentiment, item.sentimentProgression, item.summary);
  //     // }
  //   });
  // }
  // Highcharts: typeof Highcharts = Highcharts;  // Required
  // chartOptions: Highcharts.Options = {
  //   chart: {
  //     type: 'pie'
  //   },
  //   title: {
  //     text: 'Analysis Sentiment'
  //   },
  //   series: [{
  //     type: 'pie',
  //     name: 'Analysis Sentiment',
  //     data: [
  //       { name: 'Postive', y: 2 },
  //       { name: 'Negative', y: 1 },
  //       { name: 'Netural', y: 3 }
  //     ]
  //   }]
  // };

  // //Highchartsbar :typeof Highcharts = Highcharts;

  // chartbarOptions: Highcharts.Options = {
  // //barChartOptions: Highcharts.Options = {
  //   chart: {
  //     type: 'column'  // ✅ Horizontal bars on Y-axis
  //   },
  //   title: {
  //     text: 'Compliance Survey'  // ✅ Title for the chart
  //   },
  //   xAxis: {
  //     type: 'category',  // ✅ Category axis for Yes/No responses
  //     categories: ['Yes','No'],  // Single category axis
  //     //title: { text: null }
  //   },
  //   yAxis: {    
  //     min: 0, 
  //     title: {
  //       text: 'Number of Responses'
  //     },
  //      // ✅ Set max to 1 for Yes/No responses
  //   },
  //   legend: {
  //     reversed: true
  //   },
  //   plotOptions: {
  //     series: {
  //       stacking: 'normal' // ✅ Stack Yes/No responses
  //      }
  //   },
  //   series: [
  //     {
  //       name: 'Yes',
  //       type: 'column',
  //       data: [1,5]  // Number of Yes responses
  //     }     
  //   ]
  // };

  // onFileSelected(event: Event) {
  //   const input = event.target as HTMLInputElement;
  //   if (input.files && input.files.length > 0) {
  //     this.selectedFile = input.files[0];
  //   }
  // }
  // uploadFile() {
  //   if (!this.selectedFile) {
  //     this.uploadMessage = 'No file selected.';
  //     return;
  //   }
  //   // const formData = new FormData();
  //   // formData.append('file', this.selectedFile);

  //    this.apiService.fileUpload(this.selectedFile).subscribe({
  //       next: () => this.uploadMessage = 'File uploaded successfully!',
  //       error: (err) => this.uploadMessage = 'Upload failed: ' + err.message
  //     });    
  // }
  // showModal = false;

  // openModal() {
  //   this.showModal = true;
  // }

  // closeModal() {
  //   this.showModal = false;
  // }

  // getById(id: number) {
  //   this.router.navigate(['/Detail', id]);   
  // }
}
