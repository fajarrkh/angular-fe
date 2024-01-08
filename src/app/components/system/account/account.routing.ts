import { Routes, RouterModule } from '@angular/router';
import { AccountPageComponent } from './account-page/account-page.component';
import { LayoutComponent } from '@app/shared/layout/layout.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'profile', component: AccountPageComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
