webpackJsonp([0],{

/***/ 123:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 123;

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 164;

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_place_add_place__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_places__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__place_place__ = __webpack_require__(214);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(modalCtrl, placesService) {
        this.modalCtrl = modalCtrl;
        this.placesService = placesService;
        this.addPlacePage = __WEBPACK_IMPORTED_MODULE_2__add_place_add_place__["a" /* AddPlacePage */];
        this.places = [];
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.placesService.fetchPlaces()
            .then(function (places) { return _this.places = places; });
    };
    HomePage.prototype.ionViewWillEnter = function () {
        this.places = this.placesService.loadPlaces();
        console.log("1" + this.places[0]);
        console.log("@" + this.placesService.loadPlaces());
    };
    HomePage.prototype.onOpenPlace = function (place, index) {
        console.log("home plce" + place);
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__place_place__["a" /* PlacePage */], { place: place, index: index });
        modal.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\IonicProj\places\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons end>\n      <button ion-button icon-only [navPush]="addPlacePage">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      <h1>Places</h1>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="bgcolor">\n  <ion-card *ngFor="let place of places; let i = index" (click)="onOpenPlace(place, i)">\n    <img [src]="place.base64Image">\n    <ion-card-content text-center>\n      <ion-card-title>\n        {{place.title}}\n      </ion-card-title>\n      <p>{{place.description}}</p>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"D:\IonicProj\places\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__services_places__["a" /* PlacesService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPlacePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__set_location_set_location__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_places__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_text_to_speech__ = __webpack_require__(213);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
///<reference path="../../../node_modules/@ionic-native/geolocation/index.d.ts"/>








var AddPlacePage = /** @class */ (function () {
    //public base64Image: string;
    function AddPlacePage(modalCtrl, loadingCtrl, toastCtrl, geolocation, camera, placesService, file, tts) {
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.geolocation = geolocation;
        this.camera = camera;
        this.placesService = placesService;
        this.file = file;
        this.tts = tts;
        this.location = {
            lat: 40.7624324,
            lng: -70.975982
        };
        this.locationIsSet = false;
        this.base64Image = '';
    }
    AddPlacePage.prototype.onSubmit = function (form) {
        this.placesService.addPlace(form.value.title, form.value.description, this.location, this.base64Image);
        form.reset();
        this.location = {
            lat: 40.7624324,
            lng: -70.975982
        };
        this.base64Image = '';
        this.locationIsSet = false;
        this.tts.speak('Your Place has been added')
            .then(function () { return console.log('Success'); })
            .catch(function (reason) { return console.log(reason); });
    };
    AddPlacePage.prototype.onOpenMap = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__set_location_set_location__["a" /* SetLocationPage */], { location: this.location, isSet: this.locationIsSet });
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data) {
                _this.location = data.location;
                _this.locationIsSet = true;
            }
        });
    };
    AddPlacePage.prototype.onLocate = function () {
        var _this = this;
        this.location.lng = 0;
        this.location.lat = 0;
        console.log(this.location.lat);
        console.log(this.location.lng);
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.location.lat = resp.coords.latitude;
            _this.location.lng = resp.coords.longitude;
            _this.locationIsSet = true;
            console.log("Current Loc" + resp.coords.longitude);
            console.log(_this.location.lat);
            console.log(_this.location.lng);
        }).catch(function (error) {
            console.log('Error getting Location', error);
        });
        console.log(this.location.lat);
        console.log(this.location.lng);
    };
    AddPlacePage.prototype.onTakePhoto = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
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
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            var toast = _this.toastCtrl.create({ message: 'Could not take the image.Please try again', duration: 2500, });
            toast.present();
            // Handle error
        });
    };
    AddPlacePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-place',template:/*ion-inline-start:"D:\IonicProj\places\src\pages\add-place\add-place.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Add a Place</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="bgcolor2">\n\n  <form #f="ngForm" (ngSubmit)="onSubmit(f)">\n    <ion-list>\n      <ion-item>\n        <ion-label fixed>Title</ion-label>\n        <ion-input type="text" placeholder="Add a title.." name="title" ngModel required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Short Description</ion-label>\n        <ion-textarea name="description" ngModel required></ion-textarea>\n      </ion-item>\n    </ion-list>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <button ion-button block outline type="button" icon-left (click)="onLocate()" color="dark">\n            <ion-icon name="locate"></ion-icon>\n            Locate me\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button block outline type="button" icon-left (click)="onOpenMap()" color="dark">\n            <ion-icon name="map"></ion-icon>\n            Select on Map\n          </button>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf="locationIsSet">\n        <ion-col>\n          <agm-map [latitude]="location.lat" [longitude]="location.lng" [zoom]="16">\n            <agm-marker [latitude]="location.lat" [longitude]="location.lng">\n\n            </agm-marker>\n          </agm-map>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col text-center>\n          <h5>Take a Photo!</h5>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <button ion-button icon-left block outline type="button" (click)="onTakePhoto()" color="dark">\n            <ion-icon name="camera"></ion-icon>\n            Open Camera\n          </button>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf="base64Image !=\'\'">\n        <ion-col>\n          <img [src]="base64Image" *ngIf="base64Image">\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <!--<button ion-button color="dark" block type="submit" [disabled]="!f.valid || !locationIsSet || base64Image ==\'\'">-->\n          <button ion-button color="dark" block type="submit">\n            Add this Place\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"D:\IonicProj\places\src\pages\add-place\add-place.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_6__services_places__["a" /* PlacesService */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_text_to_speech__["a" /* TextToSpeech */]])
    ], AddPlacePage);
    return AddPlacePage;
}());

