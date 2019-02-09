import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updation',
  templateUrl: './updation.component.html',
  styleUrls: ['./updation.component.css']
})
export class UpdationComponent implements OnInit {

  allowEdit = false;
 
  constructor() {
    setTimeout(() => {
      this.allowEdit = true;
    }, 5000);
   }

  ngOnInit() {
  }

}
