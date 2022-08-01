import { Component } from '@angular/core';
import * as AOS from 'aos';

//const AOS = require('aos');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tlog';
  ngOnInit() {
    AOS.init();
  }
}
