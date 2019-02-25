
import {map} from 'rxjs/operators';
import {HttpParams, HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SkiResortName } from '../model/ski-resort-name';
import { SkiResort } from '../model/ski-resort';
import { Track } from '../model/track';
import { Weather } from '../model/weather';
import { SkiPassPrice } from '../model/ski-pass-price';
import { Reservation } from '../model/reservation';


const baseUrl= "http://localhost:3000/api/skiresorts";

@Injectable({
  providedIn: 'root'
})
export class SkiResortService {

  constructor(private http : HttpClient) { }

  getNames(): Observable<SkiResortName[]> {
    return this.http.get<Array<SkiResortName>>(baseUrl).pipe(map(res => {
      let retVal = new Array<SkiResortName>();
      res.forEach(elem => retVal.push(new SkiResortName(elem)));
      return retVal;
    }));
  }
  getResort(id: number): Observable<SkiResort> {
    return this.http.get(baseUrl + "/" + id).pipe(map(res => {
      return new SkiResort(res);
    }));
  }
  getTracks(id: number, params?: any): Observable<Track[]> {
    let queryParams = {};

    if(params) {
      queryParams = {
        params: new HttpParams().set("sort", params.sort && params.sort.toString() || '')
      }
    }
    return this.http.get<Array<Track>>(baseUrl + "/" + id + "/tracks", queryParams).pipe(map(res => {
      let retVal = new Array<Track>();
      res.forEach(elem => retVal.push(new Track(elem)));
      return retVal;
    }));
  }

  getWeather(id: number): Observable<Weather[]> {
    return this.http.get<Array<Weather>>(baseUrl + "/" + id + "/weather").pipe(map(res => {
      let retVal = new Array<Weather>();
      res.forEach(elem => retVal.push(new Weather(elem)));
      return retVal;
    }));
  }

  getSkiPassPrice(id: number): Observable<SkiPassPrice[]> {
    return this.http.get<Array<SkiPassPrice>>(baseUrl + "/" + id + "/skipass").pipe(map(res => {
      let retVal = new Array<SkiPassPrice>();
      res.forEach(elem => retVal.push(new SkiPassPrice(elem)));
      return retVal;
    }));
  }

  saveReservation(reservation: Reservation) {
    return this.http.post(baseUrl + "/" + reservation.mountain_id + "/skipass", reservation);
  }
}

