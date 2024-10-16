import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-prime-records',
  templateUrl: './prime-records.component.html',
  styleUrls: ['./prime-records.component.css']
})
export class PrimeRecordsComponent implements OnInit {
  records: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getRecords();
  }

  getRecords() {
    this.http.get<any[]>('http://localhost:8080/api/primes/records').subscribe(
      response => {
        /*console.log('Registros de la base de datos:', response);*/
        this.records = response;
      },
      error => {
        console.error('Error al obtener los registros', error);
      }
    );
  }
  
  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }
}