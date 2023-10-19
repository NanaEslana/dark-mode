import { Component } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.sass']
})
export class HeadComponent {
  isDark = false;

  changeTheme() {
    document.body.classList.toggle('dark')
    this.isDark = !this.isDark;
  }

}
