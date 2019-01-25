import { Route } from '@angular/router';

import { ClusterListComponent } from './cluster-list.component';

export const ClusterListRoute: Route = {
    path: 'k8s/cluster-list',
    component: ClusterListComponent,
    data: {
        authorities: [],
        pageTitle: 'Cluster List'
    }
};
