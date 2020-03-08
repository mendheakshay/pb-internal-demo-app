import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  public jsonData = [];
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.getData().subscribe(data => this.jsonData = data);
  }

}
