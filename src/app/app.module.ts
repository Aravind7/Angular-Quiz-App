import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { HttpClientModule } from '@angular/common/http';
import { HighlightJsModule } from 'ngx-highlight-js';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AddQueComponent } from './add-que/add-que.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    AddQueComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,HighlightJsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
