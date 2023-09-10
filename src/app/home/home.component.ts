import { Component, OnInit } from '@angular/core';
import { FakeApiService } from '../fake-api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  countries:Array<any>=[]
  country:object={}
  Name:string=''
  numOfdoc:number=0;
  formCoun:string=''
  toCoun:string=''
  content:string=''
  date:string=''
  id:number=0

constructor(private _FakeApiService:FakeApiService ,private _Router:Router){
this.getCount()
}
getCount(){
  this.countries=this._FakeApiService.conutry
  this.country=this.countries[0]
  this.Name=this.countries[0].name
  this.numOfdoc=this.countries[0].numberOfDoucment
  this.formCoun=this.countries[0].from
  this.toCoun=this.countries[0].to
  this.date=this.countries[0].date
  this.id=this.countries[0].id
  this.content=this.countries[0].contant

  console.log(this.toCoun);

}

ngOnInit(): void {

}
}
