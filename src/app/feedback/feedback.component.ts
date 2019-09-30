import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  submitted = false;

  onSubmit(form: NgForm) {
    this.submitted = true;
    console.log(form.value);

    const fbQuery = form.value;
    localStorage.setItem('userData', JSON.stringify(fbQuery));

    // const getme = localStorage.getItem('userData');
    const getme = JSON.parse(localStorage.getItem('userData'));
    // console.log('wow' + getme);
    console.log(getme.fullname);
    console.log(getme.feedback);
  }
}
