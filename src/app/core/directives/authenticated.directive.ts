import {Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {Subscription} from 'rxjs';
import {map} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {isAuthenticatedSelector} from '../../auth/store/auth.reducer';

@Directive({
  selector: '[wjAuthenticated]'
})
export class AuthenticatedDirective implements OnInit, OnDestroy {
  private authenticatedSubscription: Subscription;

  @Input()
  private wjAuthenticated;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private store: Store
  ) {
  }

  ngOnDestroy(): void {
    if (this.authenticatedSubscription) {
      this.authenticatedSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.authenticatedSubscription = this.store
      .select(isAuthenticatedSelector)
      .pipe(
        map(isAuthenticated => isAuthenticated && this.wjAuthenticated || !isAuthenticated && !this.wjAuthenticated)
      )
      .subscribe((isAuthenticated) => {
        isAuthenticated ? this.viewContainer.createEmbeddedView(this.templateRef) : this.viewContainer.clear();
      });
  }


}
