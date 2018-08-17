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
  onSelect(menuId) {    
    console.log(menuId);
    this.router.navigate([ 'monthly', menuId ]);
  }
}
