import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }

  get(url: string) {
    console.log("Url++++++++++++++++++++++" + url);
    return this.http.get(url);
  }

  getAll() {
    return [
      { id: 'data/aspnet.json', name: 'Asp.Net' },
      { id: 'data/csharp.json', name: 'C Sharp' },
      { id: 'data/designPatterns.json', name: 'Design Patterns' }
    ];
  }

  getCatergory(){
    return this.http.get("https://localhost:5001/api/quiz/Get")
        .pipe(map(res => res));

  }

  getQuestions(id){
    return this.http.get("https://localhost:5001/api/quiz/Get/" + id)
        .pipe(map(res => res));
  }

}