//# sourceMappingURL=add-place.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetLocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_location__ = __webpack_require__(298);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SetLocationPage = /** @class */ (function () {
    function SetLocationPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.location = this.navParams.get('location');
        if (this.navParams.get('isSet')) {
        }
        this.marker = this.location;
    }
    SetLocationPage.prototype.onSetMarker = function (event) {
        console.log(event);
        this.marker = new __WEBPACK_IMPORTED_MODULE_2__models_location__["a" /* Location */](event.coords.lat, event.coords.lng);
    };
    SetLocationPage.prototype.onConfirm = function () {
        this.viewCtrl.dismiss({ location: this.marker });
    };
    SetLocationPage.prototype.onAbort = function () {
        this.viewCtrl.dismiss();
    };
    SetLocationPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    SetLocationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-set-location',template:/*ion-inline-start:"D:\IonicProj\places\src\pages\set-location\set-location.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Choose Location</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="bgcolor3">\n<ion-grid>\n  <ion-row>\n    <ion-col>\n    <agm-map id="map" [latitude]="location.lat" [longitude]="location.lng" [zoom]="20" (mapClick)="onSetMarker($event)" >\n    <agm-marker [latitude]="marker.lat" [longitude]="marker.lng" *ngIf="marker"></agm-marker>\n\n    </agm-map>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <button ion-button [block] color="secondary" (click)="onConfirm()" [disabled]="!marker">Confirm</button>\n    </ion-col>\n    <ion-col>\n      <button ion-button [block] color="danger" (click)="onAbort()">Abort</button>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n  <button ion-button (click)="back()"><ion-icon name="md-arrow-back"> Back</ion-icon></button>\n</ion-content>\n'/*ion-inline-end:"D:\IonicProj\places\src\pages\set-location\set-location.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], SetLocationPage);
    return SetLocationPage;
}());

//# sourceMappingURL=set-location.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_places__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlacePage = /** @class */ (function () {
    function PlacePage(navParams, viewCtrl, placesService) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.placesService = placesService;
        this.place = this.navParams.get('place');
        this.index = this.navParams.get('index');
        console.log("plave" + this.place);
    }
    PlacePage.prototype.onLeave = function () {
        this.viewCtrl.dismiss();
    };
    PlacePage.prototype.onDelete = function () {
        this.placesService.deletePlace(this.index);
        this.onLeave();
    };
    PlacePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-place',template:/*ion-inline-start:"D:\IonicProj\places\src\pages\place\place.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{place.title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col text-center>\n        <img [src]="place.base64Image">\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <p>{{place.description}}</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <agm-map [latitude]="place.location.lat" [longitude]="place.location.lng" [zoom]="16">\n          <agm-marker [latitude]="place.location.lat" [longitude]="place.location.lng">\n\n          </agm-marker>\n        </agm-map>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <button ion-button block (click)="onLeave()">Leave</button>\n      </ion-col>\n      <ion-col>\n        <button ion-button block color="danger" (click)="onDelete()">Delete</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"D:\IonicProj\places\src\pages\place\place.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__services_places__["a" /* PlacesService */]])
    ], PlacePage);
    return PlacePage;
}());

