import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'add-issues',
  templateUrl: './add-issues.component.html',
  styleUrls: ['./add-issues.component.css']
})
export class AddIssuesComponent implements OnInit {
  todoForm: FormGroup = this.fb.group({
    todo: ['', Validators.required],
    image: ['', Validators.required], //making the image required here
    done: [false]
  })
  userForm = new FormGroup({
    preference: new FormControl(),
    tc: new FormControl()
  }); 
  suggestion = new FormControl('please add your inputs in here');
  issues: any[];
  constructor(db: AngularFireDatabase,  private fb: FormBuilder,
    private cd: ChangeDetectorRef) { 
    db.list('/issues')
    .valueChanges().subscribe(issues=> {
        this.issues = issues;
        console.log(this.issues);
      })
  }
  ngOnInit(): void {
  }
  /**
   *@param event {EventObject} - the javascript change event
   *@param field {String} - the form field control name
   */
  onFileChange(event, field) {
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      // just checking if it is an image, ignore if you want
      if (!file.type.startsWith('image')) {
        this.todoForm.get(field).setErrors({
          required: true
        });
        this.cd.markForCheck();
      } else {
        // unlike most tutorials, i am using the actual Blob/file object instead of the data-url
        this.todoForm.patchValue({
          [field]: file
        });
        // need to run CD since file load runs outside of zone
        this.cd.markForCheck();
      }
    }
  }
  

}
