import { Component, OnInit, ɵConsole } from '@angular/core';
import { DataService } from '../data-service.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent implements OnInit {

  public jsonData: any = [];
  public tempo: any = [];
  list = [];
  list1 = [];
  objectKeys = Object.keys;

  constructor(private dataService: DataService) { }

  async ngOnInit() {
    await this.getMenuData();
  }

  getMenuData() {
    return this.dataService.getData().subscribe((res: any) => {
      this.jsonData = res;
      // for (let obj in this.jsonData) {
      //   if (this.jsonData[obj].subheader || this.jsonData.subheader.length > 0) {
      //     for (let obj1 in this.jsonData[obj].subheader) {
      //       if (this.jsonData[obj].subheader[obj1].project || this.jsonData.subheader[obj1].project.length > 0) {
      //         this.list.push(this.jsonData[obj].subheader[obj1]);
      //       }
      //     }
      //   }
      // }
    });
  }

}
