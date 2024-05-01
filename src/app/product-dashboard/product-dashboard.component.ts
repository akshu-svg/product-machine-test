import { Component, OnInit, inject } from '@angular/core';
import { ProductsService } from '../shared/services/products.service';
import { Iproduct } from '../shared/models/products.interface';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {
  productsArr !: Array<Iproduct>;
  private _productsService = inject (ProductsService)
  constructor() { }

  ngOnInit(): void {
    this.productsArr = this._productsService.fetchAllProducts()
  }

}
