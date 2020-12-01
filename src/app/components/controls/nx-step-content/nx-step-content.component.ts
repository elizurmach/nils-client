import { Component, OnInit } from '@angular/core';
import { resources } from 'src/assets/resources/general-resources'

@Component({
  selector: 'app-nx-step-content',
  templateUrl: './nx-step-content.component.html',
  styleUrls: ['./nx-step-content.component.css']
})
export class NxStepContentComponent implements OnInit {

  public resources = resources;

  constructor() { }

  ngOnInit() {
  }

}
