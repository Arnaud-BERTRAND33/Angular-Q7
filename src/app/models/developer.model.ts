import { SkillModel } from "./skill.model";

export class DeveloperModel {

  constructor(
    public lastName: string,
    public firstName: string,
    public age: number,
    public gender: string,
    public bio: string,
    public skills: SkillModel[],
    ) {}
}
