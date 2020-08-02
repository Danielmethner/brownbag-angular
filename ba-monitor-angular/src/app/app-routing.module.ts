import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { ImprintComponent } from './public/imprint/imprint.component';
import { DataPrivacyComponent } from './public/data-privacy/data-privacy.component';
import { TechStackComponent } from './public/tech-stack/tech-stack.component';
import { LoginComponent } from './public/login/login.component';
import { RegistrationComponent } from './public/registration/registration.component';
import { UserProfileComponent } from './protected/entities/user/user-profile/user-profile.component';
import { PersonBaseComponent } from './protected/entities/party/person-base/person-base.component';
import { BusinessBaseComponent } from './protected/entities/party/business-base/business-base.component';
import { MarketResearchComponent } from './protected/market-research/market-research.component';
import { ControlPanelComponent } from './protected/control-panel/control-panel.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'data-privacy', component: DataPrivacyComponent },
  { path: 'tech-stack', component: TechStackComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'person-base', component: PersonBaseComponent },
  { path: 'business-base', component: BusinessBaseComponent },
  { path: 'market-research', component: MarketResearchComponent },
  { path: 'control-panel', component: ControlPanelComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
