import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddIssuesComponent } from './add-issues/add-issues.component';
import { SettingsComponent } from './settings/settings.component';
import { MyIssuesComponent } from './my-issues/my-issues.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { FormsModule } from '@angular/forms';

export const firebaseConfig = {
  apiKey: "AIzaSyBdEVdPjOJmWO-CfvG3GgM4TbeV26C_ZNI",
  authDomain: "fir-demo-2e19c.firebaseapp.com",
  databaseURL: "https://fir-demo-2e19c.firebaseio.com",
  projectId: "fir-demo-2e19c",
  storageBucket: "fir-demo-2e19c.appspot.com",
  messagingSenderId: "707711489864",
  appId: "1:707711489864:web:79353c62987cc98f08857d",
  measurementId: "G-TJ5YHR9XBH"
}

@NgModule({
  declarations: [
    AppComponent,
    AddIssuesComponent,
    SettingsComponent,
    MyIssuesComponent,
    NotificationsComponent,
    NewsFeedComponent,
    NavBarComponent,
    SocialMediaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgSelectModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
