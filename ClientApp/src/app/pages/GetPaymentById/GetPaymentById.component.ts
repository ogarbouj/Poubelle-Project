import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MembershipService } from 'src/app/services/membership.service';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-GetPaymentById',
  templateUrl: './GetPaymentById.component.html',
  styleUrls: ['./GetPaymentById.component.scss']
})
export class GetPaymentByIdComponent implements OnInit {

  data: any;

  constructor(private paymentServices: PaymentService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getpaymentById();
  }

  getpaymentById() {
    this.paymentServices.getByIdAsync(this.route.snapshot.paramMap.get('id')).subscribe(
      (res) => {
        this.data = res;
        console.log(this.data);
      },
      (err) => {
        console.log(err);
      }
    )
  }

  getMembershipById(){
    this.router.navigateByUrl(`/getMembershipByIdComponent/${this.data.membership.id}`);
  }

}
