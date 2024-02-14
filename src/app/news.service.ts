import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

apiKey: string = "f620918e4e3748d381291597b20f9fc9";

baseURL: string = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey="

  constructor(private httpClient: HttpClient) { }

  public fetchNewsData(): Promise<any> {
    return lastValueFrom(this.httpClient.get(this.baseURL + this.apiKey));
  }
}
