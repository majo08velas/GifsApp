import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent{

  constructor(private gifsService:GifsService){ }

  get searchedGifs(){
    return this.gifsService.tagsHistory;
  }

  getGif(gif:string):void{
    this.gifsService.searchTag(gif)
  }


}
