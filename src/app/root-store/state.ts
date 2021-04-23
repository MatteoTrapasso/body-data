import {BodyDataStoreState} from '@root-store/body-data-store';
import {UserStoreState} from '@root-store/user-store';
import {SlideMenuStoreState} from '@root-store/slide-menu-store';

export interface State {
body_data:BodyDataStoreState.State;
user:UserStoreState.State;
  slide_menu: SlideMenuStoreState.State;
}
