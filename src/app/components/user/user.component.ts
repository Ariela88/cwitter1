import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurUser } from 'src/app/model/our-user';
import { FirestoreService } from 'src/app/services/firestore.service';
import { User } from 'firebase/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {



  user?: OurUser


  constructor(private authServ: AuthService){

  }

  ngOnInit(): void {
    this.authServ.ourUser.subscribe();
    console.log(this.user);

  }



}
