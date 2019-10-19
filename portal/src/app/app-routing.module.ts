import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {CodeLibComponent} from './components/code/lib/code-lib.component';
import {CodeCheckComponent} from './components/code/check/code-check.component';


const routes: Routes = [{
  path: '',
  component: DashboardComponent
}, {
  path: 'code/lib',
  component: CodeLibComponent
}, {
  path: 'code/check',
  component: CodeCheckComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
