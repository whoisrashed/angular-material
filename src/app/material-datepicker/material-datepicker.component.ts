import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';

@Component({
  selector: 'app-material-datepicker',
  standalone: true,
  templateUrl: './material-datepicker.component.html',
  styleUrls: ['./material-datepicker.component.scss'],
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule],
})
export class MaterialDatepickerComponent {

  today = new Date();
  maxDate = new Date('2024-04-03');
}
