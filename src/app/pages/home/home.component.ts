import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProjectInterface } from '../../types/project';
import { ProjectService } from '../../services/project.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatGridListModule, NgFor, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  loading: boolean = true;
  listProjects: ProjectInterface[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService.listarProjects().subscribe((res) => {
      this.loading = true;
      this.listProjects = res;
      console.log('LIST PROJECTS ', this.listProjects);
      this.loading = false;
    });
  }
}
