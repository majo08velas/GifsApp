import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/searchResponse';

const _apiKey: string = "ZxZHbbfjVsOPriCweeeF2drhXUlkVfI2";
const _gifsApi: string = "https://api.giphy.com/v1/gifs";

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagsHistory:string[] = [];
  public gifList: Gif[]=[];
  constructor(private http : HttpClient) {
    this.getLocalStorage();
  }

  get tagsHistory(){
    return [...this._tagsHistory];
  }

  searchTag(tag:string):void{
    if (tag.trim().length === 0) return;
    this.organizeTagsHistory(tag)

    const params = new HttpParams()
        .set('api_key',_apiKey)
        .set('q',tag)
        .set('limit',10)

    this.http.get<SearchResponse>(`${_gifsApi}/search`,{params}).subscribe((res)=>{
      this.gifList = res.data;
    })
    // fetch(`https://api.giphy.com/v1/gifs/search?api_key=ZxZHbbfjVsOPriCweeeF2drhXUlkVfI2&q=${tag}&limit=10`).then(res=>{
    //   console.log(res)
    // })
  }

  private organizeTagsHistory(tag:string){
    tag = tag.toLocaleLowerCase();
    let tagAlreadyInHistory = this._tagsHistory.findIndex(tagH => tagH == tag);
    if(tagAlreadyInHistory != -1) this._tagsHistory.splice(tagAlreadyInHistory,1);
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0,10);
    this.saveLocalStorage()
  }

  private saveLocalStorage():void{
    localStorage.setItem('gifHistory',JSON.stringify(this.tagsHistory));
  }

  private getLocalStorage():void{
    const temp = (localStorage.getItem('gifHistory')) || '';
    this._tagsHistory = JSON.parse(temp)
  }

}
