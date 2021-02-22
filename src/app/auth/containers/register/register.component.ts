import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ConfirmationValidator} from '../../validators/confirmation.validator';
import {Router} from '@angular/router';
import {LoginService} from '../../services/login.service';
import {Store} from '@ngrx/store';

@Component({
  selector: 'wj-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private store: Store
  ) {
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: this.formBuilder.control('', [Validators.required]),
      email: this.formBuilder.control('', [Validators.required, Validators.email]),
      password: this.formBuilder.control('', [Validators.required]),
      passwordConfirmation: this.formBuilder.control('', [Validators.required]),
      firstName: this.formBuilder.control('', [Validators.required]),
      lastName: this.formBuilder.control('', [Validators.required]),
      phoneNumber: this.formBuilder.control('', [Validators.required]),
      city: this.formBuilder.control(''),
      street: this.formBuilder.control(''),
      houseNumber: this.formBuilder.control(''),
      province: this.formBuilder.control(''),
      postcode: this.formBuilder.control(''),
      country: this.formBuilder.control(''),
    }, {
      validators: [ConfirmationValidator('password', 'passwordConfirmation')]
    });
  }

  handleSubmitEvent(): void {
    this
      .loginService
      .register(this.registerForm.value)
      .subscribe(
        () => {
          this.router.navigate(['auth', 'login']).then(() => {
          });
        }
      );
  }
}
