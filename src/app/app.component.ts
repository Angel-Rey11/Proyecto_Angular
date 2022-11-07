import { Component} from '@angular/core';
import { INote } from './model/INote';
import { ThemeService } from './theme.service';
import { LocalstorageService } from './services/localstorage.service';
import { LoginService } from './services/login.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'holamundo';
  isDarkMode: boolean;
  private user!: string;

  constructor(private themeService: ThemeService, public translate:TranslateService) {
    this.translate.addLangs(['es','en']);
    this.translate.setDefaultLang('es');
    this.themeService.initTheme();
    this.isDarkMode = this.themeService.isDarkMode();
  }

  toggleDarkMode() {
    this.isDarkMode = this.themeService.isDarkMode();

    this.isDarkMode
      ? this.themeService.update('light-mode')
      : this.themeService.update('dark-mode');
  }

  public alerta(){
    alert("Alerta Roja");
  }
}
