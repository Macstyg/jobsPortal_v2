webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var platform_browser_dynamic_1 = __webpack_require__(1);
	var http_1 = __webpack_require__(323);
	var app_routes_1 = __webpack_require__(344);
	__webpack_require__(402);
	__webpack_require__(411);
	var app_component_1 = __webpack_require__(413);
	// enableProdMode()
	platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
	    http_1.HTTP_PROVIDERS,
	    app_routes_1.APP_ROUTER_PROVIDERS
	])
	    .catch(function (err) { return console.error(err); });
	

/***/ },

/***/ 344:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var router_1 = __webpack_require__(345);
	var home_component_1 = __webpack_require__(401);
	exports.routes = [
	    { path: '', component: home_component_1.HomeComponent }
	];
	exports.APP_ROUTER_PROVIDERS = [
	    router_1.provideRouter(exports.routes)
	];
	

/***/ },

/***/ 401:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(5);
	var HomeComponent = (function () {
	    function HomeComponent() {
	    }
	    HomeComponent = __decorate([
	        core_1.Component({
	            selector: 'my-home',
	            template: "\n    <h1 class=\"text-center\">Here you can see all the vacancys</h1>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-sm-8 col-sm-offset-2\">\n          <div class=\"form-group\">\n            <label>Search:</label>\n            <input type=\"text\" name=\"name\" placeholder=\"search for a vacancy...\" class=\"form-control\">\n          </div>\n          <div class=\"panel panel-success\">\n            <div class=\"panel-heading\">\n              <h1 class=\"panel-title\"> <span class=\"label label-info\"></span></h1>\n            </div>\n            <div class=\"panel-body\">\n              <div>\n                <a href=\"#\"></a>\n              </div>\n              <a href=\"#\">\n\n              </a>\n              <div>Compensation: </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], HomeComponent);
	    return HomeComponent;
	}());
	exports.HomeComponent = HomeComponent;
	

/***/ },

/***/ 402:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 411:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 413:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(5);
	var router_1 = __webpack_require__(345);
	var navbar_component_1 = __webpack_require__(414);
	var AppComponent = (function () {
	    function AppComponent() {
	    }
	    AppComponent = __decorate([
	        core_1.Component({
	            selector: 'my-app',
	            template: "\n    <my-nav></my-nav>\n    <router-outlet></router-outlet>\n  ",
	            directives: [navbar_component_1.NavbarComponent, router_1.ROUTER_DIRECTIVES]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppComponent);
	    return AppComponent;
	}());
	exports.AppComponent = AppComponent;
	

/***/ },

/***/ 414:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(5);
	var NavbarComponent = (function () {
	    function NavbarComponent() {
	    }
	    NavbarComponent = __decorate([
	        core_1.Component({
	            selector: 'my-nav',
	            template: "\n    <nav class=\"navbar navbar-inverse\">\n      <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n          <a href=\"/\" class=\"navbar-brand\"><span class=\"glyphicon glyphicon-fire text-danger\"></span> All Jobs</a>\n        </div>\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li><a href=\"/vacancypost\">Post a job</a></li>\n        </ul>\n      </div>\n    </nav>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], NavbarComponent);
	    return NavbarComponent;
	}());
	exports.NavbarComponent = NavbarComponent;
	

/***/ }

});
//# sourceMappingURL=app.map