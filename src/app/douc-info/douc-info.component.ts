import { Component } from '@angular/core';
import { FakeApiService } from '../fake-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-douc-info',
  templateUrl: './douc-info.component.html',
  styleUrls: ['./douc-info.component.scss'],
})
export class DoucInfoComponent {
  countries: Array<any> = [];
  country: object = {};
  Name: string = '';
  numOfdoc: number = 0;
  formCoun: string = '';
  toCoun: string = '';
  content: string = '';
  date: string = '';
  id: number = 0;
  link: string = '';
  numOfInout: number = 0;
  source: string = '';
  typeOfborder: string = '';
  importt: string = '';
  workNum: number = 0;
  security: string = '';
  pity: string = '';
  side: string = '';
  attatchment: number = 0;
  moreAttach: string = '';
  savePlace: string = '';
  fileCode: string = '';
  Doucs:Array<any> = [];


  constructor(
    private _FakeApiService: FakeApiService,
    private _ActivatedRoute: ActivatedRoute
  ) {
    this.getCount();
    this.getDoucs();
  }

  getDoucs() {
    this.Doucs = this._FakeApiService.Douc;

  }

  getCount() {
    this.countries = this._FakeApiService.conutry;

    this.id = this._ActivatedRoute.snapshot.params['id'];

    for (let Id = 0; Id < this.countries.length; Id++) {
      if (this.countries[Id].id == this.id) {
        this.country = this.countries[0];
        this.Name = this.countries[0].name;
        this.numOfdoc = this.countries[Id].numberOfDoucment;
        this.formCoun = this.countries[Id].from;
        this.toCoun = this.countries[Id].to;
        this.date = this.countries[Id].date;
        this.content = this.countries[Id].contant;
        this.link = this.countries[Id].link;
        this.numOfInout = this.countries[Id].numOfInout;
        this.source = this.countries[Id].source;
        this.typeOfborder = this.countries[Id].typeOfborder;
        this.importt = this.countries[Id].importt;
        this.workNum = this.countries[Id].workNum;
        this.security = this.countries[Id].security;
        this.pity = this.countries[Id].pity;
        this.side = this.countries[Id].side;
        this.attatchment = this.countries[Id].attatchment;
        this.moreAttach = this.countries[Id].moreAttach;
        this.savePlace = this.countries[Id].savePlace;
        this.fileCode = this.countries[Id].fileCode;
      }
    }
  }
}
