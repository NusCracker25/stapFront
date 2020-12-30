
import { PeopleControllerService } from './../../data/api/services/people-controller.service';
import { NGXLogger } from 'ngx-logger';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NewPeople } from '../../data/api/models';

@Component({
  selector: 'stap-new-people',
  templateUrl: './new-people.component.html',
  styleUrls: ['./new-people.component.scss']
})
export class NewPeopleComponent implements OnInit{

  peopleForm: FormGroup;
  startDate = new Date(1750, 0, 1);

  people: NewPeople;

  constructor(
    private fb: FormBuilder,
    public router: Router,
    private activatedR: ActivatedRoute,
    private snackBar: MatSnackBar,
    private logger: NGXLogger,
    private peopleService: PeopleControllerService ) {}

  /**
   * initial creation of form;
   */
  ngOnInit(){
    this.createForm();
  }

  /**
   * creates the form
   */
  createForm(){
    this.peopleForm = this.fb.group({
      first_name: [null, Validators.required],
      last_name: [null, Validators.required],
      birth: [ null, Validators.required],
      death: [ null, Validators.required],
    });
  }
    /**
     * onsubmit is validating the password consistency and checks register the new user in the database
     * upon success, user is navigated to the login page
     */
  onSubmit() {
    this.people = this.peopleForm.value;
    const post = {body: this.people };

    this.peopleService.create(post).subscribe( (res) =>  {
        this.peopleForm.reset();
        this.snackBar.open('New person registered', res.last_name, {
          duration: 3000
        });
        
        this.router.navigate(['add_people'], { relativeTo: this.activatedR.parent });

    });
  }

  onCancel(){
    this.router.navigate(['people'], { relativeTo: this.activatedR.parent });
  }
}
