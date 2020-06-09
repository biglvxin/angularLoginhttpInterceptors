import { Component, OnInit } from '@angular/core';
import { RouteModel } from 'src/app/core/model/route-model';

@Component({
  selector: 'app-execution',
  templateUrl: './execution.component.html',
  styleUrls: ['./execution.component.css']
})
export class ExecutionComponent implements OnInit {
public modulesLists: Array<RouteModel> = [];
  constructor() { }

  ngOnInit() {
    this.updateModulesLists();
  }
  updateModulesLists() {
    this.modulesLists = [
      {
        title: 'executionList',
        routerLink: '/execution/execution-home/execution-list',
        name: 'executionList'
      },
      {
        title: 'executionDetails',
        routerLink: '/execution/execution-home/execution-details',
        name: 'executionDetailsList'
      },
    ];
  }

}
