import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor() { }
  usersObj:object={}

  add_users(userData){

    this.usersObj={
      name:userData.name,
      address:userData.address,
      email:userData.email
    }
    console.log(this.usersObj);
  } 
  ngOnInit() {
  }

}
