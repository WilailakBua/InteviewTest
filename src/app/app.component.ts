import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroSericeService } from './service/hero-serice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'heros';

  constructor(
    private router: Router,
    private heroSericeService: HeroSericeService,

  ) {

  }

  onClickHeroApp() {
    this.router.navigateByUrl('heros');
  }
  onClickPost() {
    this.router.navigateByUrl('posts');

  }


}
