import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { RouteModel } from '../../model/route-model';
import { PlanComponent } from 'src/app/modules/plan/plan.component';

@Component({
  selector: 'app-sub-nav-bar',
  templateUrl: './sub-nav-bar.component.html',
  styleUrls: ['./sub-nav-bar.component.css']
})
export class SubNavBarComponent implements OnInit {
  @Input() modulesLists: Array<RouteModel> = [];
  constructor() { }

  ngOnInit() {
    console.log(this.modulesLists);
  }

}
