import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ProductService } from '../products/product.service';
import { ProductCategoryService } from '../product-categories/product-category.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'pm-product-progress',
  templateUrl: './product-progress.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductProgressComponent implements OnInit {

    // Action stream
    private fields = new BehaviorSubject<number>(0);
    fieldsAction$ = this.fields.asObservable();

    
  constructor(private productService: ProductService, private productCategoryService: ProductCategoryService) { }

  ngOnInit() {
  }

}
