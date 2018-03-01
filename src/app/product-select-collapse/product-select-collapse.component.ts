import { Component, Input, OnInit } from '@angular/core';

interface Product {
  colorId: number,
  colourGroupId: number,
  id:number,
  imageUrl: string,
  status: number,
  name: string
}

@Component({
  selector: 'app-product-select-collapse',
  templateUrl: './product-select-collapse.component.html',
  styleUrls: ['./product-select-collapse.component.css']
})
export class ProductSelectCollapseComponent implements OnInit {
  @Input() 
    product: Product

  constructor() { }

  ngOnInit() {}

}
