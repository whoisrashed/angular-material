import { Component, OnInit, inject } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ThemeSwitcher } from './services/theme-switcher.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'angular-material';

  themeSwitcher = inject(ThemeSwitcher)
  isLightMode = this.themeSwitcher.isLightMode;






  constructor() {



  }
  ngOnInit(): void {

  }
  toggle(event: MatSlideToggleChange) {

    console.log(event)


    this.themeSwitcher.setTheme(event.checked)
  }


}
