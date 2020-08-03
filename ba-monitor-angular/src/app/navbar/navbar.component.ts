import { Component, OnInit } from '@angular/core';
import { faHome, faSignInAlt, faUserPlus, faSlidersH, faUser, faUserCircle, faBuilding, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '@services/auth.service';

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
    { name: 'Technology Stack', destination: 'tech-stack', protected: false },
    { name: 'Data Privacy', destination: 'data-privacy', protected: false },
    { name: 'Imprint', destination: 'imprint', protected: false },
    { name: 'Personal Finance', destination: 'person-base', icon: faUser, protected: true },
    { name: 'Business Management', destination: 'business-base', icon: faBuilding, protected: true },
    { name: 'Market Research', destination: 'market-research', icon: faChartLine, protected: true },
    { name: 'Control Panel', destination: 'control-panel', icon: faSlidersH, protected: true },
  ];
  navItemsRight = [
    { name: 'Profile', destination: 'user-profile', icon: faUserCircle, protected: true },
    { name: 'Login', destination: 'login', icon: faSignInAlt, protected: false },
    { name: 'Sign-up', destination: 'registration', icon: faUserPlus, protected: false },
    { name: 'Logout', destination: 'logout', icon: faSignInAlt, protected: true },
  ];

  constructor( private authService: AuthService) { }

  ngOnInit(): void {
  }

  toggleNavbar(): void {
    this.navbarOpen = !this.navbarOpen;
  }

  validateProtection(navItem: any): boolean {
    if (navItem.protected === true) {
      return this.authService.isUserLoggedIn();
    } else {
      return !this.authService.isUserLoggedIn();
    }
  }
}
