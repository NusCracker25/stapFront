/* tslint:disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { BookControllerService } from './services/book-controller.service';
import { BookModificationControllerService } from './services/book-modification-controller.service';
import { BookPeopleControllerService } from './services/book-people-controller.service';
import { DefinitionControllerService } from './services/definition-controller.service';
import { DefinitionModificationControllerService } from './services/definition-modification-controller.service';
import { DefinitionReferenceControllerService } from './services/definition-reference-controller.service';
import { ModificationControllerService } from './services/modification-controller.service';
import { PeopleControllerService } from './services/people-controller.service';
import { PeopleModificationControllerService } from './services/people-modification-controller.service';
import { PingControllerService } from './services/ping-controller.service';
import { ReferenceControllerService } from './services/reference-controller.service';
import { ReferenceBookControllerService } from './services/reference-book-controller.service';
import { ReferenceModificationControllerService } from './services/reference-modification-controller.service';
import { ShipControllerService } from './services/ship-controller.service';
import { ShipModificationControllerService } from './services/ship-modification-controller.service';
import { TermControllerService } from './services/term-controller.service';
import { TermDefinitionControllerService } from './services/term-definition-controller.service';
import { TermModificationControllerService } from './services/term-modification-controller.service';
import { TermThemeControllerService } from './services/term-theme-controller.service';
import { ThemeControllerService } from './services/theme-controller.service';
import { ThemeModificationControllerService } from './services/theme-modification-controller.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    BookControllerService,
    BookModificationControllerService,
    BookPeopleControllerService,
    DefinitionControllerService,
    DefinitionModificationControllerService,
    DefinitionReferenceControllerService,
    ModificationControllerService,
    PeopleControllerService,
    PeopleModificationControllerService,
    PingControllerService,
    ReferenceControllerService,
    ReferenceBookControllerService,
    ReferenceModificationControllerService,
    ShipControllerService,
    ShipModificationControllerService,
    TermControllerService,
    TermDefinitionControllerService,
    TermModificationControllerService,
    TermThemeControllerService,
    ThemeControllerService,
    ThemeModificationControllerService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
