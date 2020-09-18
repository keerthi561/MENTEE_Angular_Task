import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
  url: any;
  run () {
    console.log('hello service')
  }
  setUrl(url:any) {
    this.url = url;
    console.log('set rl')
  }
  getUrl() {
    return this.url;
    console.log('get rl')
  }
}