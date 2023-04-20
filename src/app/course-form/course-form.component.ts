import { Component } from '@angular/core';
import { FormType } from 'src/formType';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})

export class CourseFormComponent {
  formValues:FormType={
    videoTitle: '',
    description: '',
    date: '',
    duration: '',
    authors: ''
  };

  videoCourses:FormType[]=[
    {
      videoTitle: 'Video Course 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      date: '12-03-2019',
      duration: '120',
      authors: 'Qwerty,Asdfghjkl'
    },
    {
      videoTitle: 'Video Course 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      date: '23-05-2022',
      duration: '210',
      authors: 'Qwerty,Asdfghjkl'
    },
    {
      videoTitle: 'Video Course 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      date: '09-07-2020',
      duration: '190',
      authors: 'Qwerty,Asdfghjkl'
    }
  ];

  onType(event:any){
    let inputValue:string=event.target.value;
    let inputName:string =event.target.name;
    this.formValues={
      ...this.formValues,
      [inputName]:inputValue
    };
  }

  onSave(){
    console.log(this.formValues);
    this.videoCourses=[
      ...this.videoCourses,
      this.formValues
    ]
    console.log(this.videoCourses);
    this.clear();
  }

  clear(){
    this.formValues={
      videoTitle: '',
      description: '',
      date: '',
      duration: '',
      authors: ''
    };
  }

}
