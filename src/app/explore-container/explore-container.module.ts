import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponent } from './explore-container.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TransportsComponent } from './components/transports/transports.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [ 
    CommonModule, 
    FormsModule, 
    IonicModule,
    SwiperModule
  ],
  declarations: [
    ExploreContainerComponent,
    MapaComponent,
    ProfileComponent,
    TransportsComponent,

  ],
  exports: [ExploreContainerComponent]
})
export class ExploreContainerComponentModule {}
