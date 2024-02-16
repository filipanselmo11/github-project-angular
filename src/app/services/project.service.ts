import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Projects } from '../types/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  baseUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  listarProjects(): Observable<Projects>{
    return this.httpClient.get<Projects>(
      `${this.baseUrl}/projects`
    );
  }
}
