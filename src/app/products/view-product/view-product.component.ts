import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
    productID = 0;
    productDetail:any;
    constructor(private _activatedRoute:ActivatedRoute, private _productService:ProductService) { }

    ngOnInit(): void {
        this._activatedRoute.params.subscribe(data => {
            this.productID = data['id'];
            this._productService.viewProduct(this.productID).subscribe(productData => {
                this.productDetail = productData;
            });
        })
    }

}
