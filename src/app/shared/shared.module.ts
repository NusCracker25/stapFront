import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { LoggerModule , NgxLoggerLevel } from 'ngx-logger';
import { QuillModule } from 'ngx-quill';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    LayoutModule,
    // ngx logger module is used accross the app
    LoggerModule.forRoot({ serverLoggingUrl: '/api/logs',
                           level: NgxLoggerLevel.DEBUG,
                           serverLogLevel: NgxLoggerLevel.OFF,
                           disableConsoleLogging: false,
                           colorScheme: ['purple', 'teal', 'gray', 'gray', 'red', 'red', 'red']

                        }),
    QuillModule.forRoot()    
  ],
  exports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    LayoutModule,
    LoggerModule,
    QuillModule
  ]
})
export class SharedModule { }
