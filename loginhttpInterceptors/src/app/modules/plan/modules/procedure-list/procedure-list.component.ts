import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-procedure-list',
  templateUrl: './procedure-list.component.html',
  styleUrls: ['./procedure-list.component.css']
})
export class ProcedureListComponent implements OnInit {
public data = [];
  constructor(
    private route: Router,
    private activatedRoute: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.data = [
      {
        id: 1,
        version: 2,
        name: 'data001'
      },
      {
        id: 2,
        version: 2,
        name: 'data002'
      },
      {
        id: 3,
        version: 2,
        name: 'data003'
      },

    ];
  }
  goToDetails(item: any) {
    console.log(this.activatedRoute.parent);
    console.log(item);
    console.log(this.route);
    this.route.navigate(['../procedure-details/details-home/plan'], {
      relativeTo: this.activatedRoute.parent,
      queryParams: {
        id: item.id,
        version: item.version
      }
    });
  }

}
