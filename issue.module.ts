import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { IssueTrackerComponent } from './issue-tracker.component';
import { GallaryComponent } from './gallary/gallary.component';
import { BlogComponent } from './blog/blog.component';

const issueRouting: Routes = [
  {
      path: '',
      component: IssueTrackerComponent
  },
  {
    path: 'Gallary',
    component: GallaryComponent
},
{
  path: 'Blog',
  component: BlogComponent
}
]
@NgModule({
  declarations: [
    IssueTrackerComponent,
    GallaryComponent,
    BlogComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(issueRouting)
  ],
  providers: [],
  bootstrap: [IssueTrackerComponent]
})
export class issueModule { }
