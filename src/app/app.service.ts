import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
  url: any;
  run () {
    console.log('hello service')
  }
  setUrl(url:any) {
    this.url = url;
  }
  getUrl() {
    return this.url;
  }
}