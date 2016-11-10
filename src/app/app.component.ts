import { Component } from '@angular/core';

export class Item { 
    purchase: string;
    price: number;
    id: number;

    constructor(purchase: string, price: number, id: number) {
    	this.purchase = purchase;
    	this.price = price;
        this.id = id;
    }
}
@Component({
	selector: 'bill-app',
    templateUrl: './app/app.html'
})
export class AppComponent {
    items: Item[] = 
    [
    ];
    total: number = this.count();
    count(): number {
        let total: number = 0;
        for (let i = 0; i < this.items.length; i++) {
            total += this.items[i].price;
        }
        return this.total = total;
    }
    addItem(text: string, price: number): void {

        if(text==null || text==undefined || text.trim()=="")
            return;
        if(price==null || price==undefined)
            return;
        this.items.push(new Item(text, price, this.items.length + 1));
        this.count();
    }
    deleteItem(id: number): void {
        console.log(this);
        console.log(id);
        if(id==null || id==undefined)
            return;
        this.items.splice(id-1, 1);
        for (let key in this.items) {
            this.items[key].id = +key+1;
        }
        this.count();
    }
    clearAll(): void {
        this.items.length = 0;
        this.count();
    }
    showItem(): void {

    }
}