import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
  url: string;
  run () {
    console.log('hello service')
  }
  setUrl(url:string) {
    this.url = url;
    console.log('set rl')
  }
  getUrl() {
    console.log('get rl')
    return this.url;
    
  }
}