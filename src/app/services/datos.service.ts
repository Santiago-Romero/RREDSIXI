import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  
  constructor(private http: HttpClient) {

  }

  obtenerDatos(){
    //// DEL PROFESOR
    ///return this.http.get('http://www.mocky.io/v2/5d6addff3100006000d2077c');
    //// MIO
    return this.http.get('http://www.mocky.io/v2/5d79ccc8320000520034eae3');
  }
}
