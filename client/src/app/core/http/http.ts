import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Http {
  readonly #httpClient = inject(HttpClient);

  // avoid most of the case we can use the httpResources
  get<TResponse>(url: string): Observable<TResponse> {
    return this.#httpClient.get<TResponse>(url);
  }

  post<TResponse, TBody = unknown>(
    url: string,
    body: TBody,
  ): Observable<TResponse> {
    return this.#httpClient.post<TResponse>(url, body);
  }

  put<TResponse, TBody = unknown>(
    url: string,
    body: TBody,
  ): Observable<TResponse> {
    return this.#httpClient.put<TResponse>(url, body);
  }

  patch<TResponse, TBody = unknown>(
    url: string,
    body: TBody,
  ): Observable<TResponse> {
    return this.#httpClient.patch<TResponse>(url, body);
  }

  delete<TResponse>(url: string): Observable<TResponse> {
    return this.#httpClient.delete<TResponse>(url);
  }
}
