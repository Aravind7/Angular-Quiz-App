import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { HttpClientModule } from '@angular/common/http';
import { HighlightJsModule } from 'ngx-highlight-js';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AddQueComponent } from './add-que/add-que.component';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas'; 
import {AuthGuard} from './auth.guard';
import { LoginComponent } from './login/login.component';


const appRoutes: Routes = [
  { path: 'addQuestion', component:  AddQueComponent},
  {
    path: 'quiz',
    canActivate : [AuthGuard],
    component: QuizComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/quiz',
    pathMatch: 'full'
  },
  { path: 'login', component:  LoginComponent},
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    AddQueComponent,
    PagenotfoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,HighlightJsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
