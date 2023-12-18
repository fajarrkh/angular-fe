import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    {
      path: '',
      loadChildren: () => import('@app/system/dashboard/dashboard.module').then(m => m.DashboardModule)
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