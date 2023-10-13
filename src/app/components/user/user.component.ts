import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurUser } from 'src/app/model/our-user';
import { FirestoreService } from 'src/app/services/firestore.service';
import { User } from 'firebase/auth';
import { AuthService } from 'src/app/services/auth.service';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Cwit } from 'src/app/model/cwit';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule,MatCardModule,MatButtonModule,ReactiveFormsModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
onSubmit() {
throw new Error('Method not implemented.');
}

fireUser?: User;
  ourUser?: OurUser;

  userCwits: Cwit[] = [];


  postCwit =  this.fb.group({
    text:['']

  })


  user: OurUser | null = null;
  postCwitForm!: FormGroup;
  postFormVisible = false;
  id:string = ''


  constructor(private authServ: AuthService,private fb: FormBuilder, private db:FirestoreService){
    this.authServ.firebaseUser.subscribe(fUser => {
      if (fUser) {
        this.fireUser = fUser;
        this.loadUserCwits(this.fireUser.uid)
      }
    })

    this.authServ.ourUser.subscribe(oUser => {
      if (oUser) {
        this.ourUser = oUser
      }
    })
  }

  loadUserCwits(uid: string){
   //this.db.loadUserCwits(uid).subscribe(cwits => this.userCwits = cwits)
  }


  togglePostForm() {
    this.postFormVisible = !this.postFormVisible;
  }


}
