import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ConfirmationValidator} from '../../validators/confirmation.validator';
import {AuthService} from '../../services/auth.service';
import {Store} from '@ngrx/store';

@Component({
  selector: 'wj-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  public resetPasswordForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private store: Store
  ) {
  }

  ngOnInit(): void {
    this.resetPasswordForm = this.formBuilder.group({
      password: this.formBuilder.control('', [Validators.required]),
      passwordConfirmation: this.formBuilder.control('', [Validators.required])
    }, {validators: [ConfirmationValidator('password', 'passwordConfirmation')]});
  }

  handleFormSubmit(): void {
    const code = this.route.snapshot.queryParamMap.get('code');

    this.authService.resetPassword(code, this.resetPasswordForm.get('password').value)
      .subscribe(
        () => {
          this.router.navigate(['auth', 'login']).then(() => {
          });
        }
      );
  }
}
