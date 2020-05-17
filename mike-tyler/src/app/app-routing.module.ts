import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExperienceViewComponent } from './views/experience-view/experience-view.component';
import { FunViewComponent } from './views/fun-view/fun-view.component';


const routes: Routes = [
  {
    path: '',
    component: ExperienceViewComponent
  },
  {
    path: 'fun',
    component: FunViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
