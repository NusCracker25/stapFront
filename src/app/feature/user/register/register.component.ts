import { passwordValidator } from './../password-validator.directive';
import { NGXLogger } from 'ngx-logger';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from '@core/model/user';
import { AuthService } from '@core/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'stap-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    public router: Router,
    private snackBar: MatSnackBar,
    private logger: NGXLogger ) {}

  /**
   * initial creation of form
   */
  ngOnInit(){
    this.createForm();
  }

  /**
   * creates the form
   */
  createForm(){
    this.registerForm = this.fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [ null, [Validators.required, Validators.email]],
      username: [ null, Validators.required],
      password: [ null, Validators.required],
      password2: [ null, [Validators.required]],
      plan: ['free', Validators.required]
    }, {validators: passwordValidator});
  }
    /**
     * onsubmit is validating the password consistency and checks register the new user in the database
     * upon success, user is navigated to the login page
     */
  onSubmit() {
    // check that password and its confirmation are consistent
    if (this.registerForm.value.password === this.registerForm.value.password2 ){
      this.logger.log('passwords are the same'); // TODO: check in the form itself
    }
    this.auth.register(this.registerForm.value).subscribe((res) => {
      if (res.success) {
        this.registerForm.reset();
        this.snackBar.open('New user registered', '', {
          duration: 3000
        });
        this.router.navigate(['/user/login']);
      }else{
        this.snackBar.open('New user could not be registered ' + res.error.msg, '', {
          duration: 3000
        });
        this.registerForm.reset();
      }
    });
  }

  onCancel(){
    this.router.navigate(['/user/login']);
  }
}
