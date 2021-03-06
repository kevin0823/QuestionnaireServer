import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";


import { CustomerRoutingModule } from './customer-routing.module'
import { CustomerComponent } from './customer.component';
import { IndexComponent } from './index/index.component';
import { QuestionnaireFormComponent } from './questionnaire-form/questionnaire-form.component';
import { QuestionnaireViewComponent } from './questionnaire-view/questionnaire-view.component';
import { SettingComponent } from './setting/setting.component';
import { WalletComponent } from './wallet/wallet.component';
import { WalletFlowComponent } from './walletflow/walletflow.component';


@NgModule({
    declarations: [
        CustomerComponent,
        IndexComponent,
        QuestionnaireFormComponent,
        QuestionnaireViewComponent,
        SettingComponent,
        WalletComponent,
        WalletFlowComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        CustomerRoutingModule,
    ],
    providers: [],
    bootstrap: [CustomerComponent]
})
export class CustomerModule {
}
