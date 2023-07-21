import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-GetInvoiceById',
  templateUrl: './GetInvoiceById.component.html',
  styleUrls: ['./GetInvoiceById.component.scss']
})
export class GetInvoiceByIdComponent implements OnInit {

  data: any;

  constructor(private invoiceServices: InvoiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getInvoiceById();
  }

  getInvoiceById() {
    this.invoiceServices.getByIdAsync(this.route.snapshot.paramMap.get('id')).subscribe(
      (res) => {
        this.data = res;
        console.log(this.data);
      },
      (err) => {
        console.log(err);
      }
    )
  }

  printInvoice() {
    window.print();
  }

}
