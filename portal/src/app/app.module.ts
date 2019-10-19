import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ElModule} from 'element-angular/release/element-angular.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ElMenusModule} from 'element-angular/release/menu/module';
import {ElContainerModule} from 'element-angular/release/container/module';
import {ElRowModule} from 'element-angular/release/row/module';
import {ElColModule} from 'element-angular/release/col/module';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ElButtonsModule} from 'element-angular/release/button/module';
import {ElCardsModule} from 'element-angular/release/card/module';
import {CodeLibComponent} from './components/code/lib/code-lib.component';
import {ElInputsModule} from 'element-angular/release/input/module';
import {ElTableModule} from 'element-angular/release/table/module';
import {CodeCheckComponent} from './components/code/check/code-check.component';
import {ElDialogModule} from 'element-angular/release/dialog/module';
import {ElFormModule} from 'element-angular/release/form/module';
import {ElCascaderModule} from 'element-angular/release/cascader/module';
import {ElDateModule} from 'element-angular/release/date-picker/module';
import {ElRadiosModule} from 'element-angular/release/radio/module';
import {ElCheckboxsModule} from 'element-angular/release/checkbox/module';
import {ElSelectModule} from 'element-angular/release/select/module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, DashboardComponent, CodeLibComponent, CodeCheckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ElModule.forRoot(),
    ElMenusModule,
    ElContainerModule,
    ElRowModule,
    ElColModule,
    ElButtonsModule,
    ElCardsModule,
    ElInputsModule,
    ElTableModule,
    ElDialogModule,
    ElFormModule,
    ElCascaderModule,
    ElDateModule,
    ElRadiosModule,
    ElCheckboxsModule,
    ElSelectModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
