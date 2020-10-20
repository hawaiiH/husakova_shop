export default class ShopService{
    _apiBase = 'http://localhost:3000';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` + 
                `, received ${res.status}`);
        }
        return await res.json();
    }

    async getShopItems () {
        return await this.getResource('/menu/');
    }

    async totalItems () {
        const res = await this.getResource('/menu/');
        const a = +res.length;
        return a;
    }


    async getItem(id) {
        const res = await this.getResource('/menu/');
        const item = res.find( (el) => {
            return el.id === +id;
        }) 
        return item;
    } 

    async postData(url, data) {
        const response = await fetch(`${this._apiBase}/${url}`, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        });
        if (!response.ok){
            throw new Error('json error'); 
        }
    }

    async setOrder(name, phone, order) {
        const res = await this.getResource('/orders/');
        const number = res.length+1;
        const newOrder = {
            id: number,
            name,
            phone,
            order
        }
        await this.postData('orders', newOrder);
    }

    async setCallback(name, phone) {
        const res = await this.getResource('/callback/');
        const number = res.length+1;
        const newCallback = {
            id: number,
            name: name,
            phone: phone
        }
        await this.postData('callback', newCallback);
    }
}