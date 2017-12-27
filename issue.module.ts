import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { IssueTrackerComponent } from './issue-tracker.component';

const issueRouting: Routes = [
  {
      path: '',
      component: IssueTrackerComponent
  }
]
@NgModule({
  declarations: [
    IssueTrackerComponent
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
