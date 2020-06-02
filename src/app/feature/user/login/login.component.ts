import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'stap-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = this.fb.group({
    username: [null, Validators.required],
    password:  [null, Validators.required] });

 hidePassword = true;

  constructor(private fb: FormBuilder,
              private auth: AuthService,
              private router: Router,
              private snackBar: MatSnackBar,
              private logger: NGXLogger
              ) {}

  onSubmit() {
    this.logger.info('Submit logging information: ',this.loginForm.value);
    // finer understanding of observable pipe, map is required here to register to the service
    // this will secure the usage of below isLogged as is logged should be an observable.
    this.auth.login(this.loginForm.value);
    if (this.auth.isLoggedIn()) {
      this.snackBar.open('You are now logged in as ' + this.auth.currentUser.username );
    } else{
      this.snackBar.open('Your authentication failed, please check your username and your password.' );
    }
  }

  onCancel(){
    this.router.navigate(['/home']);
  }
}
