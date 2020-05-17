import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExperienceViewComponent } from './views/experience-view/experience-view.component';
import { FunViewComponent } from './views/fun-view/fun-view.component';
import { NavComponent } from './layout/nav/nav.component';
import { FooterComponent } from './layout/footer/footer.component';
import { UserHeaderComponent } from './components/user-header/user-header.component';
import { UserExperienceComponent } from './components/user-experience/user-experience.component';
import { UserEducationComponent } from './components/user-education/user-education.component';
import { SplitStringPipe } from './pipes/split-string.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ExperienceViewComponent,
    FunViewComponent,
    NavComponent,
    FooterComponent,
    UserHeaderComponent,
    UserExperienceComponent,
    UserEducationComponent,
    SplitStringPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
