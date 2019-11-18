import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ProductService } from '../products/product.service';
import { ProductCategoryService } from '../product-categories/product-category.service';
import { Observable } from 'rxjs';
import { Product } from '../products/product';

@Component({
  selector: 'pm-product-badge',
  templateUrl: './product-badge.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductBadgeComponent implements OnInit {

  selectedProduct$: Observable<Product> = this.productService.selectedProduct$;


  constructor(private productService: ProductService, private productCategoryService: ProductCategoryService) { }

  ngOnInit() {
  }

}
