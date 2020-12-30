
import { NGXLogger } from 'ngx-logger';
import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { BookControllerService } from '../../data/api/services';
import { Observable } from 'rxjs';
import { BookWithRelations } from '../../data/api/models';

@Component({
  selector: 'stap-book-overview',
  templateUrl: './book-overview.component.html',
  styleUrls: ['./book-overview.component.css']
})
export class BookOverviewComponent {
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
  bookCount: number;

  books: Observable<BookWithRelations[]>;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private bookService: BookControllerService,
    private logger: NGXLogger,
    private router: Router,
    private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
      this.getBookCount();
      this.getAllBooks();
    }

    getBookCount(): void{
      this.bookService.count()
        .subscribe( count => this.bookCount = count.count);
    }

    getAllBooks(): void{
      this.books = this.bookService.find();
    }

    expand(id: string) {
      this.router.navigate(['book' , id], { relativeTo: this.route.parent });
    }

    delete(id: number): void{
       this.bookService.deleteById({id: id})
          .subscribe(del =>{
            this.getAllBooks();
             this.logger.info('book ',id,' is deleted');
          });
    }
  }
