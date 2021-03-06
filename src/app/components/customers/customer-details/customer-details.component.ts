import { Component, OnInit, Input } from '@angular/core';

import { Customer } from '../../../models/customer';
import { CustomerService } from '../../../services/customer.service';

@Component({
  selector: 'customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  @Input() customer: Customer;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

  updateActive(isActive: boolean) {
    this.customerService.updateCustomer(this.customer.key, { active: isActive });
  }

  deleteCustomer() {
    this.customerService.deleteCustomer(this.customer.key);
  }
}
