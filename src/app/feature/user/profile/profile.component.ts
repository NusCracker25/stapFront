import { User } from './../../../core/model/user';
import { AuthService } from 'src/app/core/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'stap-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit{
  addressForm = this.fb.group({
    company: null,
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
    address2: null,
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    shipping: ['free', Validators.required]
  });

  hasUnitNumber = false;

  currentUser: User;

  constructor(private fb: FormBuilder,
              public auth: AuthService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(){
    // const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.auth.getUserProfile().subscribe(res => {
      this.currentUser = res.user;
    });
  }

  onSubmit() {
    alert('Thanks!');
  }
}
