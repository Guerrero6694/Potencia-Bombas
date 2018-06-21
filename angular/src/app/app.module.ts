
// Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlashMessagesModule } from 'angular2-flash-messages';


// Componentes
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';


// Servicios


// Guards


// Pipes
import { DatePipe } from '@angular/common';
import { AvanzadaComponent } from './components/avanzada/avanzada.component';
import { BasicaComponent } from './components/basica/basica.component';
import { PerdidasComponent } from './components/perdidas/perdidas.component';
import { PerdidaTuberiaComponent } from './components/perdida-tuberia/perdida-tuberia.component';
import { PerdidaAccesorioComponent } from './components/perdida-accesorio/perdida-accesorio.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarAvanzadaComponent } from './components/navbar-avanzada/navbar-avanzada.component';
import { BombaComponent } from './components/bomba/bomba.component';
import { ResultadoAvanzadaComponent } from './components/resultado-avanzada/resultado-avanzada.component';
import { ResultadoBasicaComponent } from './components/resultado-basica/resultado-basica.component';


// Rutas
const appRoutes: Routes = [
  // Generales
  {path: '', component: HomeComponent},
   {path:'caudal',component:AvanzadaComponent},
   {path:'basica',component:BasicaComponent},
  {path:'perdidas',component:PerdidasComponent},
  {path:'perdidas-tuberia',component:PerdidaTuberiaComponent},
  {path:'perdidas-accesorio',component:PerdidaAccesorioComponent},
  {path:'bomba', component:BombaComponent},
  {path:'resultado-avanzada', component:ResultadoAvanzadaComponent},
  {path:'resultado-basica',component:ResultadoBasicaComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AvanzadaComponent,
    BasicaComponent,
    PerdidasComponent,
    PerdidaTuberiaComponent,
    PerdidaAccesorioComponent,
    NavbarComponent,
    NavbarAvanzadaComponent,
    BombaComponent,
    ResultadoAvanzadaComponent,
    ResultadoBasicaComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot(),


  ],

  providers: [
 
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
