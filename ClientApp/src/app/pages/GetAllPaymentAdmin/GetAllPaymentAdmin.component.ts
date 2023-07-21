import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetAllPaymentItem } from 'src/app/dtos/GetAllPayemntItem';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-GetAllPaymentAdmin',
  templateUrl: './GetAllPaymentAdmin.component.html',
  styleUrls: ['./GetAllPaymentAdmin.component.scss']
})
export class GetAllPaymentAdminComponent implements OnInit {

  payments: any[] = [];
  pageNumber: number = 1;
  pageSize: number = 10;
  totalCount: number;
  totalPages: number;

  constructor(private paymentServices: PaymentService, private router: Router) { }

  ngOnInit() {
    this.getPayemntService(this.pageNumber);
  }

  getPayemntService(pgNumber: number) {
    this.paymentServices.getAllAsync(pgNumber, this.pageSize).subscribe(
      (res) => {

        this.payments = res.payments;
        this.pageNumber = res.pageNumber;
        this.pageSize = res.pageSize;
        this.totalCount = res.totalCount;
        this.totalPages = res.totalPages;

        console.log('payments:')
        console.log(this.payments);
      },
      (err) => {
        console.log("catched error");
        console.log(err);
      });
  }

  getPreviousPage() {
    if (this.pageNumber > 0)
      this.getPayemntService(this.pageNumber - 1);
  }

  getNextPage() {
    if (this.totalPages > this.pageNumber)
      this.getPayemntService(this.pageNumber + 1);
  }

  counter(i: number) {
    return new Array(i);
  }

  getPaymentsById(payment: GetAllPaymentItem) {
    this.router.navigateByUrl(`/GetPaymentByIdComponent/${payment.id}`);
  }

}
