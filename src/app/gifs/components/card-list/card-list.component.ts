import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/searchResponse';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {

  @Input() gifsListFromParent: Gif[]=[];

}
