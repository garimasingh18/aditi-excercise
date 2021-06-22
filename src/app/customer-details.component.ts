import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css'],
})
export class CustomerDetailsComponent implements OnInit {
  @Input() selectedCustomer: Customer;

  constructor() {}

  ngOnInit(): void {
    // init stuff
  }

  updateClick(fname, lname, item, amount): void {
    this.selectedCustomer.fname = fname;
    this.selectedCustomer.lname = lname;
    this.selectedCustomer.item = item;
    this.selectedCustomer.amount = amount;
  }
}
