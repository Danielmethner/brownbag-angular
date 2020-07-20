import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import { HomeComponent } from './public/home/home.component';
import { ImprintComponent } from './public/imprint/imprint.component';
import { TechStackComponent } from './public/tech-stack/tech-stack.component';
import { DataPrivacyComponent } from './public/data-privacy/data-privacy.component';
import { LoginComponent } from './public/login/login.component';
import { BenefitsComponent } from './public/benefits/benefits.component';
import { RegistrationComponent } from './public/registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    ImprintComponent,
    TechStackComponent,
    DataPrivacyComponent,
    LoginComponent,
    BenefitsComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
