import { Component, OnInit } from '@angular/core';
import { FetchService } from '../service/fetch.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public searchTerm !: string;
  constructor(private fetchService:FetchService) { }

  ngOnInit(): void {
  }
  search(event:any){
    this.searchTerm = event.target.value;
    this.fetchService.search.next(this.searchTerm);
  }

}
