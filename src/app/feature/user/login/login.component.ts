import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'stap-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = this.fb.group({
    username: [null, Validators.required],
    password:  [null, Validators.required] });

  hasUnitNumber = false;

  constructor(private fb: FormBuilder,
              private auth: AuthService,
              private router: Router,
              private snackBar: MatSnackBar
              ) {}

  onSubmit() {
    this.snackBar.open('hits submit button', '', {
      duration: 3000
    });
    // finer understanding of observable pipe, map is required here to register to the service.
    this.auth.login(this.loginForm.value);
    if (this.auth.isLoggedIn()) {
      this.snackBar.open('You are now logged in as ' + this.auth.currentUser.username );
    }
  }

  onCancel(){
    this.snackBar.open('hits cancel button');
    this.router.navigate(['/home']);
  }
}
