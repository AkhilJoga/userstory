import { Component, OnInit } from '@angular/core';
import BookAuthor from 'src/app/entity/BookAuthor';
import { BookAuthorService } from 'src/app/book-author.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  bookAuthor: BookAuthor =new BookAuthor();

  save(){
    const objservalble = this.bookAuthorService.createBookAuthor(this.bookAuthor)
    objservalble.subscribe(
      (response : any)=>{
        console.log(response);
      },
      function(error){
        console.log(error);
        alert("Something Went Wrong....");
      }
    )
  }

  constructor(public bookAuthorService:BookAuthorService) { }

  ngOnInit(): void {
  }

}
