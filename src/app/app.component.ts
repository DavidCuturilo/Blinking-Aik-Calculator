import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aik-calculator';
  isAikPaySelected = true;

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 100) + 'k';
    }

    return value;
  }
  onSelect(){
    this.isAikPaySelected=!this.isAikPaySelected;
  }


}
