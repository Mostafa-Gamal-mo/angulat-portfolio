import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  userName:string='';
  userEmail:string='';
  userPhone:string='';
  userMessage:string='';

  contectForm :FormGroup = new FormGroup({
    name:new FormControl (null,[Validators.required ,Validators.minLength(3),Validators.maxLength(20)]),
    email:new FormControl (null,[Validators.required,Validators.email]),
    phone:new FormControl (null,[Validators.required ,Validators.pattern(/^01[0125][0-9]{8}$/)]),
    message:new FormControl (null,[Validators.required]),
 
  })
  sendData(){
    console.log(this.contectForm);
    
  }
    


}




