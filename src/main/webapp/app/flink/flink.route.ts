import { Routes } from '@angular/router';

import { sqlEditorRoute } from './';

const FLINK_ROUTES = [sqlEditorRoute];

export const FlinkState: Routes = [
    {
        path: '',
        children: FLINK_ROUTES
    }
];
