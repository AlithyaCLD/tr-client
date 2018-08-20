import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
/*import { NavbarComponent } from './components/proof-of-concept/navbar/navbar.component';
import { ButtonsComponent } from './components/proof-of-concept/buttons/buttons.component';
import { DropdownComponent } from './components/proof-of-concept/dropdown/dropdown.component';
import { FooterComponent } from './components/proof-of-concept/footer/footer.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { MonthlyDataComponent } from './components/monthly-data/monthly-data.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { ContentComponent } from './components/content/content.component';
import { TaxRemittanceCaComponent } from './components/tax-remittance-ca/tax-remittance-ca.component';
import { TaxRemittanceUsComponent } from './components/tax-remittance-us/tax-remittance-us.component';
import { GeneralTaxReportComponent } from './components/general-tax-report/general-tax-report.component';
import { TemplatesExportationComponent } from './components/templates-exportation/templates-exportation.component';
import { AdministrationComponent } from './components/administration/administration.component';
import { ReconciliationComponent } from './components/reconciliation/reconciliation.component';
import { AdministrationContactsComponent } from './components/administration-contacts/administration-contacts.component';
import { VerificationReportsComponent } from './components/verification-reports/verification-reports.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';*/
import { MainMenuService } from './services/main-menu.service';
import { AppRoutingModule, routingComponents } from './app-routing-module';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { PageFooterComponent } from './components/page-footer/page-footer.component';
import { EmployeeComponent } from './components/proof-of-concept/employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    /*NavbarComponent, //for bootstrap poc
    ButtonsComponent, // for bootstrap poc
    DropdownComponent, // for bootstrap poc
    FooterComponent, // for bootstrap poc*/

    routingComponents,    
    PageHeaderComponent,
    PageFooterComponent,
    EmployeeComponent
    /*MainMenuComponent,
    MonthlyDataComponent,
    MainContainerComponent,
    ContentComponent,
    TaxRemittanceCaComponent,
    TaxRemittanceUsComponent,
    GeneralTaxReportComponent,
    TemplatesExportationComponent,
    AdministrationComponent,
    ReconciliationComponent,
    AdministrationContactsComponent,
    VerificationReportsComponent,
    PageNotFoundComponent*/
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
