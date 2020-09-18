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
    return 'https://api.github.com/users?since=17&page=100&per_page=10';
    
  }
}