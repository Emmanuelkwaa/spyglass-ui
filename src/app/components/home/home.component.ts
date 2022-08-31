import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  menuItems = [
    {
      title: 'Home',
      className: 'menu-item',
      icon: 'home',
      path: '/'
    },
    {
      title: 'Completed',
      className: 'menu-item',
      icon: 'check',
      path: '/completed'
    },
    {
      title: 'Friends',
      className: 'menu-item',
      icon: 'group',
      path: '/friends'
    }
  ]

}
