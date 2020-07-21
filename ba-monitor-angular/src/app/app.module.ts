import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';

import { AppComponent } from './app.component';
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
import { UserProfileComponent } from './protected/entities/user/user-profile/user-profile.component';
import { PersonBaseComponent } from './protected/entities/party/person-base/person-base.component';
import { BusinessBaseComponent } from './protected/entities/party/business-base/business-base.component';
import { BrokerBaseComponent } from './protected/entities/party/broker-base/broker-base.component';
import { BusinessOverviewComponent } from './protected/entities/party/business-overview/business-overview.component';
import { FinStmtComponent } from './protected/entities/party/fin-stmt/fin-stmt.component';
import { BusinessNewComponent } from './protected/entities/party/business-new/business-new.component';
import { PosListLiabComponent } from './protected/entities/pos/pos-list-liab/pos-list-liab.component';
import { PosListAssetComponent } from './protected/entities/pos/pos-list-asset/pos-list-asset.component';
import { PosFinancingComponent } from './protected/entities/pos/pos-financing/pos-financing.component';


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
    RegistrationComponent,
    UserProfileComponent,
    PersonBaseComponent,
    BusinessBaseComponent,
    BrokerBaseComponent,
    BusinessOverviewComponent,
    FinStmtComponent,
    BusinessNewComponent,
    PosListLiabComponent,
    PosListAssetComponent,
    PosFinancingComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    CalendarModule,
    SliderModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    DropdownModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    FormsModule,
    NgbModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
