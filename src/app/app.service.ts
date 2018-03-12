import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import * as Interface from './app.model';

@Injectable()
export class AppServices {
    private _books: Subject<Interface.Book[]>
    private _categories: Subject<Interface.Category[]>

    constructor(private http: HttpClient) {
        this._books = new Subject<Interface.Book[]>();
        this._categories = new Subject<Interface.Category[]>();
    }

    getBooksSubject() {
        return this._books;
    }

    getCategorySubject() {
        return this._categories;
    }

    getCategories() {
        this.http.get('/category').subscribe((data: Interface.Category[]) => {
            this._categories.next(data);
        });
    }

    createCategory(category) {
        return this.http.post('/category', category);
    }

    deleteCategory(id) {
        return this.http.delete('/category/'+id);
    }

    getBooks(categoryId) {
        this.http.get('/category/' + categoryId).subscribe((data: Interface.Book[]) => {
            this._books.next(data);
        });
    }

    getBookById(id) {
        return this.http.get('/book/' + id);
    }

    createBook(book) {
        return this.http.post('/book', book);
    }

    updateBook(id, data) {
        return this.http.put('/book/' + id, data);
    }

    deleteBook(id) {
        return this.http.delete('/book/'+id);
    }
}