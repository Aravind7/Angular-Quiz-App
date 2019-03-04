import { Component, OnInit } from '@angular/core';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-add-que',
  templateUrl: './add-que.component.html',
  styleUrls: ['./add-que.component.css'],
  providers: [QuizService]
})
export class AddQueComponent implements OnInit {
  model: any = {};
  constructor(private quizService: QuizService) { }

  ngOnInit() {
  }

  onSubmit(model) {
    alert('Adding!! :-)\n\n' + JSON.stringify(this.model))
    this.quizService.addQuestion(model).subscribe(() => {

    })
  }

}
