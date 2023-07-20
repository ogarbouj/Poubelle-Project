"use strict";
exports.__esModule = true;
/* tslint:disable:no-unused-variable */
var Update_user_component_1 = require("./Update-user.component");
var testing_1 = require("@angular/core/testing");
describe('UpdateUserComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [Update_user_component_1.UpdateComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(Update_user_component_1.UpdateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
