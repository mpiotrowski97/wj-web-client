import {Component, OnInit} from '@angular/core';
import {Category} from '../../models/category';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {CoreState} from '../../store/core.reducer';

@Component({
  selector: 'wj-subnav',
  templateUrl: './subnav.component.html',
  styleUrls: ['./subnav.component.scss']
})
export class SubnavComponent implements OnInit {
  public categories$: Observable<Category[]>;

  constructor(private store: Store<{core: CoreState}>) {
  }

  ngOnInit(): void {
  }
}
