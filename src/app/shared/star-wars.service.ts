import { Injectable, Injector } from '@angular/core';
import { OntimizeEEService } from 'ontimize-web-ngx';
import { Observable } from 'rxjs';
import { StarsWarsResponseAdapter } from './star-wars-response-adapter';

@Injectable()
export class StarsWarsService extends OntimizeEEService {

  constructor(protected injector: Injector) {
    super(injector);
  }

  public query(kv?: Object, av?: Array<string>, entity?: string, sqltypes?: Object): Observable<any> {
    const identifier = kv.valueOf()[Object.keys(kv)[0]];
    let url = '';
    if (Object.keys(kv).length === 0) {
      url = 'https://swapi.dev/api/' + entity + '/?format=json';
    } else {
      url = 'https://swapi.dev/api/' + entity + '/' + identifier + '/?format=json';
    }

    return this.doRequest({
      method: 'GET',
      url: url,
      options: {}
    });
  }

  public configureAdapter() {
    this.adapter = this.injector.get(StarsWarsResponseAdapter);
  }
}
