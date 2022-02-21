import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  Exam: boolean = false;
  PE: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }


  ExamChoice(): void{
    this.PE = false;
    this.Exam = true;
  }

  PEChoice(): void{
    this.Exam = false;
    this.PE = true;
  }

}
