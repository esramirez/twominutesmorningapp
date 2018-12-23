import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MorningrecordsService } from './services/morningrecords.service';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import {MatButtonModule,MatIconModule, MatInputModule, MatSelectModule,
MatSliderModule, MatSlideToggleModule, MatCardModule,
MatToolbarModule} from '@angular/material';
import { MorningRecordComponent } from './morning-record/morning-record.component';
import { ListMorningRecordComponent } from './list-morning-record/list-morning-record.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


const routes: Routes=[
    { path: '', component: ListMorningRecordComponent },
    { path: 'morning', component: MorningRecordComponent},
    { path: 'morning/:id', component: MorningRecordComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    MorningRecordComponent,
    ListMorningRecordComponent
  ],
  imports: [
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule, 
    MatInputModule, 
    MatSelectModule,
    MatSliderModule, 
    MatSlideToggleModule, 
    MatCardModule,
    MatToolbarModule
  ],
  providers: [MorningrecordsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