//# sourceMappingURL=place.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(246);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_add_place_add_place__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_place_place__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_set_location_set_location__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__agm_core__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_geolocation__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_camera__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_places__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_storage__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_file__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_text_to_speech__ = __webpack_require__(213);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_add_place_add_place__["a" /* AddPlacePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_place_place__["a" /* PlacePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_set_location_set_location__["a" /* SetLocationPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_14__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10__agm_core__["a" /* AgmCoreModule */].forRoot({ apiKey: 'AIzaSyBKjEEgxsWHF1K_OD2-MZN6TwZVVNQYZI8' })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_add_place_add_place__["a" /* AddPlacePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_place_place__["a" /* PlacePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_set_location_set_location__["a" /* SetLocationPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_text_to_speech__["a" /* TextToSpeech */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_storage__["a" /* IonicStorageModule */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }, __WEBPACK_IMPORTED_MODULE_13__services_places__["a" /* PlacesService */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\IonicProj\places\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\IonicProj\places\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Location; });
var Location = /** @class */ (function () {
    function Location(lat, lng) {
        this.lat = lat;
        this.lng = lng;
    }
    return Location;
}());

//# sourceMappingURL=location.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Place; });
var Place = /** @class */ (function () {
    function Place(title, description, location, base64Image) {
    }
    return Place;
}());

//# sourceMappingURL=place.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_place__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlacesService = /** @class */ (function () {
    function PlacesService(storage, file) {
        this.storage = storage;
        this.file = file;
        this.places = [];
    }
    PlacesService.prototype.addPlace = function (title, description, location, base64Image) {
        var _this = this;
        console.log("title" + title);
        var place = new __WEBPACK_IMPORTED_MODULE_0__models_place__["a" /* Place */](title, description, location, base64Image);
        console.log("place" + place);
        this.places.push({ title: title, description: description, location: location, base64Image: base64Image });
        this.storage.set('places', this.places)
            .then()
            .catch(function (err) {
            _this.places.splice(_this.places.indexOf(place), 1);
        });
    };
    PlacesService.prototype.loadPlaces = function () {
        return this.places.slice();
    };
    PlacesService.prototype.fetchPlaces = function () {
        var _this = this;
        return this.storage.get('places')
            .then(function (places) {
            _this.places = places != null ? places : [];
            return _this.places.slice();
        })
            .catch(function (err) { return console.log(err); });
    };
    PlacesService.prototype.deletePlace = function (index) {
        var _this = this;
        var place = this.places[index];
        console.log("index" + index);
        console.log("hi" + this.places[index]);
        this.places.splice(index, 1);
        this.storage.set('places', this.places)
            .then(function () {
            console.log(_this.places);
            _this.removeFile(_this.places);
        })
            .catch(function (err) { return console.log(err); });
    };
    PlacesService.prototype.removeFile = function (place) {
        var _this = this;
        console.log("new" + place);
        var currentName = place.base64Image.replace(/^.*[\\\/]/, '');
        this.file.removeFile(cordova.file.dataDirectory, currentName)
            .then(function () { return console.log('Removed file'); })
            .catch(function () {
            console.log('Error while removing File');
            _this.addPlace(place.title, place.description, place.location, place.base64Image);
        });
    };
    PlacesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */]) === "function" && _b || Object])
    ], PlacesService);
    return PlacesService;
    var _a, _b;
}());

//# sourceMappingURL=places.js.map

/***/ })

},[223]);
//# sourceMappingURL=main.js.map