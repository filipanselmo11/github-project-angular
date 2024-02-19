import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@Component({
  selector: 'app-progress-circular',
  standalone: true,
  imports: [MatProgressSpinnerModule],
  templateUrl: './progress-circular.component.html',
  styleUrl: './progress-circular.component.css'
})
export class ProgressCircularComponent {

}
