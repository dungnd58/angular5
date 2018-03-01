import { Component, OnInit, OnChanges } from '@angular/core';
import { AppServices } from '../app.services';

declare var $:any

interface ProductGroup {
  colourGroups: any[],
  colors: any[],
  products: any[]
}

@Component({
  selector: 'app-select-options-tab',
  templateUrl: './select-options-tab.component.html',
  styleUrls: ['./select-options-tab.component.css']
})
export class SelectOptionsTabComponent implements OnInit, OnChanges {
  data: ProductGroup
  colourGroups: {}
  colors: any[]
  products: any[]
  selectedGroupId: number
  selectedColorId: number
  selectedProduct: {}
  enableCollapse: string

  constructor(private services: AppServices) {
    const data = services.getData();
    this.data = data;
    this.colourGroups = data.colourGroups;
    this.colors = data.colors;
    this.products = data.products;
    this.selectedGroupId = 0;
    this.selectedColorId = 0;
    this.enableCollapse = 'collapse'
  }

  ngOnInit() {}

  ngOnChanges() {}

  chooseColourGroup(colourGroupId) {
    this.selectedGroupId = colourGroupId;
    this.colors = this.data.colors.filter(c => c.colourGroupId == colourGroupId);
    this.products = this.data.products.filter(p => p.colourGroupId == this.selectedGroupId);
  }

  chooseColors() {
    this.products = this.data.products.filter(p => p.colorId == this.selectedColorId);
  }

  reset() {
    this.products = this.data.products;
    this.colors = this.data.colors;
    this.selectedGroupId = 0;
    this.selectedColorId = 0;
    this.selectedProduct = undefined;
  }

  chooseProduct(product) {
    this.selectedProduct = product;
  }

  collapseTable(selector) {
    if(this.selectedProduct) this.enableCollapse = ''; //disable
    else this.enableCollapse = 'collapse';

    setTimeout(() => {
        $('html, body').animate({
          scrollTop: $(selector).offset().top
      },800);
    }, 200);
  }
}
