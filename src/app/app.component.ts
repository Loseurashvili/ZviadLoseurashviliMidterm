import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';

import { ParentUser } from './parent-user';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Zviad Loseurashvili';

  readData  : any;

  usersData: any[5] = [
    { firstname: 'khvicha', lastname: 'kvaratskhelia', age: 25 },
    { firstname: 'saba', lastname: 'lobjanidze', age: 19 },
    { firstname: 'giorgi', lastname: 'qvialitaia', age: 22 },
    { firstname: 'giorgi', lastname: 'mamardashvili', age: 30 },
    { firstname: 'giorgi', lastname: 'miqautadze', age: 18 },
  ];

  parentUsersData : ParentUser[] = [{id: 1 , FirstName : 'Zviad', LastName : "Loseurashvili", DateOfBirth : new Date(), PhoneNumber  :  7777777, Email : "zvio.lose@gmail.com"},{id : 2445,FirstName : 'givi', LastName : "jojua", DateOfBirth : new Date(), PhoneNumber  :  554782565, Email : "jjojuaa@gmail.com"}]

  takeData(data : any){
    this.readData = data;
  }

  constructor(private fb: FormBuilder) {}

  registrationForm = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(3)]],
    surname: [''],
    address: this.fb.group({
      id: [],
      phonenumber: [''],
      email: [''],
    }),
  });
  


  
}
