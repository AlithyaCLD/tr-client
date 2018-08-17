import { Component, OnInit } from '@angular/core';
import { MainMenuService } from '../../services/main-menu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  constructor(private mainMenuService: MainMenuService, private router:Router) { }  
  private periods = [];
  public menus = MENUS;

  ngOnInit() {    
    this.mainMenuService.getAvailablePeriods()
      .subscribe(data => {
        console.log(data);
        this.periods = data;        
      },
      err => this.mainMenuServiceError()
    );
  }
  mainMenuServiceError() {
    console.log("err");
  }
/*  onSelect(menuId) {    
    console.log(menuId);
    console.log(MENUS[menuId].route);
    this.router.navigate([ MENUS[menuId].route ]);    
  }*/
}
export interface MENU {  
  label: string,
  route: string
}

const MENUS: MENU[] = [
  { "label" : "Load Monthly Data", "route" : "monthly"},
  { "label" : "Tax Remittance Verfication", "route" : "verification-reports"},
  { "label" : "Process Tax Remittance - CA", "route" : "tax-rem-ca"},
  { "label" : "Process Tax Remittance - US", "route" : "tax-rem-us"},
  { "label" : "Generate General Tax Report", "route" : "tax-report"},
  { "label" : "Export Templates", "route" : "exports"},
  { "label" : "Tax Remittance - Administration", "route" : "admin"},
  { "label" : "Reconciliation", "route" : "admin-contacts"},
];