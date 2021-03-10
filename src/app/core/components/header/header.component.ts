import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {OAuthService} from 'angular-oauth2-oidc';

@Component({
  selector: 'wj-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public searchForm: FormGroup;

  constructor(
    private store: Store,
    private formBuilder: FormBuilder,
    private oauthService: OAuthService
  ) {
  }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      search: this.formBuilder.control('', Validators.required)
    });
  }

  handleLoginClick(): void {
    this.oauthService.initLoginFlow();
  }
}
