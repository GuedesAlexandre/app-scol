import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { EtudiantComponent } from './component/etudiant/etudiant.component';
import { SpecialiteComponent } from './component/specialite/specialite.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeroComponent } from './component/hero/hero.component';
import { DateComponent } from './component/date/date.component';
import { EtudiantParisComponent } from './component/etudiant-paris/etudiant-paris.component';
import { EtudiantHorsParisComponent } from './component/etudiant-hors-paris/etudiant-hors-paris.component';
import { FormEtudiantComponent } from './component/form-etudiant/form-etudiant.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormSpecialiteComponent } from './component/form-specialite/form-specialite.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EtudiantComponent,
    SpecialiteComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    DateComponent,
    EtudiantParisComponent,
    EtudiantHorsParisComponent,
    FormEtudiantComponent,
    FormSpecialiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
