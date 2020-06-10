import { Component, OnInit, Output } from '@angular/core';
import { RouteModel } from 'src/app/core/model/route-model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {
  public modulesLists: Array<RouteModel> = [];
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(queryParams => {
      console.log(queryParams.productId);
      console.log(queryParams.title);
    });
   }

  ngOnInit() {
    this.updateModulesLists();
  }
  updateModulesLists() {
    this.modulesLists = [
      {
        title: 'procedureList',
        routerLink: '/plan/plan-home/procedure-list',
        name: 'procedureList'
      },
      {
        title: 'entityList',
        routerLink: '/plan/plan-home/entity-list',
        name: 'entityList'
      },
      {
        title: 'procedureDetails',
        routerLink: '/plan/plan-home/procedure-details',
        name: 'procedureDetails'
      },
      {
        title: 'regulatoryCoverage',
        routerLink: '/plan/plan-home/regulatory-coverage',
        name: 'regulatoryCoverage'
      },
      {
        title: 'policyCoverage',
        routerLink: '/plan/plan-home/policy-coverage',
        name: 'policyCoverage'
      },
    ];
  }

}
