import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    {
      path: 'dashboard',
      loadChildren: () => import('./components/system/dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
      path: '**',
      redirectTo: 'dashboard',
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