import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { applicationContentLoadingSelector } from '../core/store/core.reducer';

@Component({
  selector: 'wj-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public isContentLoading$: Observable<boolean>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.isContentLoading$ = this.store.select(applicationContentLoadingSelector);
  }
}
