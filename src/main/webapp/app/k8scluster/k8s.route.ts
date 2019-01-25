import { Routes } from '@angular/router';

import { ClusterListRoute } from './';

const K8SCLUSTER_ROUTES = [ClusterListRoute];

export const k8sClusterState: Routes = [
    {
        path: '',
        children: K8SCLUSTER_ROUTES
    }
];
