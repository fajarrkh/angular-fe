import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    {
      path: '',
      loadChildren: () => import('@app/system/dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
      path: '',
      loadChildren: () => import('@app/system/auth/auth.module').then(m => m.AuthModule)
    },
    {
      path: '',
      loadChildren: () => import('@app/system/account/account.module').then(m => m.AccountModule),
    },
    {
      path: '**',
      redirectTo: 'not-found',
      pathMatch: 'full'
    }
];
@NgModule({
    imports: [
      RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule],
    providers: []
  })
  export class AppRoutingModule {}