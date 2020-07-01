import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NGXLogger } from 'ngx-logger';
import { AuthService } from '@core/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stap-user-entry',
  templateUrl: './user-entry.component.html',
  styleUrls: ['./user-entry.component.scss']
})
export class UserEntryComponent implements OnInit {

  constructor(
    public auth: AuthService,
    private logger: NGXLogger,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

    /* isLoggedIn(): boolean {
    return this.auth.isLoggedIn();
  } */
  onLogoutClick() {
    this.auth.logout();
    this.router.navigate(['/home']);
  }
}
