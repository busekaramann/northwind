import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { ListResponseModel } from '../models/ListResponseModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl = 'https://localhost:44310/api/Categories/getall';

  constructor(private httpClient:HttpClient) { }

  getCategories():Observable<ListResponseModel<Category>> {
    return this.httpClient.get<ListResponseModel<Category>>(this.apiUrl);
  }
}
