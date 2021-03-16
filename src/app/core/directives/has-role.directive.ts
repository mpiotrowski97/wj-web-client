import {Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {Subscription} from 'rxjs';
import {map} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {rolesSelector} from '../../auth/store/auth.reducer';

@Directive({
  selector: '[wjHasRole]'
})
export class HasRoleDirective implements OnInit, OnDestroy {

  private rolesSubscription: Subscription;

  @Input('wjHasRole')
  private role: string;

  constructor(
    private store: Store,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {
  }

  ngOnDestroy(): void {
    if (this.rolesSubscription) {
      this.rolesSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.rolesSubscription = this.store
      .select(rolesSelector)
      .pipe(
        map(roles => !!roles ? roles : []),
        map(roles => roles.includes(this.role))
      )
      .subscribe(hasRole => {
        hasRole ? this.viewContainer.createEmbeddedView(this.templateRef) : this.viewContainer.clear();
      });
  }

}
