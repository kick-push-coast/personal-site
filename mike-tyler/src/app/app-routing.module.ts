import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExperienceViewComponent } from './views/experience-view/experience-view.component';
import { FunViewComponent } from './views/fun-view/fun-view.component';
import { PersonalLayoutComponent } from './layout/personal-layout/personal-layout.component';
import { PublicLayoutComponent } from './layout/public-layout/public-layout.component';
import { SignupViewComponent } from './views/signup-view/signup-view.component';


const routes: Routes = [
  {
    path: '',
    component: PersonalLayoutComponent,
    children: [
      {
          path: '',
          component: ExperienceViewComponent
      }
    ]
  },
  {
      path: 'signup',
      component: PublicLayoutComponent,
      children: [
        {
            path: '',
            component: SignupViewComponent
        }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
