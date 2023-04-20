import { Injectable } from '@angular/core';
import { VIDEOCOURSES } from 'src/mock-courses';
import { Observable, of } from 'rxjs';
import { FormType } from 'src/formType';
@Injectable({
  providedIn: 'root'
})
export class VcourseService {

  constructor() { }

  getCourses() : FormType[]{
    return VIDEOCOURSES;
  }


}
