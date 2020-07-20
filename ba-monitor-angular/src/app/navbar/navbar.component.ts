import { Component, OnInit } from '@angular/core';
import { faHome, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navbarOpen = false;
  faHome = faHome;
  faSignInAlt = faSignInAlt;
  faUserPlus = faUserPlus;
  navItems = [
    { name: 'Home', destination: 'home' },
    { name: 'Technology Stack', destination: 'tech-stack' },
    { name: 'Data Privacy', destination: 'data-privacy' },
    { name: 'Imprint', destination: 'imprint' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

  toggleNavbar(): void {
    this.navbarOpen = !this.navbarOpen;
  }
}
