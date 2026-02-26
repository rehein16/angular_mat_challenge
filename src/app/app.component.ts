import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary">
      <mat-icon>assignment_ind</mat-icon>
      <span style="margin-left: 8px;">Angular Material Registration Demo</span>
    </mat-toolbar>
    <app-register></app-register>
  `,
  styles: []
})
export class AppComponent {
  title = 'angular-mat-demo';
}
