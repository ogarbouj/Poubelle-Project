import { Component, OnInit } from '@angular/core';
import { TablesService } from 'src/app/services/Tables.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/assets/scss/core/user'; 
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  getForm: User = new User();
  constructor(private tableservice: TablesService, private route: ActivatedRoute) { }

  user:any;
  id : String;
 
  
  ngOnInit() {
    this.getUserById()
  }
  getUserById(){

     const id =localStorage.getItem("user-id")
      this.tableservice.getUserById(id).subscribe(user =>
      this.user=user )
    
  }



  
  }
  

