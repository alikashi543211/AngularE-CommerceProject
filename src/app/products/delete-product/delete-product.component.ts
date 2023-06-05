import { ProductService } from './../product.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
    productID = 0;
    constructor(private _activatedRoute: ActivatedRoute, private _productService:ProductService) { }

    ngOnInit(): void {
        this._activatedRoute.params.subscribe(data => {
            this.productID = data['id']; // Capture the ID which i want delete product
        })

        this._productService.deleteProduct(this.productID).subscribe(deletedData => {
            console.log("Product has been Deleted");
        });
    }

}
