import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

    constructor(private _httpClient:HttpClient) { }

    createProduct(productBody:any)
    {
        const baseUrl = "http://localhost:3000/products";
        return this._httpClient.post(baseUrl, productBody);
    }
    viewProduct(productId:any)
    {
        const baseUrl = "http://localhost:3000/product/" + productId;
        return this._httpClient.get(baseUrl);
    }
    updateProduct(productId:any, productBody:any)
    {
        const baseUrl = "http://localhost:3000/product/" + productId;
        return this._httpClient.put(baseUrl, productBody);
    }
    deleteProduct(productId:any)
    {
        const baseUrl = "http://localhost:3000/product/" + productId;
        return this._httpClient.delete(baseUrl, productId);
    }
    searchCategoryProduct(categoryID:any)
    {
        const baseUrl = "http://localhost:3000/product/category=" + categoryID;
        return this._httpClient.get(baseUrl);
    }
    searchDateProduct(dateParam:any)
    {
        const baseUrl = "http://localhost:3000/product/date=" + dateParam;
        return this._httpClient.get(baseUrl);
    }
}
