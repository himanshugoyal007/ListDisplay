import { Component, OnInit } from '@angular/core';
import { FetchService } from '../service/fetch.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public list : any ;
  public filterCategory : any
  searchKey:string ="";
  description: string='';
  constructor(private fetchSearch:FetchService) { }

  ngOnInit(): void {
    this.fetchSearch.getList()
    .subscribe(res=>{
      this.list = res;
      this.filterCategory = res;
    });

    this.fetchSearch.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }
  details(desc:string){
    this.description=desc;

  }
  reset(){
    this.description='';

  }
  filter(category:string){
    this.filterCategory = this.list
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }
  trackByFn(index:number,item:any){
    if(!item) return null;
    return item.id;

  }


}
