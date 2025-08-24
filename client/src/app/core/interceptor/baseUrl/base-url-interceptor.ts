import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { API_URL } from '../../token/api-url.token';

export const baseUrlInterceptor: HttpInterceptorFn = (req, next) => {
  const url = inject(API_URL);

  const apiReq = req.url.startsWith('http')
    ? req
    : req.clone({ url: `${url}${req.url}` });

  return next(apiReq);
};
