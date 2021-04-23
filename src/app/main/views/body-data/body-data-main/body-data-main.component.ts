import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {BodyDataStoreActions, BodyDataStoreSelectors, RootStoreState} from '@root-store/index';
import {Actions} from 'ngrx-entity-crud';
import {BodyData} from '@models/vo/body-data';
import {Observable, of} from 'rxjs';
import {filter, map, pluck, tap} from 'rxjs/operators';
import {getAttributeValue} from 'codelyzer/util/getAttributeValue';

@Component({
  selector: 'app-body-data-main',
  templateUrl: 'body-data-main.component.html',
  styles: []
})
export class BodyDataMainComponent implements OnInit {

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  actions: Actions<BodyData> = BodyDataStoreActions.actions;
  bodyDatas$: Observable<any>;
  bodyDataOptions: any;

  ngOnInit(): void {
    /*   this.bodyDatas$ = of({
         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
         datasets: [
           {
             label: 'First Dataset',
             data: [65, 59, 80, 81, 56, 55, 40],
             fill: false,
             borderColor: '#42A5F5'
           },
           {
             label: 'Second Dataset',
             data: [28, 48, 40, 19, 86, 27, 90],
             fill: false,
             borderColor: '#FFA726'
           }
         ]
       });*/

    this.bodyDatas$ = this.store$.select(
      BodyDataStoreSelectors.selectAll
    ).pipe(map((values: BodyData[]) => {
        const data = values.map(value => {
            return value.weight;
          }
        );
        const labels = values.map(value => {
            return value.date;
          }
        );
        return {
          labels,
          datasets: [
            {
              label: 'First Dataset',
              data,
              fill: false,
              borderColor: '#42A5F5'
            },
          ]
        };

      }
      )
    );

    this.bodyDataOptions = {
      legend: {
        labels: {
          fontColor: '#495057'
        }
      },
      scales: {
        xAxes: [{
          ticks: {
            fontColor: '#495057'
          }
        }],
        yAxes: [{
          ticks: {
            fontColor: '#495057'
          }
        }]
      }
    };
  }
}
