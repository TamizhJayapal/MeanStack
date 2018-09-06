import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],  
  providers : [ DataService ]

})
export class ViewComponent implements OnInit {
  students:Array<any>;
  constructor(private _dataService:DataService){}     
  ngOnInit(){
    this._dataService.getStudents().subscribe(response => this.students = response);
  }
}
