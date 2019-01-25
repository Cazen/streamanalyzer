import { Route } from '@angular/router';

import { SqlEditorComponent } from './sql-editor.component';

export const sqlEditorRoute: Route = {
    path: 'flink/sql-editor',
    component: SqlEditorComponent,
    data: {
        authorities: [],
        pageTitle: 'Cluster List'
    }
};
