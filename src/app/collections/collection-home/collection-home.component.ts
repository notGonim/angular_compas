import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection-home',
  templateUrl: './collection-home.component.html',
  styleUrls: ['./collection-home.component.css'],
})
export class CollectionHomeComponent implements OnInit {
  data = [
    {
      name: 'James',
      age: 25,
      job: 'Designer',
    },
    {
      name: 'mhmod',
      age: 24,
      job: 'Developer',
    },
    {
      name: 'Esraa',
      age: 21,
      job: 'Marketing',
    },
  ];

  header = [
    {
      key: 'name',
      label: 'Name',
    },
    {
      key: 'age',
      label: 'Age',
    },
    {
      key: 'job',
      label: 'Job',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
