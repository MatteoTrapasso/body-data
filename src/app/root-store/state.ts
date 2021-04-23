import {Auth} from '@models/vo/auth';
import {BodyDataStoreState} from '@root-store/body-data-store';
import {UserStoreState} from '@root-store/user-store';
import {SlideMenuStoreState} from '@root-store/slide-menu-store';

export interface State {
auth:Auth;
body_data:BodyDataStoreState.State;
user:UserStoreState.State;
  slide_menu: SlideMenuStoreState.State;
}
