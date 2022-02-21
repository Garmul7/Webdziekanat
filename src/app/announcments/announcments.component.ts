import { Component, OnInit } from '@angular/core';
import {Announcment} from './announcments.model';

@Component({
  selector: 'app-announcments',
  templateUrl: './announcments.component.html',
  styleUrls: ['./announcments.component.css']
})
export class AnnouncmentsComponent implements OnInit {

announcments: Announcment[];
  constructor() {
    this.announcments = [
      new Announcment('Classes cancelled',
        'classes cancelled tomorrow because corona is bad blah blah blah blah blah',
        '24.10.2020'),
      new Announcment('Some other announcment',
        'some other info blah blah info blah blah info blah blah info blah blah info blah blah',
        '11.11.2020'),
      new Announcment('Some other announcment',
        'some other info blah blah info blah blah blah blah info blah blah blah blah info blah blah blah blah info blah blah blah blah info blah blah blah blah info blah blah blah blah info blah blah blah blah info blah blah blah blah info blah blah blah blah info blah blah blah blah info blah blah blah blah info blah blah blah blah info blah blah blah blah info blah blah blah blah info blah blah blah blah info blah blah blah blah info blah blah blah blah info blah blah blah blah info blah blah info blah blah info blah blah info blah blah',
        '11.11.2020'),
      new Announcment('Some other announcment',
        'some other info blah blah info blah blah info blah blah info blah blah info blah blah',
        '11.11.2020'),
      new Announcment('Some other announcment',
        'some other info blah blah info blah blah info blah blah info blah blah info blah blah',
        '11.11.2020')
    ]
  }

  ngOnInit(): void {
  }

}
