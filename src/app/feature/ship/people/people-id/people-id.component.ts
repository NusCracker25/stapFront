import { Router, ActivatedRoute } from '@angular/router';
import { NGXLogger } from 'ngx-logger';
import { People } from './../../data/api/models/people';
import { Component, OnInit } from '@angular/core';
import { PeopleWithRelations } from '../../data/api/models';
import { PeopleControllerService } from '../../data/api/services';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import {FixedSizeVirtualScrollStrategy, VIRTUAL_SCROLL_STRATEGY} from '@angular/cdk/scrolling';
import {ChangeDetectionStrategy} from '@angular/core';

export class CustomVirtualScrollStrategy extends FixedSizeVirtualScrollStrategy {
  constructor() {
    super(50, 250, 500);
  }
}


@Component({
  selector: 'stap-people-id',
  templateUrl: './people-id.component.html',
  styleUrls: ['./people-id.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class PeopleIdComponent implements OnInit {
  startDate = new Date(1750, 0, 1);

  showAddButton: boolean = false;
  prompt = 'Press <enter> to add "';


  peopleForm: FormGroup;

  people: PeopleWithRelations;

  isTouched = false;

  shipsList: { name: string; }[] ;
  shipsOptions: Observable<{ name: string; }[]>;
  shipAddControl = new FormControl();

  booksList: { title: string; }[] ;
  booksOptions: Observable<{ title: string; }[]>;
  bookAddControl = new FormControl();

 ///////////////////////// draft data
 modifications = [
   {brief: "ljksqdlkjfdkj", updated: this.startDate},
   {brief: "ljksqdlkjfdkj", updated: this.startDate},
   {brief: "ljksqdlkjfdkj", updated: this.startDate},
   {brief: "ljksqdlkjfdkj", updated: this.startDate},
   {brief: "ljksqdlkjfdkj", updated: this.startDate}
 ]

books =[
   {title: "Elemens", publish: this.startDate},
   {title: "arbres", publish: this.startDate},
   {title: "ancres", publish: this.startDate},
   {title: "navigation", publish: this.startDate},
   {title: "ljksqdlkjfdkj", publish: this.startDate}
 ]


ships = [
   {name: "Le Foudroyant"},
   {name: "Le Tonerre"},
   {name: "La Bretagne"},
   {name: "La Provence"},
   {name: "ljksqdlkjfdkj"}
 ]

  constructor(
    private fb: FormBuilder,
    private logger: NGXLogger,
    private router: Router,
    private route: ActivatedRoute,
    private peopleService: PeopleControllerService
  ) { }

  ngOnInit(): void {
    this.getPeople();
    this.getShips();
    this.getBooks();

   /* this.booksOptions = this.bookAddControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterBooks(value))
      );
*/
    this.shipsOptions = this.shipAddControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filterShips(name) : this.shipsList.slice())

       // map(value => this._filterShips(value))
      );

    this.createForm();
  }

  getPeople(): void {

    const uid = Number.parseInt(this.route.snapshot.paramMap.get('id'));
    this.peopleService.findById({id:uid}).subscribe(people => this.people = people);
   /// getPersonData(uid).subscribe( person => this.person = person);
  }

  getShips(): void {
    this.shipsList = [
      {name:'ship 1'},{name: 'ship 2'},{ name:'ship 3'}];
  }

  getBooks(): void {
    this.booksList = [{title:'book 1'},{title: 'book 2'},{title: 'book 3'}];
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
      gender: [null],
      nationality: [null],
      biography:[null],
      shipAddControl:[null]

    });
     this.bookAddControl = new FormControl();
      this.shipAddControl = new FormControl();
      this.peopleForm.registerControl('book_add',this.bookAddControl);
      this.peopleForm.registerControl('ship_add',this.shipAddControl);
  }

    /**
     * onsubmit is validating the password consistency and checks register the new user in the database
     * upon success, user is navigated to the login page
     */
  onSubmit() {
    this.people = this.peopleForm.value;
    const post = {body: this.people };

    /* this.peopleService.create(post).subscribe( (res) =>  {
        this.peopleForm.reset();
        this.snackBar.open('New person registered', res.last_name, {
          duration: 3000
        });


    });*/
  }

  onCancel(){
    this.logger.info('cancel submission to be done');
  }

  onAddShip(){
    const candidate =  this.peopleForm.get('shipAddControl').value;
    this.logger.info('add a ship ', candidate);
    // adds new ship to list
    let nship;
   
    if( !this.shipsList.some(ship => ship.name.includes(candidate.name) )){
      this.logger.info('must add a new ship candidate' , candidate);
      nship = {name: this.peopleForm.get('shipAddControl').value};
      this.shipsList.push(nship);
    } 
    else{
      nship = candidate;
    }

    if( this.ships.indexOf(nship) == -1){
      this.logger.info(' in the list of ship for this person' , nship);
      this.ships.push(nship);
    }
  }

  private _filterShips(value: string): { name: string; }[] {
    const filterValue = value.toLowerCase();
    let results = this.shipsList.filter(shipsOpt => shipsOpt.name.toLowerCase().indexOf(filterValue) === 0);
    this.showAddButton = results.length === 0;
    if (this.showAddButton) {
      results = [{name: this.prompt + value + '"'}];
    }
    return results;
  }

  optionSelected(option) {
    if (option.value.indexOf(this.prompt) === 0) {
      this.addOption();
    }
  }

  addOption() {
    let option = this.removePromptFromOption(this.peopleForm.get('shipAddControl').value);
    if (!this.shipsList.some(entry => entry.name === option)) {
      const index = this.shipsList.push({name:option}) - 1;
      this.peopleForm.get('shipAddControl').setValue(this.shipsList[index]);
    }
  }

  removePromptFromOption(option) {
    if (option.startsWith(this.prompt)) {
      option = option.substring(this.prompt.length, option.length -1);
    }
    return option;
  }

    displayShipFn(ship: {name: string}): string {
    return ship && ship.name ? ship.name : '';
  }



/*  private _filterBooks(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.booksList.filter(booksOpt => booksOpt.toLowerCase().indexOf(filterValue) === 0);
  }*/


}
