
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  registerForm:FormGroup;
  constructor(private us:UserService, private router:Router) { }

  ngOnInit(): void {this.registerForm=new FormGroup({
    newcourse:new FormControl(null,Validators.required),
  });

}



onSubmit(){
  let userObj=this.registerForm.value;
  this.us.createCourse(userObj).subscribe(
    res=>{
      if(res["message"]=="user existed")
    {
    alert("Course is already taken")
  }
      if(res["message"]=="user created"){
        alert("registration success")

        // this.router.navigateByUrl("/userDashboard")
        
      }

    },
    err=>{
     alert("something went wrong in user creation")
     console.log(err)
   }
  ) 
   
   
  
   
}









}
