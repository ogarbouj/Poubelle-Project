"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MapsComponent = void 0;
var environment_1 = require("../../../environments/environment");
var core_1 = require("@angular/core");
var mapboxgl = require("mapbox-gl");
var MapsComponent = /** @class */ (function () {
    function MapsComponent() {
        this.style = 'mapbox://styles/mapbox/streets-v11';
        this.lat = 37.75;
        this.lng = 20.41;
    }
    MapsComponent.prototype.ngOnInit = function () {
        var token = environment_1.environment.mapbox.accessToken;
        Object.getOwnPropertyDescriptor(mapboxgl, "accessToken").set(token);
        this.map = new mapboxgl.Map({
            container: 'map',
            style: this.style,
            zoom: 9,
            center: [this.lng, this.lat]
        });
        // Add map controls
        this.map.addControl(new mapboxgl.NavigationControl());
    };
    MapsComponent = __decorate([
        core_1.Component({
            selector: 'app-maps',
            templateUrl: './maps.component.html',
            styleUrls: ['./maps.component.scss']
        })
    ], MapsComponent);
    return MapsComponent;
}());
exports.MapsComponent = MapsComponent;
