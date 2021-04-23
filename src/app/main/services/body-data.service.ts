import {Injectable} from '@angular/core';
import {BodyData} from '@models/vo/body-data';
import {environment} from '../../../environments/environment';
import {BaseCrudService} from 'ngrx-entity-crud';

@Injectable({
	providedIn: 'root'
})
export class BodyDataService extends BaseCrudService<BodyData> {
	public service = environment.webServiceUri + 'body-data';
}
