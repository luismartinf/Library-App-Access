import { Component, OnInit } from '@angular/core';
import { LendeeDetailsService } from '../shared/lendee-details.service';
import { LendeeDetails } from '../shared/lendee-details.model';
@Component({
  selector: 'app-lendee-details',
  templateUrl: './lendee-details.component.html',
  styles: [
  ]
})
export class LendeeDetailsComponent implements OnInit {

  constructor(public service: LendeeDetailsService) { }

  loadData(){
    this.service.refreshList()
    .then((res) => {
      this.service.list = res as LendeeDetails[];
    }
    )
    ;
  }
  
  ngOnInit() {
    this.loadData();
  }

  populateForm(selectedRecord: any) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id:number) {
    if (confirm('Are you sure to delete this record ?')) {
      this.service.deletelendeesDetail(id)
        .subscribe({
          next: () => this.loadData(),
          error: (err) => { console.log(err); },
          complete: () => console.info('complete') 
      })
    }
  }

}
