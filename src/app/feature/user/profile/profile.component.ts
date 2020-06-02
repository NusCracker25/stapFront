/* standard angular pacckages */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

/* external packages */
import { NGXLogger } from 'ngx-logger';

/* app specific packages */
import { User } from '@core/model/user';
import { AuthService } from '@core/auth.service';

@Component({
  selector: 'stap-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit{

  currentUser: User;

  profileForm: FormGroup;

  canEdit = false;


  constructor(private fb: FormBuilder,
              public auth: AuthService,
              private activatedRoute: ActivatedRoute,
              private logger: NGXLogger) {
  }

  ngOnInit(){
    // creates the form
    this.initForm();
    this.subscribeUser();
    // register to enable/disable switch
    this.onChanges();
  }

  /**
   * follow up with user info
   */
  subscribeUser(){
   // const id = this.activatedRoute.snapshot.paramMap.get('id');
   this.auth.getUserProfile().subscribe(res => {
      this.currentUser = res.user;
      this.profileForm.get('canEdit').setValue(this.canEdit);
      this.profileForm.get('firstName').setValue(this.currentUser.firstName);
      this.profileForm.get('lastName').setValue(this.currentUser.lastName);
      this.profileForm.get('username').setValue(this.currentUser.username);
      this.profileForm.get('email').setValue(this.currentUser.email);
      this.profileForm.get('plan').setValue(this.currentUser.plan);
    });
  }

  /**
   * initialize the form itself
   */
  initForm(){
    this.profileForm = this.fb.group({
      canEdit: [null],
      firstName: [{enabled: this.canEdit}, Validators.required],
      lastName: [{enabled: this.canEdit}, Validators.required],
      username: [{enabled: this.canEdit}, Validators.required],
      email: [{enabled: this.canEdit}, [Validators.required, Validators.email]],
      plan: ['free', Validators.required]
    });
  }

  /**
   *  observes the changes on "canEdit" then update form accordingly
   */
  onChanges() {
    this.profileForm.get('canEdit').valueChanges
    .subscribe(editable => {
        if (editable) {
            this.profileForm.get('firstName').enable();
            this.profileForm.get('lastName').enable();
            this.profileForm.get('username').enable();
            this.profileForm.get('email').enable();
            this.profileForm.get('plan').enable();
            this.canEdit = true;
        }
        else {
          this.profileForm.get('firstName').disable();
          this.profileForm.get('lastName').disable();
          this.profileForm.get('username').disable();
          this.profileForm.get('email').disable();
          this.profileForm.get('plan').disable();
          this.canEdit = false;
        }
    });
  }

  onSubmit() {
    this.logger.info('Form is submitted ' + this.profileForm.value);
  }
}
