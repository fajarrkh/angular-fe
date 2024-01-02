import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';
import { MaterialModule } from './shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServerComponent } from './shared/layout/server/server.component';
import { UserProfileComponent } from './system/dashboard/user-profile/user-profile.component';
import { UserComponent } from './shared/layout/user/user.component';
import { MenuBarComponent } from './shared/layout/menu-bar/menu-bar.component';

@NgModule({
    imports: [
        RouterModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule
    ],
    declarations: [
        LayoutComponent,
        ServerComponent,
        UserComponent,
        MenuBarComponent,
        UserProfileComponent
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        MaterialModule
    ]
})
export class SharedModule { }