import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {Store} from '@ngrx/store';

@Component({
  selector: 'wj-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})
export class VerificationComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router,
    private store: Store
  ) {
  }

  ngOnInit(): void {
    this.authService
      .verifyUser(this.route.snapshot.queryParamMap.get('token'))
      .subscribe(
        () => {
          this.router.navigate(['auth', 'login']).then(() => {
          });
        }
      );
  }

}
