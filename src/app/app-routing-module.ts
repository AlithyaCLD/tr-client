import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonthlyDataComponent } from './components/monthly-data/monthly-data.component';
import { VerificationReportsComponent } from './components/verification-reports/verification-reports.component';
import { TaxRemittanceCaComponent } from './components/tax-remittance-ca/tax-remittance-ca.component';
import { TaxRemittanceUsComponent } from './components/tax-remittance-us/tax-remittance-us.component';
import { GeneralTaxReportComponent } from './components/general-tax-report/general-tax-report.component';
import { TemplatesExportationComponent } from './components/templates-exportation/templates-exportation.component';
import { AdministrationComponent } from './components/administration/administration.component';
import { AdministrationContactsComponent } from './components/administration-contacts/administration-contacts.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { NavbarComponent } from './components/proof-of-concept/navbar/navbar.component'; //for bootstrap poc
import { ButtonsComponent } from './components/proof-of-concept/buttons/buttons.component'; //for bootstrap poc
import { DropdownComponent } from './components/proof-of-concept/dropdown/dropdown.component'; //for bootstrap poc    
import { FooterComponent } from './components/proof-of-concept/footer/footer.component'; //for bootstrap poc        

const routes: Routes = [
    { path: '', redirectTo: 'main-menu', pathMatch: 'full'},
    //{ path: '', component: MainMenuComponent },
    { path: 'main-menu', component: MainMenuComponent },
    { path: 'monthly', component: MonthlyDataComponent },
    { path: 'verification-reports', component: VerificationReportsComponent },
    { path: 'tax-rem-ca', component: TaxRemittanceCaComponent },
    { path: 'tax-rem-us', component: TaxRemittanceUsComponent },
    { path: 'tax-report', component: GeneralTaxReportComponent },
    { path: 'exports', component: TemplatesExportationComponent },
    { path: 'admin', component: AdministrationComponent },
    { path: 'admin-contacts', component: AdministrationContactsComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
export const routingComponents = [ PageNotFoundComponent, MainMenuComponent, MonthlyDataComponent, VerificationReportsComponent, TaxRemittanceCaComponent,
     TaxRemittanceUsComponent, GeneralTaxReportComponent, TemplatesExportationComponent, AdministrationComponent, AdministrationContactsComponent,
     DropdownComponent, NavbarComponent, FooterComponent, ButtonsComponent
];
