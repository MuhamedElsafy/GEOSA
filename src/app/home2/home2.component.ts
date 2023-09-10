import { Component } from '@angular/core';
import { FakeApiService } from '../fake-api.service';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.scss'],
})
export class Home2Component {
  countries: Array<any> = [];
  country: object = {};
  Name: string = '';
  numOfdoc: number = 0;
  formCoun: string = '';
  toCoun: string = '';
  content: string = '';
  date: string = '';
  id: number = 0;

  constructor(private _FakeApiService: FakeApiService) {
    this.getCount();
  }

  getCount() {
    this.countries = this._FakeApiService.conutry;
    this.country = this.countries[0];
    this.Name = this.countries[0].name;
    this.numOfdoc = this.countries[0].numberOfDoucment;
    this.formCoun = this.countries[0].from;
    this.toCoun = this.countries[0].to;
    this.date = this.countries[0].date;
    this.id = this.countries[0].id;
    this.content = this.countries[0].contant;

    console.log(this.toCoun);
  }
}
