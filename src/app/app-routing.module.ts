import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';

import { EtudiantComponent } from './component/etudiant/etudiant.component';
import { SpecialiteComponent } from './component/specialite/specialite.component';

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'Etudiant', component: EtudiantComponent},
  {path: 'Specialite', component: SpecialiteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
