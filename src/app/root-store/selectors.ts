import {BodyDataStoreSelectors} from '@root-store/body-data-store';
import {UserStoreSelectors} from '@root-store/user-store';
import {createSelectorFactory, defaultMemoize} from '@ngrx/store';

const customMemoizer = (aFn) => defaultMemoize(aFn, (a: any, b: any) => a === b);

export const selectError =
  createSelectorFactory(customMemoizer)(BodyDataStoreSelectors.selectError,UserStoreSelectors.selectError,
    (...args: string[]) => {
      console.log('selectError.args', args);
      return args.join('');
    }
  );

export const selectIsLoading =
  createSelectorFactory(customMemoizer)(BodyDataStoreSelectors.selectIsLoading,UserStoreSelectors.selectIsLoading,
    (...args: boolean[]) => {
      console.log('selectIsLoading.args', args);
      return args.find((value => value));
    }
  );

