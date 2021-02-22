import { Component } from '@angular/core';

@Component({
  selector: 'wj-application-error',
  templateUrl: './application-error.component.html',
  styleUrls: ['./application-error.component.scss']
})
export class ApplicationErrorComponent {
  handleRefreshClick(): void {
    window.location.reload();
  }
}
