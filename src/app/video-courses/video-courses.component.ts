import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormType } from 'src/formType';

@Component({
  selector: 'app-video-courses',
  templateUrl: './video-courses.component.html',
  styleUrls: ['./video-courses.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})

export class VideoCoursesComponent {
  @Input() courses?:FormType[];

  constructor(){

  }

  render() : string{
    console.log("I am from Video Courses");
    return "Hello World";
  }

}
