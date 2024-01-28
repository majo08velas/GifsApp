import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.css']
})
export class LazyImageComponent implements OnInit{

  @Input() urlFromParent!:string;

  public hasLoaded:boolean = false;

  ngOnInit(): void {
      if (!this.urlFromParent) throw new Error('url is required')
  }

  onLoad(){
    this.hasLoaded = true
  }
}
