import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-triangle',
  templateUrl: './triangle.component.html',
  styleUrls: ['./triangle.component.css']
})
export class TriangleComponent implements OnInit {

  baseVal: number;
  heightVal: number;
  answer: number;
  constructor(
    private router: Router,

  ) { }

  ngOnInit(): void {
  }

  onClickHome() {
    this.router.navigateByUrl('');

  }

  onClickCal() {
    this.answer = 1/2* this.baseVal* this.heightVal;
    

  }

}
