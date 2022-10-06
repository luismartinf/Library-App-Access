import { Component, OnInit } from '@angular/core';
import { LendeeDetailsService  } from "src/app/shared/lendee-details.service"
import { LendeeDetails } from 'src/app/shared/lendee-details.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-lendee-details-form',
  templateUrl: './lendee-details-form.component.html',
  styleUrls: ['./lendee-details-form.component.css']
})
export class LendeeDetailsFormComponent implements OnInit {

  constructor(public service:LendeeDetailsService) { }

  ngOnInit(): void {
  }
  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new LendeeDetails();
  }
  onSubmit(form: NgForm) {
    if (this.service.formData.lendeeId == -1)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }
  
  loadData(){
    this.service.refreshList()
    .then((res) => {
      this.service.list = res as LendeeDetails[];
    }
    )
    ;
  }
  
  updateRecord(form: NgForm) {
    this.service.putlendeesDetail().subscribe(
      {
        next: () => {this.resetForm(form);
          this.service.refreshList();},
        error: (err) => { console.log(err); },
        complete: () => console.info('complete') 
      }
    )
  }
  
  insertRecord(form: NgForm) {
    this.service.postlendeesDetail().subscribe(
      {
        next: () => {this.resetForm(form);
          this.loadData();},
        error: (err) => { console.log(err); },
        complete: () => console.info('complete') 
      } 
    )
  }

}
