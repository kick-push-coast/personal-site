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
import { PublicLayoutComponent } from './layout/public-layout/public-layout.component';
import { PersonalLayoutComponent } from './layout/personal-layout/personal-layout.component';
import { SignupViewComponent } from './views/signup-view/signup-view.component';
import { PublicFormComponent } from './components/forms/public-form/public-form.component';
import { FormInputComponent } from './components/forms/form-input/form-input.component';
import { PromptTextComponent } from './components/prompt-text/prompt-text.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidateTooltipComponent } from './components/validate-tooltip/validate-tooltip.component';

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
    DotGameComponent,
    PublicLayoutComponent,
    PersonalLayoutComponent,
    SignupViewComponent,
    PublicFormComponent,
    FormInputComponent,
    PromptTextComponent,
    ValidateTooltipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
