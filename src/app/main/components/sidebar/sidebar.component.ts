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
      title: 'Dashboard',
      icon: 'options-2-outline',
      link: '/'
    },
    {
      title: 'Exercises',
      icon: 'activity-outline',
      children: [
        {
          title: 'My exercises',
          link: 'exercises'
        },
        {
          title: 'Add exercise',
          link: 'exercises/add'
        }
      ]
    },
    {
      title: 'Training plans',
      icon: 'book-open-outline',
      children: [
        {
          title: 'My training plans',
          link: 'training-plans'
        },
        {
          title: 'Add training plan',
          link: 'training-plans/add'
        }
      ]
    },
    {
      title: 'Trainings',
      icon: 'flash-outline'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
