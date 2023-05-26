import { Category } from './../category';
import { ProductService } from './../../products/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

    categoryList: any;
    constructor(private _productService:ProductService) {

    }

    ngOnInit(): void {
        this._productService.getCategory().subscribe(data => {
            this.categoryList = data;
        })
    }

}
