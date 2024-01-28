import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  @ViewChild('txtTagInput',{read: ElementRef}) tagInput!: ElementRef;

  // searchTag(newTag:string){
  //   console.log(newTag)
  // }

  constructor(private gifsService:GifsService){
    this.gifsService.searchTag(gifsService.tagsHistory[0]);
  }

  searchTag(){
    let tag = this.tagInput.nativeElement.value;
    this.gifsService.searchTag(tag);
    this.tagInput.nativeElement.value = "";
  }
}
