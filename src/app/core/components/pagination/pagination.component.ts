import {Component, Input, OnInit} from '@angular/core';
import {Pageable} from '../../models/api-response';

@Component({
  selector: 'wj-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input()
  public pageable: Pageable<any>;

  public pages: number[];

  constructor() {
  }

  ngOnInit(): void {
    this.pages = [...Array(this.pageable.totalPages).keys()].map(page => page + 1);
  }

}
