import { Component, OnInit } from '@angular/core';
import { RouteModel } from 'src/app/core/model/route-model';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {
  public modulesLists: Array<RouteModel> = [];

  constructor() { }

  ngOnInit() {
    this.updateModulesLists();
  }
  updateModulesLists() {
    this.modulesLists = [
      {
        title: 'designList',
        routerLink: '/design/design-home/design-list',
        name: 'designList'
      },
      {
        title: 'designDetails',
        routerLink: '/design/design-home/design-details',
        name: 'designDetails'
      },
    ];
  }

}
