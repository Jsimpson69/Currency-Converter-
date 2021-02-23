import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ExhangeRatesResponse} from './payLoads/exhange-rates-response'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRatesService {

  constructor(private httpClient: HttpClient) { }
    
  
  getRates(base: string): Observable<ExhangeRatesResponse> {
      return this.httpClient.get<ExhangeRatesResponse>(`https://api.exchangeratesapi.io/latest?base=${base}`)
    }
  }

