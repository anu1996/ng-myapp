import { AppComponent } from './app.component';
import { DummyService } from './dummy.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { TestComponent } from './test/test.component';
import {DialogExampleComponent} from './dialog-example/dialog-example.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    TestComponent,
    AppComponent,
    DialogExampleComponent,LoginComponent, AboutComponent,
  ],
  entryComponents:[
  DialogExampleComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,NgbModalModule,MatFormFieldModule,
    MatDialogModule,ScrollingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [DummyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
