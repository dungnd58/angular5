import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { Http } from '@angular/http';
import { AppServices } from './app.services';

import { BookModule } from '../book/book.module';

import { AppComponent } from './app.component';

const appRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'books', loadChildren: '../book/book.module#BookModule'
    }]
  }
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
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
