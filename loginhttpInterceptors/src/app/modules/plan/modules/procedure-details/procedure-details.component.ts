import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-procedure-details',
  templateUrl: './procedure-details.component.html',
  styleUrls: ['./procedure-details.component.css']
})
export class ProcedureDetailsComponent implements OnInit {
  public id: number;
  constructor(private router: Router, private route: ActivatedRoute, private location: Location) {
    this.id = 1;
  }

  ngOnInit() {
  }
  goToIWant(num: number) {
    switch (num) {
      case 1:
        this.router.navigate(['/plan/plan-home/procedure-list']);
        break;
        case 2:
        this.router.navigate(['/plan/plan-home/procedure-details/details-home/design', this.id]);
        break;
        case 3:
        this.router.navigate(['/plan/plan-home'], {queryParams: { productId: '092214220', title: 'moon' }});
        break;
      case 4:
        this.router.navigate(['../../../plan/plan-home/procedure-list']);
        break;
      case 5:
        this.router.navigateByUrl('/plan/plan-home/procedure-list');
        break;
      case 6:
        this.router.navigateByUrl('../../../plan/plan-home/procedure-list'); // error, no any match
        break;
    }
  }
  goBack() {
    this.location.back();
  }
}
