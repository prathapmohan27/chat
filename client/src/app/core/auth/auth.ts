import { inject, Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  readonly #jwtHelper: JwtHelperService = inject(JwtHelperService);
  readonly #token = 'access_token';

  getToken(): string {
    return localStorage.getItem(this.#token) ?? '';
  }

  setAuthToken(token: string): void {
    localStorage.setItem(this.#token, token);
  }

  removeAuthToken(): void {
    localStorage.removeItem(this.#token);
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return token != null && !this.#jwtHelper.isTokenExpired(token);
  }
}
