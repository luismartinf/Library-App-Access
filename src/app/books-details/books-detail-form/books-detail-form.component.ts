import { Component, OnInit, Input } from '@angular/core';
import { BooksDetailsService  } from "src/app/shared/books-details.service"
import { LendeeDetailsService } from 'src/app/shared/lendee-details.service';
import { BooksDetail } from 'src/app/shared/books-detail.model';
import { NgForm } from '@angular/forms';
import { LendeeDetails } from '../../shared/lendee-details.model';



type Lendees= Array<number>;

@Component({
  selector: 'app-books-detail-form',
  templateUrl: './books-detail-form.component.html',
  styles: [
  ]
})


export class BooksDetailFormComponent implements OnInit {


  constructor(public service:BooksDetailsService, public servicelendee: LendeeDetailsService, ) { }
  
  lendees: Lendees = [  ];
  currentLendee: number = 0;
  @Input() onLendee:boolean=false ;
 

  ngOnInit(): void { 
    this.servicelendee.refreshList()
    .then((reslen) => {
      this.servicelendee.list = reslen as LendeeDetails[];
      this.servicelendee.list.forEach(lendee => this.lendees.push(lendee.lendeeId))
        });
    }   


  loadData():void{  this.service.refreshList()
    .then((res) => {
      this.service.list = res as BooksDetail[];
    }
    )
    ;}

   
  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new BooksDetail();
  }

  updateRecord(form: NgForm) {
    this.service.putbooksDetail().subscribe(
      {
        next: () => {this.resetForm(form);
          this.loadData();},
        error: (err) => { console.log(err); },
        complete: () => console.info('complete') 
      }
    )
  }
  
  insertRecord(form: NgForm) {
    this.service.postbooksDetail().subscribe(
      {
        next: () => {this.resetForm(form);
          this.loadData();},
        error: (err) => { console.log(err); },
        complete: () => console.info('complete') 
      } 
    )
  }

  selectLendee(id: number|null){
    if (this.service.formData.onlend ==true)
      this.lendeeData(id);
  }

  lendeeData(id: number|null){
    if (id != null)
    {this.servicelendee.getlendeeDetailbyId(id as number)
    .subscribe(
      {
        next: (lendat) => {this.service.formData.onLendees = lendat as LendeeDetails;
          console.log(lendat);
        },
        error: (err) => { console.log(err); },
        complete: () => console.info('complete') 
      }
    )
    }
  }

  onChange() {
  if (!this.onLendee) 
    {this.service.formData.onlend=true
    this.service.formData.dateLend= new Date()
    }
  else
      {
        this.service.formData.onlend=false
        this.service.formData.dateLend= null
        this.service.formData.onLendees=null
        this.service.formData.lendeeId=null
      }
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.bookId == -1)
      this.insertRecord(form);
    else
    {  this.selectLendee(this.service.formData.lendeeId);
    this.updateRecord(form);}
    } 


}