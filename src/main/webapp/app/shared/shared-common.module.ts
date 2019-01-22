import { NgModule } from '@angular/core';

import { StreamAnalyzerSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [StreamAnalyzerSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [StreamAnalyzerSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class StreamAnalyzerSharedCommonModule {}
