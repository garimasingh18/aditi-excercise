import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CUSTOMER } from '../mock-customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent implements OnInit {
  customers = CUSTOMER;
  selectedCustomer: Customer;

  constructor() {}

  ngOnInit(): void {}

  onSelect(customer: Customer): void {
    this.selectedCustomer = customer;
  }
}
