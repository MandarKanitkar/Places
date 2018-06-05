import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {AddPlacePage} from "../pages/add-place/add-place";
import {PlacePage} from "../pages/place/place";
import {SetLocationPage} from "../pages/set-location/set-location";
import {AgmCoreModule} from "@agm/core";
import {Geolocation} from "@ionic-native/geolocation";
import { Camera, CameraOptions } from '@ionic-native/camera';
import {PlacesService} from "../services/places";
import { IonicStorageModule } from '@ionic/storage'
import {Storage} from "@ionic/storage";
import {File} from "@ionic-native/file";
import { TextToSpeech } from '@ionic-native/text-to-speech';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddPlacePage,
    PlacePage,
    SetLocationPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
   AgmCoreModule.forRoot({apiKey:'AIzaSyBKjEEgxsWHF1K_OD2-MZN6TwZVVNQYZI8'})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddPlacePage,
    PlacePage,
    SetLocationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    Camera,
    File,
    TextToSpeech,
    IonicStorageModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler},PlacesService,

  ]
})
export class AppModule {}