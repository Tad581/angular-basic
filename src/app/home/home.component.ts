import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  headerName = 'Welcome to Angular';

  salary = 1000;

  handleClick(name: string) {
    this.headerName = name;
    console.log('run');
  }
  ngOnInit(): void {}
}
