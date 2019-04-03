import { Component, OnInit } from '@angular/core';
import {RandomDadJokeService} from '../random-dad-joke.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-random-dad-joke',
  templateUrl: './random-dad-joke.component.html',
  styleUrls: ['./random-dad-joke.component.scss']
})
export class RandomDadJokeComponent implements OnInit {

  dadUrl: string;
  id: number;


  constructor( private dadFetcher: RandomDadJokeService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'https://icanhazdadjoke.com/ ');
  }


  ngOnInit() {
  this.dadFetch.getRandom().subscribe(
    (result) => {
      this.dadUrl = result.joke;

    }
  );
  }

}
