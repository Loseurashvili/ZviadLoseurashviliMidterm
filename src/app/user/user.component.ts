import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ChildUser } from '../child-user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input() data : any;
  @Output() childData = new EventEmitter();

  childUserData : ChildUser[] = [{id : 3, FirstName : 'khvicha', LastName : "kvaratskhelia", DateOfBirth : new Date(), PhoneNumber  :  551586636, Email : "khvicha@gmail.com"},{id : 4, FirstName : 'giorgi', LastName : "mikautadze", DateOfBirth : new Date(), PhoneNumber  :  5555555, Email : "miqautadze123@gmail.com"}]

  sendData(){
    this.childData.emit(this.childUserData);
  }
}
