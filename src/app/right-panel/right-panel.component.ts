import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service.service';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl, } from '@angular/platform-browser';

@Component({
  selector: 'app-right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.scss']
})
export class RightPanelComponent implements OnInit {

  public jsonData = [];
  descriptionlist = [];
  videoList = [];
  href: string = "";
  videoSRC: any = "";
  videoSanitize: SafeResourceUrl;
  constructor(private _dataService: DataService, private router: Router, private _sanitizer: DomSanitizer) {

  }

  ngOnInit() {
    this._dataService.getData().subscribe(data => {
      this.href = this.router.url;
      console.log(this.href);
      this.jsonData = data;
      for (let obj in this.jsonData) {

        for (let testKey in this.jsonData[obj].subheader) {
          if (this.jsonData[obj].subheader[testKey].routerlink == this.href) {
            this.descriptionlist.push(this.jsonData[obj].subheader[testKey].project);
            this.videoList.push(this.jsonData[obj].subheader[testKey].project);
            this.videoSRC = this.videoList[testKey].videoURL;

            this.videoSanitize = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoSRC);

          }
        }
      }
    });
  }
}
