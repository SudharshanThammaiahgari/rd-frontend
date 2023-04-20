import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoCoursesComponent } from './video-courses/video-courses.component';
import { CourseComponent } from './course/course.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { TimeHoursPipe } from './pipes/time-hours.pipe';

@NgModule({
  declarations: [
    AppComponent,
    VideoCoursesComponent,
    CourseComponent,
    CourseFormComponent,
    TimeHoursPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
