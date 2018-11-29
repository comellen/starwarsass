import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const endpoint = 'https://swapi.co/api/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getResults(selection: string, searchValue: string) {
    return this.http.get(`${endpoint}${selection}/?search=${searchValue}`, httpOptions);
  }

}