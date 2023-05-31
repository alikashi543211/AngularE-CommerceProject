import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-product-by-category',
  templateUrl: './view-product-by-category.component.html',
  styleUrls: ['./view-product-by-category.component.css']
})
export class ViewProductByCategoryComponent implements OnInit {

    productList:any;
    searchCategory:any;
    constructor(private _prodcutService:ProductService, private _activatedRoute:ActivatedRoute) { }

    ngOnInit(): void {
        this._activatedRoute.params.subscribe(data => {
            this.searchCategory = data['id'];
            console.log("Data ID = " + data['id']);
            this._prodcutService.searchCategoryProduct(this.searchCategory).subscribe(categoryData => {
                this.productList = categoryData;
            })
        })
    }

}
