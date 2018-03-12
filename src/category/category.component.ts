import {Component, OnInit} from '@angular/core';
import {AppServices} from '../app/app.service';
import * as Interface from '../app/app.model';

declare var $ :any;

@Component({
    selector: 'app-category',
    // providers: [Location, { provide: LocationStrategy, useClass: HashLocationStrategy }],
    templateUrl: './category.component.html'
})

export class CategoryComponent implements OnInit {
    categories: Interface.Category[];
    category: Interface.Category;

    constructor(private appService: AppServices) {
        this.category = <Interface.Category>{};
        appService.getCategorySubject().subscribe((data) => {
            this.categories = data;
        });
    }

    ngOnInit() {
        this.appService.getCategories();
    }

    createCategory() {
        this.appService.createCategory(this.category).subscribe(res => {
            this.appService.getCategories();
            $('#creatingCategory').modal('hide');
        }, (err) => {
            console.log(err);
        });
    }

    deleteCategory(id) {
        this.appService.deleteCategory(id).subscribe(res => {
            this.appService.getCategories();
        }, (err) => {
            console.log(err);
        });
    }
}