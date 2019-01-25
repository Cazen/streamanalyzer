import { SqlEditorService } from './sql-editor.service';
import { Component } from '@angular/core';
import { SQLQuery } from 'app/flink';

@Component({
    selector: 'jhi-sql-editor',
    templateUrl: './sql-editor.component.html'
})
export class SqlEditorComponent {
    sqlList: SQLQuery[];

    constructor(private sqlEditorService: SqlEditorService) {}
}
