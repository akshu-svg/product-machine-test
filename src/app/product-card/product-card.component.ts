import { Component, Input, OnInit, inject } from '@angular/core';
import { Iproduct, ProductsStatus } from '../shared/models/products.interface';
import { ProductsService } from '../shared/services/products.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
@Input() getProduct !: Iproduct;
allProdcutsStatus = ProductsStatus
private _productsService = inject(ProductsService);
  constructor() { }

  ngOnInit(): void {
  }

  onStatusChange(val : string){
    this.getProduct.pstatus = val;
    this._productsService.updateProdStatus(this.getProduct.id, val);
  }

}
