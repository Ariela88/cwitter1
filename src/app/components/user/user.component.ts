import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurUser } from 'src/app/model/our-user';
import { FirestoreService } from 'src/app/services/firestore.service';
import { User } from 'firebase/auth';
import { AuthService } from 'src/app/services/auth.service';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule,MatCardModule,MatButtonModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {



  user: OurUser | null = null;


  constructor(private authServ: AuthService){}

  ngOnInit(): void {
   
    this.authServ.ourUser.subscribe((user) => {
      
      this.user = user
      // Stampa le informazioni dell'utente nel log
      console.log(this.user);
    });

    
  }



}
