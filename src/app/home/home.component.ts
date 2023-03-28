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

  fontSize = '50px';

  isDisabled = false;

  titleClass = 'head';

  headStyle = { color: 'yellow', 'font-size': '60px' };

  array = [1, 2, 3, 4, 5];

  handleClick(name: string) {
    this.headerName = name;
    this.isDisabled = !this.isDisabled;
  }

  handleFontSize() {
    // this.fontSize++;
  }
  ngOnInit(): void {}
}
