import { Component, OnInit } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navbarOpen = false;
  iconFaHome = faHome;
  navItems = [{ name: 'Home', destination: 'home' }, { name: 'Imprint', destination: 'imprint' }];
  constructor() { }

  ngOnInit(): void {
  }

  toggleNavbar(): void {
    this.navbarOpen = !this.navbarOpen;
  }
}
