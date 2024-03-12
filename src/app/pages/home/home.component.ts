import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProjectInterface, Projects } from '../../types/project';
import { ProjectService } from '../../services/project.service';
import { CardComponent } from '../../card/card.component';
import { ProgressCircularComponent } from '../../progress-circular/progress-circular.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatGridListModule, NgFor, NgIf, CardComponent, ProgressCircularComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  loading: boolean = true;
  listProjects:ProjectInterface[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService.listarProjects().subscribe((res) => {
      this.loading = true;
      console.log('RES ', res);
      this.listProjects = res;
      this.loading = false;
    });
  }
}
