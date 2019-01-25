import { NgModule, LOCALE_ID } from '@angular/core';
import { DatePipe, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FlinkState } from 'app/flink/flink.route';
import { SqlEditorComponent } from 'app/flink/sql-editor/sql-editor.component';
import locale from '@angular/common/locales/en';

@NgModule({
    imports: [HttpClientModule, RouterModule.forChild(FlinkState)],
    exports: [],
    declarations: [SqlEditorComponent],
    providers: [
        Title,
        {
            provide: LOCALE_ID,
            useValue: 'en'
        },
        DatePipe
    ]
})
export class FlinkJobManagementModule {
    constructor() {
        registerLocaleData(locale);
    }
}
