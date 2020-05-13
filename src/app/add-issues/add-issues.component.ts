import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';


@Component({
  selector: 'add-issues',
  templateUrl: './add-issues.component.html',
  styleUrls: ['./add-issues.component.css']
})
export class AddIssuesComponent {
  form: FormGroup = this.fb.group({
    issue: new FormControl(),
    image: ['', Validators.required],
    preference: new FormControl(),
    suggestion: new FormControl('please add your inputs in here')
  });
  issues: any[];
  constructor(private db: AngularFireDatabase,  private fb: FormBuilder,
              private cd: ChangeDetectorRef,private af: AngularFireAuth,private router: Router) {
    db.list('/issues')
    .valueChanges().subscribe(issues => {
        this.issues = issues;
        console.log(this.issues);
      });
  }
  onFileChange(event, field) {
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      // just checking if it is an image, ignore if you want
      if (!file.type.startsWith('image')) {
        this.form.get(field).setErrors({
          required: true
        });
        this.cd.markForCheck();
      } else {
        // unlike most tutorials, i am using the actual Blob/file object instead of the data-url
        this.form.patchValue({
          [field]: file
        });
        // need to run CD since file load runs outside of zone
        this.cd.markForCheck();
      }
    }
  }

  submit() {
    let userID = this.af.auth.currentUser.uid ;
    // let result = await this.db.list('/users/${this.getUid}/issues').push(this.issues);
    firebase.database().ref(`/users/${userID}/issues`).push(this.form.value)
  .then(() => {
    alert("New issue has been logged!");
    this.router.navigate(['/my-issues-component']);
  })
  }
}
