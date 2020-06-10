import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-design',
  templateUrl: './details-design.component.html',
  styleUrls: ['./details-design.component.css']
})
export class DetailsDesignComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => {
        console.log(params);
      }
    );
    console.log(this.route.snapshot.paramMap.get('id'));
    // tslint:disable-next-line:no-string-literal
    console.log(this.route.snapshot.params['id']);
  }

  ngOnInit() {
  }

}
