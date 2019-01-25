import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';

@Injectable({ providedIn: 'root' })
export class ClusterListService {
    constructor(private http: HttpClient) {}

    getClusterList(): Observable<any> {
        return this.http.get(SERVER_API_URL + 'k8scluster/getClusterList');
    }
}
