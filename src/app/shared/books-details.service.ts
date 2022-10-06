import{BooksDetail} from "./books-detail.model"
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class BooksDetailsService {

  formData: BooksDetail= new BooksDetail();
  readonly baseURL = 'https://localhost:44318/api/BookModel';
  list!: BooksDetail[];

  constructor(private http: HttpClient) { }

  postbooksDetail() {
    return this.http.post(this.baseURL, this.formData);
  }
  putbooksDetail() {
    return this.http.put(`${this.baseURL}/${this.formData.bookId}`, this.formData);
  }
  deletebooksDetail(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  getbookDetailbyId(id: number) {
    return this.http.get(`${this.baseURL}/${id}`);
  }

  refreshList() {
    return lastValueFrom(this.http.get(this.baseURL))
      ;
  }
}
