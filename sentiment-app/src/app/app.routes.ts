import { Routes } from '@angular/router';
import { RecordDetailComponent } from './record-detail/record-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApidetailComponent } from './apidetail/apidetail.component';

export const routes: Routes = [ // ✅ Route to AppComponent
  { path: 'Detail/:id', component: RecordDetailComponent },
   { path: 'APIDetail', component: ApidetailComponent },  // ✅ Route with parameter
  { path: '', component: DashboardComponent }   // Default route
];
