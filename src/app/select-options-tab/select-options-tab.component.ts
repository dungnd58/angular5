import { Component, OnInit, OnChanges } from '@angular/core';
import { AppServices } from '../app.services';

@Component({
  selector: 'app-select-options-tab',
  templateUrl: './select-options-tab.component.html',
  styleUrls: ['./select-options-tab.component.css']
})
export class SelectOptionsTabComponent implements OnInit, OnChanges {
  data: {}
  error: null

  constructor(private services: AppServices) { 
    this.data = services.getData();
  }

  ngOnInit() {
    
  }

  ngOnChanges() {
  }

}
