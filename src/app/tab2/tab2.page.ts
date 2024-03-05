import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, IonIcon, IonImg, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';


import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FormComponentComponent } from './form-component/form-component.component';
//import { IonicModule } from '@ionic/angular';

import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, CommonModule, IonFab, IonFabButton, IonIcon, IonImg, IonGrid, IonRow, IonCol ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class Tab2Page {

  constructor(public photoService: PhotoService) { }

  async ngOnInit() {
    await this.photoService.loadSaved();
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

}
