import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome.component';
import { CarruselComponent } from './carrusel/carrusel.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    IonicModule,
  ],
  declarations: [
    WelcomeComponent,
    CarruselComponent
  ],
  exports: [
    WelcomeComponent
  ]
})
export class WelcomeModule { }
