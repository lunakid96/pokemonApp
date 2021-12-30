import { Component, OnInit } from '@angular/core';
import { GenerationsService } from '../services/generations.service';
import { VersionService } from '../services/version.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  versionList: any[] = [];
  generationList: any[] = [];

  constructor(private version: VersionService, private generation: GenerationsService) { }

  ngOnInit(): void {
    this.initDataListener();
  }

  private initDataListener() {
    // display version
    this.version.getListVersion().subscribe(res => {
      this.versionList = res.results;
    });

    // display generation
    this.generation.getAllGenerations().subscribe(res => {
      this.generationList = res.results;
    });
  }
}
