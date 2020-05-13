import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddIssuesComponent } from './add-issues/add-issues.component';
import { MyIssuesComponent } from './my-issues/my-issues.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  { path: 'add-issues-component', component: AddIssuesComponent },
  { path: 'my-issues-component', component: MyIssuesComponent },
  { path: 'notifications-component', component: NotificationsComponent },
  { path: 'news-feed-component', component: NewsFeedComponent },
  { path: 'settings-component', component: SettingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
