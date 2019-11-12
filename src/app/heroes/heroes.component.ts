import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Hero } from '../hero';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.pug',
  styleUrls: ['./heroes.component.styl']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'zhangsan'
  };
  constructor() { }

  ngOnInit() {
    console.log(HttpClientModule);
    setTimeout(() => {
      this.hero.name = 'lisi';
    }, 5000);

  }

}
