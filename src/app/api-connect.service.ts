import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiConnectService {

  constructor(private http: HttpClient) { }

  fetchContent(pageNumber) {
    return this.http.get('https://www.htmlconversions.com/api/Paginate/paginate/'+ pageNumber );
  }
}
