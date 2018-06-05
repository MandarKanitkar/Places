import {Place} from "../models/place";
import {Location} from "../models/location";
import  {Storage} from "@ionic/storage";
import {Injectable} from "@angular/core";
import  {File,Entry, FileError} from '@ionic-native/file';
//import {cordova} from "../pages/add-place/add-place";

declare var cordova:any;

@Injectable()
export class PlacesService{
  private places: Place[] = [];

  constructor(private storage:Storage, private file: File ){}

  addPlace(title: string, description: string, location: Location,base64Image: string){
    console.log("title"+title);
    var place = new Place(title, description, location, base64Image);
    console.log("place"+place);

    this.places.push({title,description,location,base64Image});
    this.storage.set('places', this.places)
    .then()
    .catch(
      err =>{
        this.places.splice(this.places.indexOf(place),1)
      }
    );



  }

  loadPlaces(){
    return this.places.slice();
  }

  fetchPlaces()
  {
    return this.storage.get('places')
      .then(
        (places:Place[]) => {
          this.places = places != null ? places : [];
          return this.places.slice();
        }
      )
      .catch(
        err => console.log(err)
      );
  }


  deletePlace(index: number) {
    const place = this.places[index];
    console.log("index"+index);
    console.log("hi"+this.places[index]);
    this.places.splice(index, 1);
    this.storage.set('places', this.places)
      .then(
        () => {
          console.log(this.places);
          this.removeFile(this.places);
        }
      )
      .catch(
        err => console.log(err)
      );
  }

  private removeFile(place)
  {
    console.log("new"+place);
    const currentName =  place.base64Image.replace(/^.*[\\\/]/, '' );
    this.file.removeFile(cordova.file.dataDirectory, currentName)
      .then(
        () => console.log('Removed file')
      )
      .catch(
        () => {
          console.log('Error while removing File');
          this.addPlace(place.title, place.description, place.location, place.base64Image);
        }
      );

  }
}
