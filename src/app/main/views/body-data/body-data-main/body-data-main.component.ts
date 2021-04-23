import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {BodyDataStoreActions, RootStoreState} from '@root-store/index';
import {Actions} from 'ngrx-entity-crud';
import {BodyData} from '@models/vo/body-data';

@Component({
  selector: 'app-body-data-main',
  templateUrl: 'body-data-main.component.html',
  styles: []
})
export class BodyDataMainComponent implements OnInit {

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  actions: Actions<BodyData> = BodyDataStoreActions.actions;

  ngOnInit(): void {
  }
}
