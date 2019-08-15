import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  {path:'/', component:HomeComponent},
];

@NgModule({

  imports: [RouterModule.forRoot(routes),
  BrowserModule,
  CommonModule
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
