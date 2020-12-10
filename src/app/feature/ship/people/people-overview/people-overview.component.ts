import { NGXLogger } from 'ngx-logger';
import { Router, ActivatedRoute } from '@angular/router';
import { People } from './../../data/api/models/people';
import { PeopleControllerService } from './../../data/api/services/people-controller.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { PeopleWithRelations } from '../../data/api/models';


@Component({
  selector: 'stap-people-overview',
  templateUrl: './people-overview.component.html',
  styleUrls: ['./people-overview.component.css']
})
export class PeopleOverviewComponent implements OnInit {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );

  peopleCount: number;

  peoples: Observable<PeopleWithRelations[]>;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private peopleService: PeopleControllerService,
    private logger: NGXLogger,
    private router: Router,
    private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
      this.getPeopleCount();
      this.getAllPeople();
    }

    getPeopleCount(): void{
      this.peopleService.count()
        .subscribe( count => this.peopleCount = count.count);
    }

    getAllPeople(): void{
      this.peoples = this.peopleService.find();
    }

    expand(id: string) {
      this.router.navigate(['people' , id], { relativeTo: this.route.parent });
    }
}
