import { Component, OnInit } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  supportLanguages = ['en', 'fr', 'ar'];
  browserlang: any;
  langDir: string = 'ltr';
  document: any;
  constructor(private translateService: TranslateService) {
    this.translateService.addLangs(this.supportLanguages);
    this.translateService.setDefaultLang('en');
    this.browserlang = this.translateService.getBrowserLang();
    this.translateService.use(this.browserlang);
  }

  ngOnInit(): void {}
  selectLang(lang: string) {
    this.translateService.use(lang);
    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      if (event.lang == 'ar') {
        this.langDir = 'rtl';
        this.document
          .getElementById('theme')
          .setAttribute('href', 'assets/css/style.angular.rtl.css');
      } else if (event.lang == 'en') {
        this.langDir = 'ltr';
        this.document
          .getElementById('theme')
          .setAttribute('href', 'assets/css/style.angular.css');
      } else {
        this.document
          .getElementById('theme')
          .setAttribute('href', 'assets/css/style.angular.rtl.css');
      }
    });
  }
}
