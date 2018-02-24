import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books: any;
  title: string;

  constructor(private http: HttpClient, private route: ActivatedRoute) { 
    this.title = route.snapshot.data['title'];
  }

  ngOnInit() {
    this.http.get('/book').subscribe(data => {
      this.books = data;
    })
  }
}
