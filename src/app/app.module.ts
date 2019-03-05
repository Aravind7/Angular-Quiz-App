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


const appRoutes: Routes = [
  { path: 'addQuestion', component:  AddQueComponent},
  {
    path: 'quiz',
    component: QuizComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/quiz',
    pathMatch: 'full'
  },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    AddQueComponent,
    PagenotfoundComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
