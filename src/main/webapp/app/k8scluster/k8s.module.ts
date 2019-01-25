import { NgModule, LOCALE_ID } from '@angular/core';
import { DatePipe, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { k8sClusterState } from 'app/k8scluster/k8s.route';
import locale from '@angular/common/locales/en';
import { ClusterListComponent } from 'app/k8scluster/cluster-list/cluster-list.component';

@NgModule({
    imports: [HttpClientModule, BrowserModule, RouterModule.forChild(k8sClusterState)],
    exports: [],
    declarations: [ClusterListComponent],
    providers: [
        Title,
        {
            provide: LOCALE_ID,
            useValue: 'en'
        },
        DatePipe
    ]
})
export class K8SClusterManagementModule {
    constructor() {
        registerLocaleData(locale);
    }
}
