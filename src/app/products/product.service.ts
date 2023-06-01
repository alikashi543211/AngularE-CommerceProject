import { Category } from './../site-layout/category';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

    constructor(private _httpClient:HttpClient) { }

    createProduct(productBody:any):Observable<Product>
    {
        const baseUrl = "http://localhost:3000/product";
        return this._httpClient.post<Product>(baseUrl, productBody);
    }
    viewAllProduct():Observable<Product>
    {
        const baseUrl = "http://localhost:3000/product/";
        return this._httpClient.get<Product>(baseUrl);
    }
    viewProduct(productId:any):Observable<Product>
    {
        const baseUrl = "http://localhost:3000/product/" + productId;
        return this._httpClient.get<Product>(baseUrl);
    }
    updateProduct(productId:any, productBody:any):Observable<Product>
    {
        const baseUrl = "http://localhost:3000/product/" + productId;
        return this._httpClient.put<Product>(baseUrl, productBody);
    }
    deleteProduct(productId:any):Observable<Product>
    {
        const baseUrl = "http://localhost:3000/product/" + productId;
        return this._httpClient.delete<Product>(baseUrl);
    }
    searchCategoryProduct(categoryID:any):Observable<Product>
    {
        const baseUrl = "http://localhost:3000/product?category_id=" + categoryID;
        return this._httpClient.get<Product>(baseUrl);
    }
    searchDateProduct(dateParam:any):Observable<Product>
    {
        const baseUrl = "http://localhost:3000/product/date=" + dateParam;
        return this._httpClient.get<Product>(baseUrl);
    }
    getCategory():Observable<Category>
    {
        const categoryUrl = "http://localhost:3000/categories";
        return this._httpClient.get<Category>(categoryUrl);
    }

}
