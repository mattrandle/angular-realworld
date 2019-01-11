import { Injectable } from  '@angular/core'
import { HttpClient, HttpParams, HttpHeaders } from  '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  private getHeaders(authToken: string): HttpHeaders {
    let headers: any = {
      "Content-Type": "application/json; charset=utf-8"
    };
    
    if (authToken) {
      headers.Authorization = `Token ${authToken}`;
    }
    
    return new HttpHeaders(headers);
  }

  get(url: string, params: HttpParams = new HttpParams(), authToken: string = null): Observable<any> {
    const headers = this.getHeaders(authToken);
    return this.httpClient.get(url, { params, headers });
  }

  delete(url: string, authToken: string = null): Observable<any> {
    const headers = this.getHeaders(authToken);
    return this.httpClient.delete(url, { headers });
  }

  post(url: string, data: Object = {}, authToken: string = null): Observable<any> {
    const headers = this.getHeaders(authToken);
    return this.httpClient.post(url, JSON.stringify(data), { headers });
  }

  put(url: string, data: Object = {}, authToken: string = null): Observable<any> {
    const headers = this.getHeaders(authToken);
    return this.httpClient.put(url, JSON.stringify(data), { headers });
  }
}
