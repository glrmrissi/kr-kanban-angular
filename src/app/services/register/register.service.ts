import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  role: number;
}

export interface RegisterResponse {
  token: string;
  user: { id: number; name: string; email: string, role: number };
}

@Injectable({ providedIn: 'root' })
export class RegisterService {
  private apiUrl = 'http://localhost:3000/auth/register';

  constructor(private http: HttpClient) {}

  create(payload: RegisterRequest): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(`${this.apiUrl}`, payload);
  }
}
