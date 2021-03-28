import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , Validators} from '@angular/forms';

import { UserService } from '../user.service';

@Component({
  selector: 'app-user-register-component',
  templateUrl: './user-register-component.component.html',
  styleUrls: ['./user-register-component.component.css']
})
export class UserRegisterComponentComponent implements OnInit {
  registerForm:FormGroup;
  
  courses:any;
  constructor(private us:UserService) { }

  ngOnInit(): void {
    this.registerForm=new FormGroup({
      username:new FormControl(null,Validators.required),
      cs:new FormControl(null)
      })
this.getdata();
  }
  onSubmit(){
    let userObj=this.registerForm.value
    console.log(userObj.username);
    console.log(userObj)
    
}

getdata(){
  this.us.getUsers().subscribe(
    res=>{
      this.courses=res["message"]
    },
    err=>{
      alert("something went wrong")
      console.log(err)
    }
  )
}


}
