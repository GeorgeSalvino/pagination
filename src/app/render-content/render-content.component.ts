import { Component, OnInit } from '@angular/core';
import { ApiConnectService } from '../api-connect.service';

@Component({
  selector: 'app-render-content',
  templateUrl: './render-content.component.html',
  styleUrls: ['./render-content.component.css']
})
export class RenderContentComponent implements OnInit {

  constructor(private api: ApiConnectService) { }

  pageNumber = 1;
  content;

  ngOnInit(): void {
    this.fetchContent(this.pageNumber);
  }

  fetchContent(pageNumber) {
    this.api.fetchContent(pageNumber).subscribe(res => {
      this.content = res;
      console.log(res)
    });
  }

  changePage(pageNumber) {
    console.log(pageNumber);
    this.pageNumber = pageNumber;
    this.fetchContent(pageNumber);
  }

}
