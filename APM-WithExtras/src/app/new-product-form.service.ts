import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewProductFormService {

  constructor() { }
  watchableForm$: Observable<any>;

  watchThisForm(latestForm: Observable<any>)
  {
    //this.watchThisForm = latestForm;
  }
}
