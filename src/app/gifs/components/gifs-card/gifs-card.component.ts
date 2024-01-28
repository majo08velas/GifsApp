import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/searchResponse';

@Component({
  selector: 'app-gifs-card',
  templateUrl: './gifs-card.component.html',
  styleUrls: ['./gifs-card.component.css']
})
export class GifsCardComponent {
  @Input() gifFromCardList!:Gif;
}
