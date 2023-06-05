import { ProductService } from './../product.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
    productID = 0;
    productDetails:any;
    constructor(private _activatedRoute:ActivatedRoute, private _productService: ProductService) {
    }

    ngOnInit(): void {
        this._activatedRoute.params.subscribe(data => {
            this.productID = data['id'];

            this._productService.viewProduct(this.productID).subscribe(productData => {
                this.productDetails = productData; // get the existing data of product
                console.log(this.productDetails);
            })
        });
    }

    updateProduct(form:any)
    {
        const updateProduct = {
            id: form.value.id,
            cateogryId: form.value.categoryId,
            productName: form.value.productName,
            descriptions: form.value.descriptions,
            rating: form.value.rating,
            price:form.value.price,
            productImg: 'http://localhost:4200/assets/images/lahenga.jpg',
            isAvailable: 1,
            color: form.value.color,
            reviews: form.value.reviews
        }
        console.log(form);
        this._productService.updateProduct(this.productID, updateProduct).subscribe(data => {
            console.log(data);
        })
    }

}
