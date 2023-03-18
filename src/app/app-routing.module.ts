import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InteresingFactsSectionComponent } from './interesing-facts-section/interesing-facts-section.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: '',  component: MainComponent},
  {path: 'interesting-facts-section', component: InteresingFactsSectionComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
