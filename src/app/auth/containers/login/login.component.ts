import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {loginUserAction} from '../../store/auth.actions';

@Component({
  selector: 'wj-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public loginForm: FormGroup = this.formBuilder.group({
    username: this.formBuilder.control('', [Validators.required]),
    password: this.formBuilder.control('', [Validators.required])
  });

  constructor(
    private formBuilder: FormBuilder,
    private store: Store
  ) {
  }

  handleFormSubmit(): void {
    this.store.dispatch(loginUserAction({
      username: this.loginForm.get('username').value,
      password: this.loginForm.get('password').value
    }));
  }
}
