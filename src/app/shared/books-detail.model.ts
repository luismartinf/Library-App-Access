import { LendeeDetails } from './lendee-details.model';

export class BooksDetail {
    bookId: number= -1;

    name: string="";

    author: string="";

    onlend: boolean=false;

    dateLend!: Date| null;

    yearPub: number=0;

    lendeeId!: number| null;

    onLendees!:LendeeDetails|null;
}
