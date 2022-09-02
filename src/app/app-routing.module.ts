import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBookComponent } from './components/create-book/create-book.component';
import { HomeComponent } from './components/home/home.component';
import { ListofBooksComponent } from './components/listof-books/listof-books.component';

const routes: Routes = [{path: 'home',component:HomeComponent},
{path: 'createBook',component:CreateBookComponent},
{path:'listBooks',component:ListofBooksComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
