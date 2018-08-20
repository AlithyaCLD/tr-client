import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { MainMenuService } from './services/main-menu.service';
import { AppRoutingModule, routingComponents } from './app-routing-module';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { PageFooterComponent } from './components/page-footer/page-footer.component';
import { EmployeeComponent } from './components/proof-of-concept/employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,

    routingComponents,    
    PageHeaderComponent,
    PageFooterComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [ MainMenuService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
