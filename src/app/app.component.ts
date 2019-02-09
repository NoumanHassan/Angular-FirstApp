import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
    .present {
      color: white;
    }
  `]
})
export class AppComponent {
  title = 'FirstApp';
  titleName = '';
  allowEdit: boolean = false;
  status: string = 'Present';
 
  constructor() {
    setTimeout(() => {
      this.allowEdit = true;
    }, 2000);
    
    this.status = Math.random() > 0.5 ? 'Present' : 'Absent';
   }
   
   getStatus() {
     return this.status;
   }

   getColor() {
    return this.status === 'Present' ? '#000' : '#f00';
   }

  ngOnInit() {
  }
}
