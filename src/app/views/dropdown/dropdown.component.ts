import { Component, OnInit } from '@angular/core';

interface Language{
  value: string
  viewValue: string
}
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})


export class DropdownComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // languages:Language[] =[
  //   {value:"EN",viewValue:"English"},
  //   {value:"GER",viewValue:"German"},
  //   {value:"SWA",viewValue:"Swahili"}

  // ]
}
