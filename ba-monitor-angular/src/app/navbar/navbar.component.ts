import { Component, OnInit } from '@angular/core';
import { faHome, faSignInAlt, faUserPlus, faSlidersH, faUser, faUserCircle, faBuilding, faChartLine } from '@fortawesome/free-solid-svg-icons';

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
  faUserCircle = faUserCircle;
  faUser = faUser;
  navItems = [
    { name: 'Technology Stack', destination: 'tech-stack' },
    { name: 'Data Privacy', destination: 'data-privacy' },
    { name: 'Imprint', destination: 'imprint' },
    { name: 'Personal Finance', destination: 'person-base', icon: faUser },
    { name: 'Business Management', destination: '#', icon: faBuilding },
    { name: 'Market Research', destination: '#', icon: faChartLine },
    { name: 'Settings', destination: '#', icon: faSlidersH },
  ];
  constructor() { }

  ngOnInit(): void {
  }

  toggleNavbar(): void {
    // this.navbarOpen = true;
    this.navbarOpen = !this.navbarOpen;
  }
}
