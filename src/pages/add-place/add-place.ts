///<reference path="../../../node_modules/@ionic-native/geolocation/index.d.ts"/>
import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {LoadingController, ModalController, Toast, ToastController} from "ionic-angular";
import {Geolocation} from "@ionic-native/geolocation";
import {SetLocationPage} from "../set-location/set-location";
import {Location} from "../../models/location";
import {Camera,CameraOptions} from "@ionic-native/camera";
import { File, Entry, FileError } from '@ionic-native/file';
import {_catch} from "rxjs/operator/catch";
import {PlacesService} from "../../services/places";
import {cordovaWarn} from "@ionic-native/core";
import {errorHandler} from "@angular/platform-browser/src/browser";
import { TextToSpeech } from '@ionic-native/text-to-speech';


declare var cordova:any;

@Component({
  selector: 'page-add-place',
  templateUrl: 'add-place.html',
})
export class AddPlacePage {
  location: Location =
    {
      lat: 40.7624324,
      lng: -70.975982
    };
  loc: any;
  locationIsSet = false;
  base64Image ='';
  //public base64Image: string;

  constructor(private modalCtrl: ModalController,
              private loadingCtrl: LoadingController,
              private toastCtrl: ToastController,
              public geolocation: Geolocation,
              private camera: Camera,
              private placesService: PlacesService,
              private file: File, private tts: TextToSpeech) {
  }

  onSubmit(form: NgForm) {
    this.placesService.addPlace(form.value.title, form.value.description, this.location, this.base64Image);
    form.reset();
    this.location = {
      lat: 40.7624324,
      lng: -70.975982
    };

    this.base64Image = '';
    this.locationIsSet = false;
    this.tts.speak('Your Place has been added')
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));

  }

  onOpenMap() {
    const modal = this.modalCtrl.create(SetLocationPage, {location: this.location, isSet: this.locationIsSet});
    modal.present();
    modal.onDidDismiss(data => {
      if (data) {
        this.location = data.location;
        this.locationIsSet = true;
      }
    });
  }

  onLocate() {
    this.location.lng = 0;
    this.location.lat = 0;
    console.log(this.location.lat);
    console.log(this.location.lng);

    this.geolocation.getCurrentPosition().then((resp) => {
      this.location.lat = resp.coords.latitude;
      this.location.lng = resp.coords.longitude;
      this.locationIsSet = true;
      console.log("Current Loc" + resp.coords.longitude);

      console.log(this.location.lat);
      console.log(this.location.lng);
    }).catch((error) => {
      console.log('Error getting Location', error);
    });
    console.log(this.location.lat);
    console.log(this.location.lng);
  }

  onTakePhoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => { /*const currentName = imageData.replace(/^.*[\\\/]/, '' );*/
     /* const path = imageData.replace(/[^\/]*$/, '');
      const newFileName = new Date().getMilliseconds() + '.jpg';
      this.file.moveFile(path,currentName, cordova.file.dataDirectory, currentName)
        .then(
          (data: Entry) => {
            this.base64Image = data.nativeURL;
           this.camera.cleanup();
            //File.removeFile(path, currentName);
          }
        )*/
     /*   .catch((err: FileError) =>{this.base64Image = ''; const toast = this.toastCtrl.create({message: 'Could not take the image.Please try again',duration: 2500,})
        toast.present();
        this.camera.cleanup();
        });*/
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.base64Image = 'data:image/jpeg;base64,' + imageData;

    }, (err) => {const toast = this.toastCtrl.create({message: 'Could not take the image.Please try again',duration: 2500,})
      toast.present();
      // Handle error
    });

  }
}
