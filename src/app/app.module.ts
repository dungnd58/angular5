import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { Http } from '@angular/http';

//Services
import { AppServices } from './app.service';

//Modules
import { BookModule } from '../book/book.module';
import { CategoryModule } from '../category/category.module';

//Pipes
import { PipeModule } from '../helper/pipe.module';

//Components
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'categories/:id', loadChildren: '../book/book.module#BookModule'
    }, {
      path: 'categories', loadChildren: '../category/category.module#CategoryModule'
    }]
  }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PipeModule,
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
