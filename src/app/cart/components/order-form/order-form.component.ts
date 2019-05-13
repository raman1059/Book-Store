import { AppValidators } from './../../../shared/validators/app-validators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  form: FormGroup;
  identity: FormGroup;
  shipping: FormGroup;
  billing: FormGroup;
  submitted = false;

  @Output() formSubmitted: EventEmitter<any> = new EventEmitter();


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // we can also add async validators, array of async validator just after the array of sync validator
    this.identity = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(40)]],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(40)]],
      email: ['', [Validators.required, AppValidators.email('gmail.com' )]],
    });


    this.shipping = this.fb.group({
      street: ['', Validators.required],
      zipCode: ['', [Validators.required, AppValidators.zidCode]],
      city: ['', Validators.required],
      country: ['', Validators.required],

    });

    this.billing = this.fb.group({
      street: ['', Validators.required],
      zipCode: ['', [Validators.required, AppValidators.zidCode]],
      city: ['', Validators.required],
      country: ['', Validators.required],

    });

    this.form = this.fb.group({
      sameAddress: true,
      identity: this.identity,
      shipping: this.shipping,
      // billing: this.billing
    });

    // pass initial data to the form, setvalue but we must pass all the object structutrue
    // we use patch value to pass partial obj
    this.form.patchValue({
      identity: {
        firstName: '',
        lastName: ''
      }
    });

  }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      this.submitForm();
    }
  }

  submitForm() {
    if (this.form.valid) {
      this.formSubmitted.emit(this.form.value);
    }
  }

  isDisabled() {
    return this.submitted && this.form.invalid;
  }

  isSubmitted() {
    return this.submitted;
  }

  hasBillingAddress() {
    return !this.form.value.sameAddress;
  }
  updateBilling() {
     if (this.hasBillingAddress()) {
       this.form.addControl('billing', this.billing);
     }else {
       this.form.removeControl('billing');
     }
  }
}
