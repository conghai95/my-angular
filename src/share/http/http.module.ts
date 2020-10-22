import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpService } from './http.service';

@NgModule()
export class HttpServiceModule {
    static forRoot(): ModuleWithProviders<any> {
        return {
            ngModule: HttpServiceModule,
            providers: [
                HttpService
            ]
        };
    }
}