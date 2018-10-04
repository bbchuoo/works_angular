import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyselfComponent } from './myself/myself.component';
import { ReportComponent } from './report/report.component';
import { DescriptionComponent } from './description/description.component';

const routes: Routes = [
  {
    path: 'report',
    component:ReportComponent
  },
    {
    path: 'myself',
    component:MyselfComponent
  },
      {
    path: 'description',
    component:DescriptionComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
