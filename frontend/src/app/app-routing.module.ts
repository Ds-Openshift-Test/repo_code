import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimeCheckerComponent } from './prime-checker/prime-checker.component';
import { PrimeRecordsComponent } from './prime-records/prime-records.component'; // Importar el nuevo componente

const routes: Routes = [
  { path: '', component: PrimeCheckerComponent },
  { path: 'records', component: PrimeRecordsComponent }, // Nueva ruta
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}