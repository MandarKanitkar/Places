import {Component, OnInit} from '@angular/core';
import {ModalController} from 'ionic-angular';
import {AddPlacePage} from "../add-place/add-place";
import {Place} from "../../models/place";
import {PlacesService} from "../../services/places";
import {PlacePage} from "../place/place";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  addPlacePage = AddPlacePage;
  places: Place[] = [];

  constructor(private modalCtrl:ModalController, private placesService: PlacesService) {

  }

  ngOnInit()
  {
    this.placesService.fetchPlaces()
      .then(
        (places: Place[]) => this.places = places
      );
  }


  ionViewWillEnter()
  {

    this.places = this.placesService.loadPlaces();

    console.log("1"+this.places[0]);
    console.log("@"+ this.placesService.loadPlaces());
  }

  onOpenPlace(place : Place, index: number)
  {
    console.log("home plce"+place);
    const modal = this.modalCtrl.create(PlacePage, {place : place, index: index});
    modal.present();
  }

}
