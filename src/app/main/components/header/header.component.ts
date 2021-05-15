import { Component, OnInit } from '@angular/core';
import { NbMenuItem, NbMenuService, NbSidebarService } from '@nebular/theme';
import { filter, map } from 'rxjs/operators';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'wj-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public userFullName: string;

  items: NbMenuItem[] = [
    {title: 'Logout'},
  ];

  constructor(
    private sidebarService: NbSidebarService,
    private nbMenuService: NbMenuService,
    private oAuthService: OAuthService
  ) {
  }

  ngOnInit(): void {
    const identityClaims = this.oAuthService.getIdentityClaims() as {name: string};
    this.userFullName = identityClaims.name;

    this.nbMenuService.onItemClick()
      .pipe(
        filter(({tag}) => tag === 'user-context-menu'),
        map(({item: {title}}) => title),
      )
      .subscribe(title => {
        if ('Logout' === title) {
          this.oAuthService.logOut();
        }
      });
  }

  onMenuCollapseClick(): void {
    this.sidebarService.toggle(true, 'left');
  }
}
