import {Component, OnInit} from '@angular/core';
import {AppServices} from '../app/app.service';
import * as Interface from '../app/app.model';
import {ActivatedRoute} from '@angular/router';

declare var $ :any;

@Component({
    selector: 'app-book',
    // providers: [Location, { provide: LocationStrategy, useClass: HashLocationStrategy }],
    templateUrl: './book.component.html'
})

export class BookComponent implements OnInit {
    categoryId: string;
    books: Interface.Book[];
    book: Interface.Book;
    selectedBook: Interface.Book;

    constructor(private appService: AppServices, private route: ActivatedRoute) {
        this.categoryId = route.snapshot.params['id'];

        this.book = <Interface.Book>{};
        this.selectedBook = <Interface.Book>{};
        appService.getBooksSubject().subscribe((data) => {
            this.books = data;
        });
    }

    ngOnInit() {
        this.appService.getBooks(this.categoryId);
    }

    createBook() {
        this.book = {
            ...this.book,
            categoryId: this.categoryId
        }
        this.appService.createBook(this.book).subscribe(res => {
            this.appService.getBooks(this.categoryId);
            $('#creatingBook').modal('hide');
            this.book = <Interface.Book>{};
        }, (err) => {
            console.log(err);
        });
    }

    showDetails(id) {
        this.appService.getBookById(id).subscribe((res: Interface.Book) => {
            this.selectedBook = res;
            $("#showDetailsBook").modal('show');
        }, (err) => {
            console.log(err);
        });
    }

    deleteBook(id) {
        this.appService.deleteBook(id).subscribe(res => {
            this.appService.getBooks(this.categoryId);
        }, (err) => {
            console.log(err);
        });
    }
}