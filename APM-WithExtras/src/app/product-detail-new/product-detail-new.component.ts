import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'pm-product-detail-new',
  templateUrl: './product-detail-new.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailNewComponent implements OnInit {


  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });



  formObserv$ = this.profileForm.valueChanges;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formObserv$.subscribe(
      tap(x=> console.log("got " + x))
    );
  }

  ngOnDestroy()
  {
    //this.formObserv$.unsubscribe();
  }

}
