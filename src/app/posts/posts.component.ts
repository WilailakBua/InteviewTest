import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { elementAt } from 'rxjs';
import { HeroSericeService } from '../service/hero-serice.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  dataSource = new MatTableDataSource();
  data: any = [];
  displayedColumns: string[] = [
    'id',
    'userId',
    'title',
    'body',
  
  ];
  constructor(
    private heroSericeService: HeroSericeService,
    private router: Router,

    ) { }

  ngOnInit(): void {
    
    this.heroSericeService.getData().subscribe(
      (res) => {
        this.data = res;
        this.dataSource = new MatTableDataSource<any>(this.data);
      });
  }
  onClickHome() {
    this.router.navigateByUrl('');

  }
}
