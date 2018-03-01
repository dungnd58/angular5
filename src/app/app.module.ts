import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { Http } from '@angular/http';
import { AppServices } from './app.services';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SelectOptionsTabComponent } from './select-options-tab/select-options-tab.component';
import { ProductSelectCollapseComponent } from './product-select-collapse/product-select-collapse.component';

const appRoutes: Routes = [
  // {
  //   path: 'books',
  //   component: BookComponent,
  //   data: { title: 'Book List' }
  // },
  // {
  //   path: 'book-details/:id',
  //   component: BookDetailComponent,
  //   data: { title: 'Book Details' }
  // },
  // {
  //   path: 'book-create',
  //   component: BookCreateComponent,
  //   data: { title: 'Create Book' }
  // },
  // {
  //   path: 'book-edit/:id',
  //   component: BookEditComponent,
  //   data: { title: 'Edit Book' }
  // },
  {
    path: 'product-details',
    component: ProductDetailsComponent,
    data: { title: 'Product details' }
  },
  {
    path: 'product-details#tab-options',
    component: SelectOptionsTabComponent,
    data: { title: 'Select Options & Buy' }
  },
  { path: '',
    redirectTo: '/product-details',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookDetailComponent,
    BookCreateComponent,
    BookEditComponent,
    ProductDetailsComponent,
    SelectOptionsTabComponent,
    ProductSelectCollapseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  providers: [
    AppServices
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
