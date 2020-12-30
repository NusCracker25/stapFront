import { NGXLogger } from 'ngx-logger';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { NewBook } from './../../data/api/models/new-book';
import { BookControllerService } from './../../data/api/services/book-controller.service';
import { PeopleControllerService } from './../../data/api/services/people-controller.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { PeopleWithRelations } from '../../data/api/models';

@Component({
  selector: 'stap-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent {


  bookForm: FormGroup;
  startDate = new Date(1750, 0, 1);

  book: NewBook;

  authorList: Observable<PeopleWithRelations[]>;

  languageList: string[] = ['Français', 'English', 'Italiano', 'Dutch'];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedR: ActivatedRoute,
    private peopleService: PeopleControllerService,
    private bookService: BookControllerService,
    private logger: NGXLogger,
    private snackBar: MatSnackBar) {}

      /**
   * initial creation of form;
   */
  ngOnInit(){
    this.createForm();
    this.getAuthorList();
  }

  getAuthorList(): void{
      this.authorList = this.peopleService.find();
  }
    /**
   * creates the form
   */
  createForm(){
    this.bookForm = this.fb.group({
      title: [null, Validators.required],
      publication: [null, Validators.required],
      language: [null, Validators.required],
      author: [null, Validators.required]
    });
  }

    onSubmit() {
     // this.book = this.bookForm.value;
     this.book = {
       "title":this.bookForm.get('title').value,
       "publication" : this.bookForm.get('publication').value
     };
      const post = {body: this.book };
      this.bookService.create(post).subscribe( (res) =>  {
          this.bookForm.reset();
this.logger.info('Request result ', res);         
          this.snackBar.open('New book registered ', res.title, {
            duration: 3000
          });

          this.router.navigate(['add_book'], { relativeTo: this.activatedR.parent });

      });
    }

    onCancel(){
      this.router.navigate(['bibliography'], { relativeTo: this.activatedR.parent });
    }
}
