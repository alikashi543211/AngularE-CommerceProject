import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css']
})
export class ViewAllProductComponent implements OnInit {
    productList:any;
    constructor(private _prodcutService:ProductService) { }

    ngOnInit(): void {
        this._prodcutService.viewAllProduct().subscribe(data => {
            this.productList = data;
        })
    }

}
