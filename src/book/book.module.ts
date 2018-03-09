import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";

//components
import { BookComponent } from './book.component';

//routes
export const ROUTES: Routes = [
    {
        path: '', component: BookComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(ROUTES)
    ],
    exports: [RouterModule],
    declarations: [
        BookComponent
    ]
})

export class BookModule {}