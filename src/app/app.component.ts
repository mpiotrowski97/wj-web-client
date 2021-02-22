import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {InitService} from './core/services/init.service';

@Component({
  selector: 'wj-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public error$: Observable<boolean>;

  constructor(
    private http: HttpClient,
    private initService: InitService
  ) {
  }

  ngOnInit(): void {
  }
}
