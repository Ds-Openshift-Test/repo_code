import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-prime-checker',
  templateUrl: './prime-checker.component.html',
  styleUrls: ['./prime-checker.component.css']
})
export class PrimeCheckerComponent implements OnInit {
  number: number | null = null;
  result: any = null;
  
  version: string = '';      // Para almacenar la versión
  environment: string = '';   // Para almacenar el entorno

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Obtener la versión y el entorno al cargar el componente
    this.http.get<any>(environment.apiUrl)
      .subscribe(
        response => {
          this.version = response.version;
          this.environment = response.environment;
        },
        error => {
          console.error('Error al obtener información de la aplicación', error);
        }
      );
  }

  onSubmit() {
    if (this.number !== null) {
      this.http.post<any>(`${environment.apiUrl}/primes/check`, { number: this.number })
        .subscribe(
          response => {
            this.result = {
              number: response.number,
              isPrime: response.prime
            };
          },
          error => {
            console.error('Error al verificar el número', error);
          }
        );
    } else {
      alert("Debes ingresar un número.");
    }
  }

  clear() {
    this.number = null;
    this.result = null;
  }
}
