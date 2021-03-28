import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

  userData=new user();
  Users=[];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    let newObj=new user();
    newObj={...this.userData}
    this.Users.push(newObj)
    console.log(this.Users)
  }
}

export class user{
  public name:string;
  public password:string;
  public gender:string;
  public designation:string;
  public about:string
}