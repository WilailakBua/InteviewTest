import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-critizen-id',
  templateUrl: './critizen-id.component.html',
  styleUrls: ['./critizen-id.component.css']
})
export class CritizenIdComponent implements OnInit {
  critizenIdVal: number;
  answer: number;
  count: number;
  arr: any = [];
  sumall: any;
  status: any;
  error_msg: any;
  error_code: any;



  constructor(
    private router: Router,

  ) { }

  ngOnInit(): void {
  }

  onClickHome() {
    this.router.navigateByUrl('');
  }

  onClickCal() {
    this.arr = [];

    if (this.critizenIdVal) {

      let keepLast = String(this.critizenIdVal).substring(12, 13);

      let delLast = String(this.critizenIdVal).substring(0, 12);

      const arrayOfDigits = Array.from(String(delLast), Number);
      let num = [13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2]
    

      arrayOfDigits.forEach((el, index1) => {
        num.forEach((element, index2) => {
          if (index1 === index2) {
            this.count = el * element;
            this.arr.push(this.count);
          }
        });
      });

      if (this.arr.length != 12 ) {
        this.status = false;
        this.error_code = '001';
        this.error_msg = 'Critizen Id Invalid'
        this.answer = 0;        

      } else if (keepLast && !String(this.critizenIdVal).substring(13)) {

        const result = this.arr.reduce((accumulator, current) => {
          return accumulator + current;
        }, 0);
  
        const mod = result % 11;
        this.answer = 11 - mod;

        this.status = true;
        this.error_code = 200
        this.error_msg = ''
      }
    } else {
      this.status = false;
      this.error_code = '001';
      this.error_msg = 'Critizen Id Require'
      this.answer = 0;
    }










  }

}
