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
import { WikiPanelComponent } from './components/wiki-panel/wiki-panel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DotGameComponent } from './components/dot-game/dot-game.component';

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
    SplitStringPipe,
    WikiPanelComponent,
    DotGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
