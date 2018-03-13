import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";

//components
import { CategoryComponent } from './category.component';

//routes
export const ROUTES: Routes = [
    {
        path: '', component: CategoryComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(ROUTES)
    ],
    exports: [
        RouterModule
    ],
    declarations: [
        CategoryComponent
    ]
})

export class CategoryModule {}