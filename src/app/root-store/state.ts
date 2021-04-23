import {UserStoreState} from '@root-store/user-store';
import {SlideMenuStoreState} from '@root-store/slide-menu-store';

export interface State {
user:UserStoreState.State;
  slide_menu: SlideMenuStoreState.State;
}
