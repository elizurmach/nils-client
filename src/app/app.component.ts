import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'nils-client';

  constructor(private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) {
    environment.icons.forEach(icon => {
      let startIndex = icon.lastIndexOf("/") + 1;
      let endIndex = icon.length - startIndex + startIndex - 4;
      this.matIconRegistry.addSvgIcon(
        icon.substring(startIndex, endIndex),
        this.domSanitizer.bypassSecurityTrustResourceUrl(icon)
      );
    });
  }
}
