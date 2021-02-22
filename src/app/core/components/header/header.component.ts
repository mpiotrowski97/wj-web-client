import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'wj-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public cartValue$: Observable<number>;

  public searchForm: FormGroup;

  constructor(
    private store: Store,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      search: this.formBuilder.control('', Validators.required)
    });
  }

  handleSearchClick(): void {
    this.router.navigate(['/', 'books'], {queryParams: {search: this.searchForm.get('search').value}});
  }
}
