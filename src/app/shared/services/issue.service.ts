import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  constructor(private db: AngularFireDatabase) { }
  
  create(issue) {
    return this.db.list('/users/userId/issues').push(issue);
  }
}
