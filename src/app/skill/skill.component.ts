import {Component, Input, OnInit} from '@angular/core';
import { SkillModel} from "../models/skill.model";

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  @Input()
  skill: SkillModel = new SkillModel("", "", "")

  constructor() { }

  ngOnInit(): void {
  }

}
