import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Public Modules
import { HomeComponent } from './public/home/home.component';
import { ImprintComponent } from './public/imprint/imprint.component';
import { DataPrivacyComponent } from './public/data-privacy/data-privacy.component';
import { TechStackComponent } from './public/tech-stack/tech-stack.component';
// Auth Modules
import { AuthGuardService } from '@services/auth-guard.service';
import { LoginComponent } from './public/login/login.component';
import { LogoutComponent } from './public/logout/logout.component';
import { RegistrationComponent } from './public/registration/registration.component';
import { UserProfileComponent } from './protected/entities/user/user-profile/user-profile.component';
// Protected Modules
import { PersonBaseComponent } from './protected/entities/party/person-base/person-base.component';
import { BusinessBaseComponent } from './protected/entities/party/business-base/business-base.component';
import { MarketResearchComponent } from './protected/market-research/market-research.component';
import { ControlPanelComponent } from './protected/control-panel/control-panel.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'data-privacy', component: DataPrivacyComponent },
  { path: 'tech-stack', component: TechStackComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuardService] },
  { path: 'registration', component: RegistrationComponent },
  { path: 'user-profile', component: UserProfileComponent, canActivate: [AuthGuardService] },
  { path: 'person-base', component: PersonBaseComponent, canActivate: [AuthGuardService] },
  { path: 'business-base', component: BusinessBaseComponent, canActivate: [AuthGuardService] },
  { path: 'market-research', component: MarketResearchComponent, canActivate: [AuthGuardService] },
  { path: 'control-panel', component: ControlPanelComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
