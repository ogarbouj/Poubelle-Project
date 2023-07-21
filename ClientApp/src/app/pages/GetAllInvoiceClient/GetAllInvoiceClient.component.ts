import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetAllInvoicesItem } from 'src/app/dtos/GetAllInvoicesItem';
import { GetAllMemberItem } from 'src/app/dtos/GetAllMemberItem';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-GetAllInvoiceClient',
  templateUrl: './GetAllInvoiceClient.component.html',
  styleUrls: ['./GetAllInvoiceClient.component.scss']
})
export class GetAllInvoiceClientComponent implements OnInit {

  invoices: GetAllInvoicesItem[] = [];
  pageNumber: number = 1;
  pageSize: number = 10;
  totalCount: number;
  totalPages: number;

  constructor(private invoiceServices: InvoiceService, private router: Router) { }

  ngOnInit() {
    this.getInvoiceService(this.pageNumber);
  }

  getInvoiceService(pgNumber: number) {
    this.invoiceServices.getAllByUserAsync("64b6dedf627e779936bae9a0", pgNumber, this.pageSize).subscribe(
      (res) => {
        this.invoices = res.invoices;
        this.pageNumber = res.pageNumber;
        this.pageSize = res.pageSize;
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
      this.getInvoiceService(this.pageNumber - 1);
  }

  getNextPage() {
    if (this.totalPages > this.pageNumber)
      this.getInvoiceService(this.pageNumber + 1);
  }

  counter(i: number) {
    return new Array(i);
  }

  getInvoiceById(membership: GetAllMemberItem) {
    this.router.navigateByUrl(`/GetInvoiceById/${membership.id}`);
  }

}
