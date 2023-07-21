import { GetPaymentByIdComponent } from './../GetPaymentById/GetPaymentById.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-PayMembership',
  templateUrl: './PayMembership.component.html',
  styleUrls: ['./PayMembership.component.scss']
})
export class PayMembershipComponent implements OnInit {

  paymentId: string;
  membershipId: string;
  paymentUrl: string;

  constructor(private paymentServices: PaymentService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.membershipId = this.route.snapshot.paramMap.get('id');
    this.pay();
  }

  pay() {
    this.paymentServices.PayAsync(this.membershipId).subscribe(
      (res) => {
        this.paymentUrl = res.paymentURI;
        this.paymentId = res.id;
        console.log(res);
      },
      (err) => {
        console.log("pay error:");
        console.log(err);
      }
    );
  }

  initPayment(paymentAction: string) {

    console.log(`payment ${this.paymentId}`);

    this.paymentServices.initPaymentAsync(paymentAction, this.paymentId).subscribe(
      (res) => {
        this.router.navigateByUrl(`/GetAllInvoiceClient`);
      },
      (err) => {
        console.log("initPayment error:");
        console.log(err);
      }
    )

  }

}
