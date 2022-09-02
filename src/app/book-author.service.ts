import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_POST = "http://localhost:8082/createBookAuthor";

@Injectable({
  providedIn: 'root'
})

export class BookAuthorService {

  createBookAuthor(bookAuthor:{title:string,
    price:Float32Array,
    pulisher:string,content:string}){
      return this.http.post(BASE_POST,bookAuthor);
  }

  constructor(public http:HttpClient) { }
}
