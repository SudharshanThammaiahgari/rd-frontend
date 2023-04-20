import { Component, Input } from '@angular/core';
import { FormType } from 'src/formType';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  @Input() course?:FormType;
}
