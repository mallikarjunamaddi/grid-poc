import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityTypeComponent } from './activity-type/activity-type.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'activitytype', component: ActivityTypeComponent, title: 'ActivityType' },
  { path: 'home', component: HomeComponent, title: 'Home'},
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
