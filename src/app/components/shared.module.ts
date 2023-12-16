import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';
import { MaterialModule } from './shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServerComponent } from './shared/layout/server/server.component';

@NgModule({
    imports: [
        RouterModule,
        MaterialModule
    ],
    declarations: [
        LayoutComponent,
        ServerComponent
    ],
    exports: []
})
export class SharedModule { }