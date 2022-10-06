import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from "rxjs";
import { LendeeDetails } from './lendee-details.model';

@Injectable({
  providedIn: 'root'
})
export class LendeeDetailsService {

  formData: LendeeDetails= new LendeeDetails();
  readonly baseURL = 'https://localhost:44318/api/LendeeModel';
  list!: LendeeDetails[];

  constructor(private http: HttpClient) { }

  postlendeesDetail() {
    return this.http.post(this.baseURL, this.formData);
  }
  putlendeesDetail() {
    return this.http.put(`${this.baseURL}/${this.formData.lendeeId}`, this.formData);
  }
  deletelendeesDetail(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  getlendeeDetailbyId(id: number) {
    return this.http.get(`${this.baseURL}/${id}`);
  }

  refreshList() {
    return lastValueFrom(this.http.get(this.baseURL));
  }

  
}
