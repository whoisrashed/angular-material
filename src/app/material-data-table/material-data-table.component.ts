import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { User } from './user.model';
import { FAKE_USERS } from './data';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { MatSortModule, Sort } from '@angular/material/sort';



@Component({
  selector: 'app-material-data-table',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatSortModule],
  templateUrl: './material-data-table.component.html',
  styleUrls: ['./material-data-table.component.scss']
})
export class MaterialDataTableComponent implements OnInit {

  data!:Observable<User []>;

  columns :string[]= ['name','email','age','created_at'];

 userService = inject(UserService);
  
  
  ngOnInit() {


    this.data = this.userService.getUsers();

  }


  sortData(e:Sort){
    console.log(e);

    this.data = this.userService.getUsers(e.active,e.direction);  }

}
