import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, ROOT_EFFECTS_INIT  } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap, tap } from 'rxjs/operators';
import { AngularTokenService } from 'angular-token';
import * as featureActions from './actions';

@Injectable()
export class AuthStoreEffects {
  constructor(
    private authService: AngularTokenService,
    private actions$: Actions,
  ) {}

}
