import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  countries = ['India', 'USA']
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl(''),  
    }),
    personalData: new FormGroup({
      email: new FormControl(''),
      mobile: new FormControl(''),
      country: new FormControl(''),
    }),
  });
  constructor() { }

  ngOnInit(): void {
  }

}
