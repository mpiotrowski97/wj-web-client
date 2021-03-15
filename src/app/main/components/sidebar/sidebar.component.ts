import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'wj-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {


  items: NbMenuItem[] = [
    {
      title: 'Profile',
      icon: 'person-outline',
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
