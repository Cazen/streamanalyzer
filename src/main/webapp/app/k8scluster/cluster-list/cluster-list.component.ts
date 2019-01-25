import { Component, OnInit } from '@angular/core';
import { ClusterListService } from './cluster-list.service';
import { Cluster } from './cluster-list.model';
import { HttpResponse } from '@angular/common/http';
import { Audit } from 'app/admin';

@Component({
    selector: 'jhi-cluster-list',
    templateUrl: './cluster-list.component.html'
})
export class ClusterListComponent implements OnInit {
    testString: Array<String>;

    constructor(private clusterListService: ClusterListService) {}

    ngOnInit() {
        this.clusterListService.getClusterList().subscribe(data => {
            this.testString = data;
        });
    }
}
