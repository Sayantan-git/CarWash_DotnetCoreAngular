import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from '../_Services/signup.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  responsedata:any;
  signupForm!: FormGroup;
  errormessage = '';
  hide = true;

  constructor(private route:Router, private formBuilder : FormBuilder, private service:SignupService) { }

  ngOnInit(): any {}

  signupform= new FormGroup({
      userName : new FormControl('', [Validators.required, Validators.pattern("^[A-Za-z ]+$")]),
      userAddress :new FormControl('',[Validators.required]),
      userPhnumber : new FormControl('',[Validators.required, Validators.pattern("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$")]),
      userEmail: new FormControl('',[Validators.required, Validators.email]),
      userPassword : new FormControl('',[Validators.required, Validators.pattern("^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$")]),
      userStatus : new FormControl('Active',[Validators.required]),
      role : new FormControl('Customer',[Validators.required])
    })


    get f(){
   
      return this.signupform.controls;
    }


  signUp()
  {
    console.log(this.signupform.value)
    if(this.signupform.valid){
      this.service.proceedSignup(this.signupform.value).subscribe(result=>{
        if(result!=null)
        {
          alert("Registration Successful");
          this.route.navigate(['/home'])
        }
      })
    }
  }
  

}
