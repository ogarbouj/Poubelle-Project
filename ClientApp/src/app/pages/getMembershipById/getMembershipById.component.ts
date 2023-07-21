import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MembershipService } from 'src/app/services/membership.service';

@Component({
  selector: 'app-getMembershipById',
  templateUrl: './getMembershipById.component.html',
  styleUrls: ['./getMembershipById.component.scss']
})
export class GetMembershipByIdComponent implements OnInit {

  data: any;
  userRole: string = 'user';

  constructor(private membershipServices: MembershipService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    console.log('User Role:', this.userRole);
    this.getmembershipById();
  }

  initRoles(){
     /*
      * Init User Role
      */
  }

  getmembershipById() {
    this.membershipServices.getByIdAsync(this.route.snapshot.paramMap.get('id')).subscribe(
      (res) => {
        this.data = res;
      },
      (err) => {
        console.log(err);
      }
    )
  }

  pay(){
    this.router.navigateByUrl(`/PayMembership/${this.data.membership.id}`);
  }

}
