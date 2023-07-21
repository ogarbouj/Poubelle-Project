import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetAllMemberItem } from 'src/app/dtos/GetAllMemberItem';
import { MembershipService } from 'src/app/services/membership.service';

@Component({
  selector: 'app-getAllMembershipsAdmin',
  templateUrl: './getAllMembershipsAdmin.component.html',
  styleUrls: ['./getAllMembershipsAdmin.component.scss']
})
export class GetAllMembershipsAdminComponent implements OnInit {

  memberships: GetAllMemberItem[] = [];
  pageNumber: number = 1;
  pageSize: number = 10;
  totalCount: number;
  totalPages: number;

  constructor(private membershipServices: MembershipService, private router: Router) { }

  ngOnInit() {
    this.getMemberShipService(this.pageNumber);
  }

  getMemberShipService(pgNumber: number) {
    this.membershipServices.getAllAsync(pgNumber, this.pageSize).subscribe(
      (res) => {
        this.pageNumber = res.pageNumber;
        this.pageSize = res.pageSize;
        this.memberships = res.memberships;
        this.totalCount = res.totalCount;
        this.totalPages = res.totalPages;
      },
      (err) => {
        console.log("catched error");
        console.log(err);
      });
  }

  getPreviousPage() {
    if (this.pageNumber > 0)
      this.getMemberShipService(this.pageNumber - 1);
  }

  getNextPage() {
    if (this.totalPages > this.pageNumber)
      this.getMemberShipService(this.pageNumber + 1);
  }

  counter(i: number) {
    return new Array(i);
  }

  getMembershipById(membership: GetAllMemberItem){
    this.router.navigateByUrl(`/getMembershipByIdComponent/${membership.id}`);
  }

}
