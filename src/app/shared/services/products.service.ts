import { Injectable } from '@angular/core';
import { Iproduct, ProductsStatus } from '../models/products.interface';
import { SanckbarService } from './sanckbar.service';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productsArr : Array<Iproduct> = [
    {
      pname : "Oppo R10",
      pdetails : "Mobile123",
      pstatus : "ProductsStatus.InProgress",
      id : "asdfg123456"
    },
    {
      pname : "Vivo V35",
      pdetails : "Mobileqwert",
      pstatus : "ProductsStatus.Dispatched",
      id : "qwer4569"
    },
    {
      pname : "IPhone 15",
      pdetails : "IP69885",
      pstatus : "ProductsStatus.Delievered",
      id : "tyyrtuu456988"
    },
  ]
  constructor(
    private _snackBar : SnackbarService
  ) { }

  fetchAllProducts() : Array<Iproduct>{
    return this.productsArr
  }

  addNewProduct(prod : Iproduct){
    this.productsArr.unshift(prod);
    this._snackBar.snackbar(`New Product ${prod.pname} is added !!!`);
  }

  updateProdStatus(id: string, updatedStatus : ProductsStatus){
    this.productsArr.forEach(prod => {
      if(prod.id === id){
        prod.pstatus = updatedStatus;
        this._snackBar.snackbar(`The status of product ${prod.pname} is updated to ${updatedStatus}`);
      }
    })
  }
}
