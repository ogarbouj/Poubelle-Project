import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MembershipService } from 'src/app/services/membership.service';

@Component({
  selector: 'app-getMembershipById',
  templateUrl: './getMembershipById.component.html',
  styleUrls: ['./getMembershipById.component.scss']
})
export class GetMembershipByIdComponent implements OnInit {

  data: any;

  constructor(private membershipServices: MembershipService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getmembershipById();
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

}
