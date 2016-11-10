System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var Item, AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Item = (function () {
                function Item(purchase, price, id) {
                    this.purchase = purchase;
                    this.price = price;
                    this.id = id;
                }
                return Item;
            }());
            exports_1("Item", Item);
            AppComponent = (function () {
                function AppComponent() {
                    this.items = [];
                    this.total = this.count();
                }
                AppComponent.prototype.count = function () {
                    var total = 0;
                    for (var i = 0; i < this.items.length; i++) {
                        total += this.items[i].price;
                    }
                    return this.total = total;
                };
                AppComponent.prototype.addItem = function (text, price) {
                    if (text == null || text == undefined || text.trim() == "")
                        return;
                    if (price == null || price == undefined)
                        return;
                    this.items.push(new Item(text, price, this.items.length + 1));
                    this.count();
                };
                AppComponent.prototype.deleteItem = function (id) {
                    console.log(this);
                    console.log(id);
                    if (id == null || id == undefined)
                        return;
                    this.items.splice(id - 1, 1);
                    for (var key in this.items) {
                        this.items[key].id = +key + 1;
                    }
                    this.count();
                };
                AppComponent.prototype.clearAll = function () {
                    this.items.length = 0;
                    this.count();
                };
                AppComponent.prototype.showItem = function () {
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'bill-app',
                        templateUrl: './app/app.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=app.component.js.map
