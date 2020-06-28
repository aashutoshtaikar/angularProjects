import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangeDetectionDemoComponent } from './change-detection-demo.component';

const routes: Routes = [
    { path: 'changedetectiondemo', component: ChangeDetectionDemoComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChangeDetectionDemoRoutingModule { }