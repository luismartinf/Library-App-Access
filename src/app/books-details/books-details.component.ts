import { Component, OnInit } from '@angular/core';
import { BooksDetail } from '../shared/books-detail.model';
import { BooksDetailsService } from '../shared/books-details.service';

@Component({
  selector: 'app-books-details',
  templateUrl: './books-details.component.html',
  styles: [
  ]
})
export class BooksDetailsComponent implements OnInit {

  constructor(public service: BooksDetailsService) { }

  loadData(){
    this.service.refreshList()
    .then((res) => {
      this.service.list = res as BooksDetail[];
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
      this.service.deletebooksDetail(id)
        .subscribe({
          next: () => this.loadData(),
          error: (err) => { console.log(err); },
          complete: () => console.info('complete') 
      })
    }
  }

}
