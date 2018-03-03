webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "router-outlet {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n\r\n<!--<input type=\"text\" [(ngModel)]=\"mensaje\">-->\r\n<!--<button (click)=\"send()\">Send</button>-->\r\n\r\n<!--<ul>-->\r\n<!--<li>aqui</li>-->\r\n<!--<li *ngFor=\"let men of mensajes\">{{men}}</li>-->\r\n<!--</ul>-->\r\n\r\n<!--<div *ngFor=\"let message of mensajes\">-->\r\n<!--{{message}}-->\r\n<!--</div>-->\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__socket_service__ = __webpack_require__("../../../../../src/app/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__nickname_nickname_component__ = __webpack_require__("../../../../../src/app/nickname/nickname.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__communication_service__ = __webpack_require__("../../../../../src/app/communication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tabla_tabla_component__ = __webpack_require__("../../../../../src/app/tabla/tabla.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__caja_caja_component__ = __webpack_require__("../../../../../src/app/caja/caja.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__reglas_reglas_component__ = __webpack_require__("../../../../../src/app/reglas/reglas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__chat_chat_component__ = __webpack_require__("../../../../../src/app/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ganador_ganador_component__ = __webpack_require__("../../../../../src/app/ganador/ganador.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pagenotfound_pagenotfound_component__ = __webpack_require__("../../../../../src/app/pagenotfound/pagenotfound.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    { 'path': '', component: __WEBPACK_IMPORTED_MODULE_7__nickname_nickname_component__["a" /* NicknameComponent */] },
    { 'path': 'tabla', component: __WEBPACK_IMPORTED_MODULE_9__tabla_tabla_component__["a" /* TablaComponent */] },
    { 'path': 'reglas', component: __WEBPACK_IMPORTED_MODULE_11__reglas_reglas_component__["a" /* ReglasComponent */] },
    { 'path': 'ganador', component: __WEBPACK_IMPORTED_MODULE_13__ganador_ganador_component__["a" /* GanadorComponent */] },
    { 'path': '**', component: __WEBPACK_IMPORTED_MODULE_14__pagenotfound_pagenotfound_component__["a" /* PagenotfoundComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__nickname_nickname_component__["a" /* NicknameComponent */],
                __WEBPACK_IMPORTED_MODULE_9__tabla_tabla_component__["a" /* TablaComponent */],
                __WEBPACK_IMPORTED_MODULE_10__caja_caja_component__["a" /* CajaComponent */],
                __WEBPACK_IMPORTED_MODULE_11__reglas_reglas_component__["a" /* ReglasComponent */],
                __WEBPACK_IMPORTED_MODULE_12__chat_chat_component__["a" /* ChatComponent */],
                __WEBPACK_IMPORTED_MODULE_13__ganador_ganador_component__["a" /* GanadorComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pagenotfound_pagenotfound_component__["a" /* PagenotfoundComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(routes),
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_2__socket_service__["a" /* SocketService */], __WEBPACK_IMPORTED_MODULE_8__communication_service__["a" /* CommunicationService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/caja/caja.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".caja {\r\n    width: 55px;\r\n    height: 55px;\r\n    border: 1px solid red;\r\n    background-color: lightsalmon;\r\n    margin-right: 4px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: row wrap;\r\n            flex-flow: row wrap;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/caja/caja.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"caja\" [ngClass]=\"{'invisible': caja === ' '}\">\r\n    {{caja}}\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/caja/caja.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CajaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CajaComponent = /** @class */ (function () {
    function CajaComponent() {
    }
    CajaComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], CajaComponent.prototype, "caja", void 0);
    CajaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-caja',
            template: __webpack_require__("../../../../../src/app/caja/caja.component.html"),
            styles: [__webpack_require__("../../../../../src/app/caja/caja.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CajaComponent);
    return CajaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/chat/chat.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container-fluid {\r\n    background-color: tomato;\r\n\r\n}\r\n\r\nul {\r\n    list-style: none;\r\n    word-wrap: break-word;\r\n}\r\n\r\nform {\r\n    padding: 3px;\r\n    bottom: 0;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: row nowrap;\r\n            flex-flow: row nowrap;\r\n    -webkit-box-pack: start;\r\n        -ms-flex-pack: start;\r\n            justify-content: flex-start;\r\n    width: 100%;\r\n    position: fixed;\r\n}\r\n\r\n/*.useronline {*/\r\n\r\n/*margin-bottom: 30px;*/\r\n\r\n/*}*/\r\n\r\n#messages {\r\n    list-style-type: none;\r\n    padding: 0;\r\n    height: auto;\r\n}\r\n\r\n.chat {\r\n    position: absolute;\r\n    bottom: 43px;\r\n    width: 100%;\r\n    height: 120px;\r\n    overflow-y: auto;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n\r\n}\r\n\r\n.chatArea {\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    overflow-y: auto;\r\n    width: 100%;\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"container-fluid\">-->\r\n<!--<ul class=\"chat\">-->\r\n<!--<li *ngFor=\"let men of Allmensajes\">{{men}}</li>-->\r\n<!--</ul>-->\r\n<!--<div class=\"row\">-->\r\n<!--<input id=\"write\" type=\"text\" name=\"\" value=\"\" [(ngModel)]=\"mensaje\">-->\r\n<!--<button type=\"button\" name=\"button\">Enviar</button>-->\r\n<!--</div>-->\r\n<!--</div>-->\r\n\r\n<section class=\"chat\">\r\n    <div class=\"chatArea\">\r\n        <ul id=\"messages\">\r\n            <li *ngFor=\"let men of Allmensajes\">{{men.name}} : {{men.msg}}</li>\r\n        </ul>\r\n    </div>\r\n\r\n</section>\r\n<form action=\"\">\r\n    <input id=\"m\" name=\"input\" [(ngModel)]=\"mensaje\" class=\"form-control\" autocomplete=\"off\"/>\r\n    <button class=\"btn btn-info btn-md\" (click)=\"sendMessage()\">Send</button>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__socket_service__ = __webpack_require__("../../../../../src/app/socket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatComponent = /** @class */ (function () {
    function ChatComponent(_Socket) {
        this._Socket = _Socket;
        this.Allmensajes = [];
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._Socket.message$.subscribe(function (data) {
            _this.Allmensajes.push(data);
        });
    };
    ChatComponent.prototype.sendMessage = function () {
        this._Socket.sendMessage(this.mensaje);
        this.mensaje = "";
    };
    ChatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-chat',
            template: __webpack_require__("../../../../../src/app/chat/chat.component.html"),
            styles: [__webpack_require__("../../../../../src/app/chat/chat.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__socket_service__["a" /* SocketService */]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "../../../../../src/app/communication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunicationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CommunicationService = /** @class */ (function () {
    function CommunicationService() {
    }
    CommunicationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CommunicationService);
    return CommunicationService;
}());



/***/ }),

/***/ "../../../../../src/app/ganador/ganador.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".negri {\r\n    background-color: #ffffff;\r\n}\r\n\r\n.content {\r\n    height: 100%;\r\n\r\n}\r\n\r\n.miix {\r\n    color: #ff6347;\r\n    font-family: 'Bangers', cursive;\r\n    font-size: 70px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ganador/ganador.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"content negri flex-center \">\r\n    <div class=\"container text-center mt-5 miix\">\r\n        <span id=\"name\">Y EL GANADOR ES... <br>{{this.winner}}</span>\r\n    </div>\r\n    <div>\r\n        <button class=\"btn btn-success\" (click)=\"backtoHome()\">Empezar otra partida</button>\r\n    </div>\r\n</main>"

/***/ }),

/***/ "../../../../../src/app/ganador/ganador.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GanadorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__socket_service__ = __webpack_require__("../../../../../src/app/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GanadorComponent = /** @class */ (function () {
    function GanadorComponent(_Socket, router) {
        this._Socket = _Socket;
        this.router = router;
    }
    GanadorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._Socket.roomInfo$.subscribe(function (data) {
            _this.winner = data;
            console.log("sus");
            console.log(_this.winner);
            console.log(_this.winner.name);
        });
        if (!this.winner) {
            this.winner = (String(this._Socket.currentWinner.name));
            console.log(this.winner);
            console.log(typeof this.winner);
        }
        this._Socket.newGame$.subscribe(function (data) {
            _this.router.navigate(['/tabla']);
        });
    };
    GanadorComponent.prototype.backtoHome = function () {
        this._Socket.gotoback();
    };
    GanadorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ganador',
            template: __webpack_require__("../../../../../src/app/ganador/ganador.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ganador/ganador.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__socket_service__["a" /* SocketService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], GanadorComponent);
    return GanadorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/nickname/nickname.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".negri {\r\n    background-color: #156268;\r\n}\r\n\r\n.content {\r\n    height: 100%;\r\n\r\n}\r\n\r\n.inputnick {\r\n    height: 40px;\r\n    width: 250px;\r\n    display: inline-block !important;\r\n}\r\n\r\n.title {\r\n    color: white;\r\n    padding-top: 10%;\r\n    font-size: 60px;\r\n    padding-bottom: 50px;\r\n    font-family: angrybirds;\r\n    color: tomato;\r\n}\r\n\r\n.login-form form button, .signup-form form button {\r\n    background-color: dodgerblue;\r\n}\r\n\r\n#footer > div > div.container > div > div {\r\n    padding: 35px 0px;\r\n}\r\n\r\n.form-control {\r\n    padding: .675rem .75rem;\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nickname/nickname.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<main class=\"content negri flex-center \">-->\r\n<!--<div class=\"container-fluid text-center flex-center\">-->\r\n<!--<h2 class=\"title\">Enter your nickname</h2>-->\r\n<!--<input class=\"form-text inputnick\" type=\"text\"-->\r\n<!--[(ngModel)]=\"nombre\">-->\r\n<!--<button class=\"btn btn-lg btn-danger\" (click)=\"sendName()\" routerLink=\"/reglas\" routerLinkActive=\"active\">Este-->\r\n<!--será mi-->\r\n<!--nombre-->\r\n<!--</button>-->\r\n\r\n\r\n<!--</div>-->\r\n<!--<div class=\"container text-center flex-center\">-->\r\n\r\n<!--<a href=\"http://localhost:3000/auth/facebook\">-->\r\n<!--<button class=\"btn btn-info btn-lg mt-5\"> Logear con Caralibro-->\r\n<!--</button>-->\r\n<!--</a>-->\r\n<!--</div>-->\r\n\r\n<!--</main>-->\r\n<section class=\"flex-center\" id=\"form\" style=\"margin-top: 100px !important;\"><!--form-->\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4 col-sm-offset-1 animated bounceInLeft\">\r\n                <div class=\"login-form\"><!--login form-->\r\n                    <h2>Login con tu cuenta</h2>\r\n                    <form (submit)=\"login()\">\r\n                        <input class=\"form-control mt-4\" type=\"text\" placeholder=\"Name\" [(ngModel)]=loginData.name name=name/>\r\n                        <input class=\"form-control mt-4 mb-4\" type=\"password\" placeholder=\"Password\" [(ngModel)]=loginData.pass name=pass/>\r\n                        <button type=\"submit\" class=\"btn btn-success btn-lg\">Login</button>\r\n                    </form>\r\n                    <p>{{loginData.name}}</p>\r\n                    <p>{{loginData.pass}}</p>\r\n                </div><!--/login form-->\r\n            </div>\r\n            <div class=\"col-sm-1\">\r\n            </div>\r\n            <div class=\"col-sm-4 animated bounceInRight\">\r\n                <div class=\"signup-form\"><!--sign up form-->\r\n                    <h2>Regístrate !</h2>\r\n                    <form action=\"#\">\r\n                        <input class=\"form-control mt-4\" type=\"text\" placeholder=\"Name\"/>\r\n                        <input class=\"form-control mt-4\" type=\"email\" placeholder=\"Email Address\"/>\r\n                        <input class=\"form-control mt-4 mb-4\" type=\"password\" placeholder=\"Password\"/>\r\n                        <input class=\"form-control mt-4 mb-4\" type=\"passwordConf\" placeholder=\"Password\"/>\r\n                        <button type=\"submit\" class=\"btn btn-info btn-lg\">Registrar</button>\r\n                    </form>\r\n                </div><!--/sign up form-->\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section><!--/form-->"

/***/ }),

/***/ "../../../../../src/app/nickname/nickname.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NicknameComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__socket_service__ = __webpack_require__("../../../../../src/app/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NicknameComponent = /** @class */ (function () {
    function NicknameComponent(_Socket, http, router) {
        this._Socket = _Socket;
        this.http = http;
        this.router = router;
        this.loginData = { name: '', pass: '' };
    }
    NicknameComponent.prototype.ngOnInit = function () {
        var token = localStorage.getItem('jwtToken');
        if (token) {
            this.router.navigate(['reglas']);
        }
    };
    NicknameComponent.prototype.sendName = function () {
        this._Socket.newUser(this.nombre);
    };
    NicknameComponent.prototype.login = function () {
        var _this = this;
        console.log("SE ha ejecutado el metodo login en el cliente");
        this.http.post('/nickname', this.loginData, { responseType: 'text' }).subscribe(function (data) {
            var resp = JSON.parse(data);
            console.log("He recibido el tokennnnnnn");
            if (resp.token) {
                localStorage.setItem('jwtToken', resp.token);
                _this.router.navigate(['reglas']);
            }
            else {
                console.error("ERROR DE AUTENTIFICACION PRIMO");
            }
        });
    };
    NicknameComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nickname',
            template: __webpack_require__("../../../../../src/app/nickname/nickname.component.html"),
            styles: [__webpack_require__("../../../../../src/app/nickname/nickname.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__socket_service__["a" /* SocketService */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], NicknameComponent);
    return NicknameComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pagenotfound/pagenotfound.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pagenotfound/pagenotfound.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-center\">\r\n    <h1>Page not found , check the url</h1>\r\n    <button class=\"btn btn-info btn-lg\" routerLink=\"\" routerLinkActive=\"active\"> Ir a elegir nickname</button>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pagenotfound/pagenotfound.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagenotfoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PagenotfoundComponent = /** @class */ (function () {
    function PagenotfoundComponent() {
    }
    PagenotfoundComponent.prototype.ngOnInit = function () {
    };
    PagenotfoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-pagenotfound',
            template: __webpack_require__("../../../../../src/app/pagenotfound/pagenotfound.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pagenotfound/pagenotfound.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PagenotfoundComponent);
    return PagenotfoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/reglas/reglas.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".blue {\r\n    color: dodgerblue;\r\n    font-size: 1.75em;\r\n}\r\n\r\nh1 {\r\n    color: tomato;\r\n    font-family: \"stranger\";\r\n    font-size: 120px;\r\n}\r\n\r\n.bit {\r\n    font-family: \"vcr\";\r\n\r\n}\r\n\r\nbody {\r\n    background-color: #156268 !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/reglas/reglas.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"container mt-5\">\r\n    <div class=\"jumbotron\">\r\n        <h1 class=\"display-4 text-center\">Ruleta sin Ruleta!</h1>\r\n        <p class=\"lead\">Es un simple juego en el que entre varios jugadores competiran por resolver el tablero</p>\r\n        <hr class=\"my-3\">\r\n        <p><span class=\"blue\">1. </span> Una vez que haya 2 jugadores la partida dará comienzo</p>\r\n        <p><span class=\"blue\">2. </span> El turno de cada jugador durará hasta 20 segundos</p>\r\n        <p><span class=\"blue\">3. </span> Durante el turno, el jugador podrá decir una vocal o una consonante , para\r\n            así,\r\n            comprobar si esta se encuentra en el tablero</p>\r\n        <p><span class=\"blue\">4. </span> Una vez usado tu letra, el jugador podrá o adivinar o pasar turno</p>\r\n        <p><span class=\"blue\">5. </span> Cada juego consta de 3 rondas, el que haya ganado mas rondas gana la\r\n            partida\r\n        </p>\r\n        <div class=\"container\" style=\"display: flex;flex-flow: row wrap; justify-content: space-around\">\r\n            <p class=\"btn btn-danger btn-lg bit\">Por cada vocal descubierta obtendrás 50 puntos!</p>\r\n            <p class=\"btn btn-danger btn-lg bit\">Por cada consonante descubierta obtendras 25 puntos!</p>\r\n        </div>\r\n        <p class=\"lead\">\r\n        </p>\r\n    </div>\r\n    <div align=\"center\">\r\n\r\n        <button routerLink=\"/tabla\" routerLinkActive=\"active\" class=\"btn btn-primary btn-lg\">Entendido!</button>\r\n\r\n    </div>\r\n</main>\r\n"

/***/ }),

/***/ "../../../../../src/app/reglas/reglas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReglasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__socket_service__ = __webpack_require__("../../../../../src/app/socket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReglasComponent = /** @class */ (function () {
    function ReglasComponent(_Socket) {
        this._Socket = _Socket;
    }
    ReglasComponent.prototype.ngOnInit = function () {
    };
    ReglasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-reglas',
            template: __webpack_require__("../../../../../src/app/reglas/reglas.component.html"),
            styles: [__webpack_require__("../../../../../src/app/reglas/reglas.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__socket_service__["a" /* SocketService */]])
    ], ReglasComponent);
    return ReglasComponent;
}());



/***/ }),

/***/ "../../../../../src/app/socket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SocketService = /** @class */ (function () {
    function SocketService() {
        var _this = this;
        this.miusuario = '';
        this.nuevoUsuario = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.nuevoUsuario$ = this.nuevoUsuario.asObservable();
        this.roomInfoSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.roomInfo$ = this.roomInfoSource.asObservable();
        this.messageSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.message$ = this.messageSource.asObservable();
        this.questionsSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.questions$ = this.questionsSource.asObservable();
        this.testSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.test$ = this.testSource.asObservable();
        this.answerSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.answer$ = this.answerSource.asObservable();
        this.turnSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.turn$ = this.turnSource.asObservable();
        this.puntuacionSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.puntuacion$ = this.puntuacionSource.asObservable();
        this.ganadorSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.ganador$ = this.ganadorSource.asObservable();
        this.newGameSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.newGame$ = this.newGameSource.asObservable();
        this.rageQuitSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.ragequit$ = this.rageQuitSource.asObservable();
        this.url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverSocket;
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__(this.url);
        this.socket.on('user', function (data) {
            _this.nuevoUsuario.next(data);
            _this.currentPlayerBackup = data;
        });
        this.socket.on('connectToRoom', function (data) {
            _this.roomInfoSource.next(data);
            _this.currentRoomBackup = data;
        });
        this.socket.on('message', function (data) { return _this.messageSource.next(data); });
        this.socket.on('game', function (data) { return _this.questionsSource.next(data); });
        this.socket.on('test', function (data) { return _this.testSource.next(data); });
        this.socket.on('answer', function (data) { return _this.answerSource.next(data); });
        this.socket.on('next', function (data) { return _this.turnSource.next(data); });
        this.socket.on('puntuacion', function (data) { return _this.puntuacionSource.next(data); });
        this.socket.on('ganador', function (data) {
            _this.ganadorSource.next(data);
            _this.currentWinner = data;
        });
        this.socket.on('home', function (data) { return _this.newGameSource.next(data); });
        this.socket.on('ragequit', function (data) { return _this.rageQuitSource.next(data); });
    }
    SocketService.prototype.nextTurn = function () {
        this.socket.emit('next', this.miusuario);
    };
    SocketService.prototype.newUser = function (data) {
        this.socket.emit('new-user', data);
        this.miusuario = data;
    };
    SocketService.prototype.sendMessage = function (mensaje) {
        this.socket.emit('new-message', mensaje);
    };
    SocketService.prototype.startGame = function () {
        this.socket.emit('start-round');
    };
    SocketService.prototype.begin = function () {
        this.socket.emit('begin');
    };
    SocketService.prototype.check = function (letra) {
        this.socket.emit('response', letra);
    };
    SocketService.prototype.chechsolution = function (solucion) {
        this.socket.emit('respuesta', solucion);
    };
    SocketService.prototype.plusPuntuation = function (canti) {
        this.socket.emit('sumar', canti);
    };
    SocketService.prototype.gotoback = function () {
        this.socket.emit('back');
    };
    SocketService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "../../../../../src/app/tabla/tabla.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tablero {\r\n    background-color: lightblue;\r\n    width: 100%;\r\n    max-height: 100%;\r\n\r\n}\r\n\r\n.text-indent {\r\n    text-indent: -999em\r\n}\r\n\r\n.text-noIndent {\r\n    text-indent: 0em !important;\r\n}\r\n\r\n.espe {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: row wrap;\r\n            flex-flow: row wrap;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n\r\n}\r\n\r\n#solucion {\r\n    width: 25%;\r\n}\r\n\r\n.title {\r\n    font-family: \"hughs\";\r\n\r\n}\r\n\r\n.fuente {\r\n    font-family: 'Indie Flower', cursive;\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tabla/tabla.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"tablero \">\r\n\r\n    <h1 align=\"center\" class=\"title pt-4\">Bienvenido {{_Socket.miusuario}}</h1>\r\n\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-9 pt-5 text-center fuente\"><h3>{{response?.tip}}</h3></div>\r\n            <div id=\"needmore\" class=\"text-center\">\r\n                <h3 class=\"title\" style=\"color: tomato;font-size: 70px;margin-right: 50px;\"> Need 1 more player for\r\n                    begin the game</h3>\r\n            </div>\r\n            <button id=\"botonbegin\" class=\"btn btn-info\" [disabled]=\"playersOnRoom\" (click)=\"startGame()\">Empezar\r\n                juego\r\n            </button>\r\n            <div class=\"col-md-3 \">\r\n                <h3><p class=\"fuente\" *ngFor=\"let p of showpuntuaciones\">{{p.name}} : {{p.puntuacion}} puntos</p></h3>\r\n            </div>\r\n\r\n\r\n        </div>\r\n        <div class=\"row \">\r\n            <div class=\"col-md-9 espe\" style=\"height: 500px; padding: 50px\">\r\n                <app-caja class=\"text-indent\" *ngFor=\"let caja of cajasarray \" [caja]=caja></app-caja>\r\n            </div>\r\n            <div class=\"col-md-3\" [hidden]=\"escondido\"\r\n                 style=\"display: flex; flex-flow: column nowrap; justify-content: center\">\r\n                <input id=\"inputtest\"\r\n                       type=\"text\"\r\n                       class=\"form-control\"\r\n                       placeholder=\"Vocal o consonante\"\r\n                       maxlength=\"1\" [(ngModel)]=solucion\r\n                       [disabled]=turno>\r\n                <small class=\"form-text text-muted fuente\"> si compruebas no podrás solucionar este turno</small>\r\n                <button class=\"btn btn-warning mb-5\" (click)=\"check(solucion);plusPuntuation(this.varr);nextTurn()\"\r\n                        [disabled]=turno>\r\n                    Comprobar\r\n                    y pasar turno\r\n                </button>\r\n\r\n\r\n                <input type=\"text\" class=\"form-control d-inline-block mt-5 w-100\"\r\n                       aria-describedby=\"solucion\"\r\n                       id=\"solucion\" placeholder=\"Solución\"\r\n                       [disabled]=turno\r\n                       [(ngModel)]=solucionfinal>\r\n                <small id=\"emailHelp\" class=\"form-text text-muted fuente\">Si fallas tu puntuación se verá reducida a la\r\n                    mitad\r\n                </small>\r\n                <button class=\"btn btn-warning\" [disabled]=turno (click)=\"checksolution(solucionfinal);nextTurn()\">\r\n                    Solucionar\r\n                </button>\r\n\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n    <app-chat></app-chat>\r\n\r\n</main>\r\n"

/***/ }),

/***/ "../../../../../src/app/tabla/tabla.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TablaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__socket_service__ = __webpack_require__("../../../../../src/app/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TablaComponent = /** @class */ (function () {
    function TablaComponent(_Socket, router) {
        this._Socket = _Socket;
        this.router = router;
        this.turno = false;
        this.cajasarray = [];
        this.playersOnRoom = true;
        this.contador = 0;
        this.nombres = [];
        this.showpuntuaciones = [];
        this.escondido = true;
    }
    TablaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.begin();
        this._Socket.nuevoUsuario$.subscribe(function (data) { return _this.currentPlayer = data; });
        if (!this.currentPlayer)
            this.currentPlayer = this._Socket.currentPlayerBackup;
        this._Socket.roomInfo$.subscribe(function (data) { return _this.currentRoom = data; });
        if (!this.currentRoom) {
            this.currentRoom = this._Socket.currentRoomBackup;
        }
        this._Socket.questions$.subscribe(function (data) {
            _this.escondido = false;
            _this.cajasarray = [];
            _this.response = data;
            for (var _i = 0, _a = _this.response.table; _i < _a.length; _i++) {
                var caja = _a[_i];
                _this.cajasarray.push(caja);
            }
            $('#botonbegin').hide();
        });
        this._Socket.test$.subscribe(function (data) {
            _this.GlobalPlayers = data;
            for (var _i = 0, _a = _this.GlobalPlayers; _i < _a.length; _i++) {
                var index = _a[_i];
                if (index.room == _this.currentRoom) {
                    ++_this.contador;
                    if (_this.nombres.indexOf(index.name))
                        _this.nombres.push(index.name);
                }
                if (_this.contador > 1) {
                    _this.playersOnRoom = false;
                    $('#needmore').hide();
                }
            }
            var user = _this.GlobalPlayers.filter(function (data) { return data.name == _this._Socket.miusuario; });
            _this.turno = !user[0].primero;
        });
        this._Socket.turn$.subscribe(function (data) {
            _this.GlobalPlayers = data;
            var user = _this.GlobalPlayers.filter(function (data) { return data.name == _this._Socket.miusuario; });
            _this.turno = !user[0].primero;
        });
        this._Socket.answer$.subscribe(function (data) {
            _this.varr = $('app-caja').filter(function () {
                if (data == $(this).text().toLowerCase().trim()) {
                    $(this).addClass('text-noIndent');
                    return true;
                }
            }).length;
        });
        this._Socket.puntuacion$.subscribe(function (data) {
            _this.GlobalPlayers = data;
            _this.showpuntuaciones = _this.GlobalPlayers.filter(function (data) { return data.room == _this.currentRoom; });
            console.log(_this.showpuntuaciones);
        });
        this._Socket.ganador$.subscribe(function (data) {
            _this.router.navigate(['/ganador']);
            _this.escondido = true;
        });
        this._Socket.ragequit$.subscribe(function (data) {
            _this.router.navigate(['']);
        });
    };
    TablaComponent.prototype.startGame = function () {
        this._Socket.startGame();
    };
    TablaComponent.prototype.begin = function () {
        this._Socket.begin();
    };
    TablaComponent.prototype.check = function (solucion) {
        var _this = this;
        this._Socket.check(solucion.trim());
        this._Socket.socket.on('sumapuntos', function (data) { return _this.plusPuntuation(_this.varr); });
        this.solucion = '';
    };
    TablaComponent.prototype.checksolution = function (solucion) {
        this._Socket.chechsolution(solucion.trim());
        this.solucionfinal = "";
    };
    TablaComponent.prototype.nextTurn = function () {
        //this.plusPuntuation(this.varr);
        this._Socket.nextTurn();
    };
    TablaComponent.prototype.plusPuntuation = function (canti) {
        this._Socket.plusPuntuation(canti);
    };
    TablaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tabla',
            template: __webpack_require__("../../../../../src/app/tabla/tabla.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tabla/tabla.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__socket_service__["a" /* SocketService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], TablaComponent);
    return TablaComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    serverSocket: "http://localhost:3000"
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map