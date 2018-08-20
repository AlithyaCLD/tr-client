import { Component, OnInit } from '@angular/core';
import { MainMenuService } from '../../services/main-menu.service';
import { Router } from '@angular/router';
import { MenuItem } from '../../models/main-menu/menu-item';
import { Period } from '../../models/main-menu/period';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  constructor(private mainMenuService: MainMenuService, private router:Router) { }  
  private periods = []
  private menus = menuItems;
  private errorMsg;

  ngOnInit() {    
    this.mainMenuService.getAvailablePeriods()
      .subscribe((data: Period[]) => {        
        this.periods = data;        
      },
      error => this.errorMsg = error
    );
  }
  mainMenuServiceError(httpResponseError: HttpErrorResponse) {
    console.log("componnent logging: " +  httpResponseError.message);
  }
}
const menuItems: MenuItem[] = [
  { "label" : "Load Monthly Data", "route" : "monthly"},
  { "label" : "Tax Remittance Verfication", "route" : "verification-reports"},
  { "label" : "Process Tax Remittance - CA", "route" : "tax-rem-ca"},
  { "label" : "Process Tax Remittance - US", "route" : "tax-rem-us"},
  { "label" : "Generate General Tax Report", "route" : "tax-report"},
  { "label" : "Export Templates", "route" : "exports"},
  { "label" : "Tax Remittance - Administration", "route" : "admin"},
  { "label" : "Reconciliation", "route" : "admin-contacts"},
];