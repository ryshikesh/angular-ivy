import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  currentDate = new Date();
  ccyAmount = 10000;
  decimalAmount = 9870.00;
  sscMarks = 67;
}
