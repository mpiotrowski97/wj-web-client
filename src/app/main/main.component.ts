import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'wj-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  items = [
    { title: 'Profile' },
    { title: 'Logout' },
  ];

  constructor(private sidebarService: NbSidebarService) {
  }

  ngOnInit(): void {
  }

  onMenuCollapseClick(): void{
    this.sidebarService.toggle(true, 'left');
  }

}
