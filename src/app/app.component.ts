import { Component, ChangeDetectorRef } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { icons } from 'src/assets/resources/icons-liberary';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'nils-client';
  user: User;

  constructor(private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer, private changeDetector: ChangeDetectorRef) {
    icons.forEach(icon => {
      let startIndex = icon.lastIndexOf("/") + 1;
      let endIndex = icon.length - 4;
      this.matIconRegistry.addSvgIcon(
        icon.substring(startIndex, endIndex),
        this.domSanitizer.bypassSecurityTrustResourceUrl(icon)
      );
    });
  }

  onLogin(user:User): void {
    this.user = user;
    this.changeDetector.detectChanges();
  }

  onError(error: any): void {
    //todo: handle login error
  }
}
