import { Router, ActivatedRoute } from '@angular/router';
import { NGXLogger } from 'ngx-logger';
import { People } from './../../data/api/models/people';
import { Component, OnInit } from '@angular/core';
import { PeopleWithRelations } from '../../data/api/models';
import { PeopleControllerService } from '../../data/api/services';

@Component({
  selector: 'stap-people-id',
  templateUrl: './people-id.component.html',
  styleUrls: ['./people-id.component.sass']
})
export class PeopleIdComponent implements OnInit {

  people: PeopleWithRelations;

  constructor(
    private logger: NGXLogger,
    private router: Router,
    private route: ActivatedRoute,
    private peopleService: PeopleControllerService
  ) { }

  ngOnInit(): void {
    this.getPeople();
  }

  getPeople(): void {

    const uid = Number.parseInt(this.route.snapshot.paramMap.get('id'));
    this.peopleService.findById({id:uid}).subscribe(people => this.people = people);
   /// getPersonData(uid).subscribe( person => this.person = person);
  }

}
