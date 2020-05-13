import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'my-issues',
  templateUrl: './my-issues.component.html',
  styleUrls: ['./my-issues.component.css']
})
export class MyIssuesComponent implements OnInit {
  my_issues: any[];
  userID = this.af.auth.currentUser.uid ;
  constructor(private db: AngularFireDatabase,private af: AngularFireAuth) {
    const newLocal = '/users/'+this.userID+'/issues';
    db.list(newLocal)
    .valueChanges().subscribe(my_issues => {
        this.my_issues = my_issues;
        console.log(this.my_issues);
      });
  }
  onClick() {
    
  }

  ngOnInit(): void {
  }

}
