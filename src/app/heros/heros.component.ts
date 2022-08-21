import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HeroSericeService } from '../service/hero-serice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  users: any;
  user: any;

  myHero = [
    {
      "number": 11,
      "name": "Dr. Nice"
    },
    {
      "number": 12,
      "name": "Nectomancer"
    },
    {
      "number": 13,
      "name": "Bombasto"
    },
    {
      "number": 14,
      "name": "Celeritas"
    },
    {
      "number": 15,
      "name": "Magneta"
    },
    {
      "number": 16,
      "name": "RubberMan"
    },
    {
      "number": 17,
      "name": "Dynama"
    },
    {
      "number": 18,
      "name": "Dr. IQ"
    },
    {
      "number": 19,
      "name": "Magma"
    },
    {
      "number": 20,
      "name": "Tornado"
    },

  ]

  clickHero: string;

  constructor(
    private http: HttpClient,
    private heroSericeService: HeroSericeService,
    private router: Router,

  ) { }

  ngOnInit(): void {
  }

  onClickHeroName(name: string) {
    this.clickHero = name;
  }

  onClickHome() {
    this.router.navigateByUrl('');

  }

 






}
