import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectInterface } from '../types/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  baseUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  listarProjects(): Observable<ProjectInterface[]>{
    return this.httpClient.get<ProjectInterface[]>(
      `${this.baseUrl}/projects`
    );
  }
}
