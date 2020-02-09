import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  checkActiveRoute(type) {
    return this.getPathFromUrl(this.router.url).includes(type);
  }

  private getPathFromUrl(url = '') {
    return url.split(/[?#]/)[0] || '';
  }

}
