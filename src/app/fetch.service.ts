import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchService {
  public search = new BehaviorSubject<string>("");
  constructor(private http:HttpClient) { }

  getList(){
    return this.http.get<any>("assets/data.json")
    .pipe(map((res:any)=>{
      return res;
    })) 
  }
}
