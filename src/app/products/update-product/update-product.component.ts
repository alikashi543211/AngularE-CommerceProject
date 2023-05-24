import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
    productID = 0;
    constructor(private _activatedRoute:ActivatedRoute) { }

    ngOnInit(): void {
        this._activatedRoute.params.subscribe(data => {
            this.productID = data['id'];
        });
    }

}
