import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ImprintComponent } from './imprint/imprint.component';
import { DataPrivacyComponent } from './data-privacy/data-privacy.component';
import { TechStackComponent } from './tech-stack/tech-stack.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'data-privacy', component: DataPrivacyComponent },
  { path: 'tech-stack', component: TechStackComponent }
  
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
