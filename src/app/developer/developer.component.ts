import { Component, OnInit } from '@angular/core';
import { DeveloperModel} from "../models/developer.model";
import { SkillModel} from "../models/skill.model";

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  developer: DeveloperModel = new DeveloperModel(
    "Cricri",
    "Crocro",
    69,
    "Non binaire",
    "Aime se frotter aux arbres",
    [
      new SkillModel('Pas grand', "non vraiment rien", "gni"),
      new SkillModel('Yé né comprend pas', "Toujours pas", "gni")
    ])

  constructor() { }

  ngOnInit(): void {
  }

}
