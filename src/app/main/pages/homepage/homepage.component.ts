import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {OAuthService} from "angular-oauth2-oidc";

@Component({
  selector: 'wj-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private http: HttpClient, private oAuthService: OAuthService) {
  }

  ngOnInit(): void {
    this.http.get(`${environment.apiUrl}/exercises`)
      .subscribe();
  }

  handleLogoutClick(): void {
    this.oAuthService.logOut();
  }
}
