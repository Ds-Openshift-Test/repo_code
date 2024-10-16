import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module'; // Importar el módulo de ruteo

import { AppComponent } from './app.component';
import { PrimeCheckerComponent } from './prime-checker/prime-checker.component';
import { PrimeRecordsComponent } from './prime-records/prime-records.component'; // Importar el nuevo componente

@NgModule({
  declarations: [
    AppComponent,
    PrimeCheckerComponent,
    PrimeRecordsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule // Importar el módulo de ruteo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}