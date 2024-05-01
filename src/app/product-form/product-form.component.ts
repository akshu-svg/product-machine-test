import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UuidService } from '../shared/services/uuid.service';
import { Iproduct, ProductsStatus } from '../shared/models/products.interface';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  productsForm !: FormGroup;
 // private _uuid = inject(UuidService);
 private _productsService = inject(ProductsService);
  constructor(
    private _uuid : UuidService
  ) { }

  ngOnInit(): void {
    this.productsForm = new FormGroup({
      pname : new FormControl(null, [Validators.required]),
      pdetails : new FormControl(null, [Validators.required]),
    })
  }

  onProductAdd(){
    if(this.productsForm.valid){
      let obj : Iproduct = {
        ...this.productsForm.value,
        id: this._uuid.uuid(),
        pstatus: ProductsStatus.InProgress
      };
      console.log(obj);
      this._productsService.addNewProduct(obj);
      this.productsForm.reset();
    }
  }
}
