import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adults',
  templateUrl: './adults.component.html',
  styleUrls: ['./adults.component.css']
})
export class AdultsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

}
