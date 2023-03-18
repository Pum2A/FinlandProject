import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { InteresingFactsSectionComponent } from './interesing-facts-section/interesing-facts-section.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: '',  component: HeaderComponent},
  {path: 'interesting-facts-section', component: InteresingFactsSectionComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent},
  {path: 'main', component: MainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
