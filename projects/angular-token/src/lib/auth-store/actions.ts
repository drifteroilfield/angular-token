import { Action } from '@ngrx/store';

export enum ActionTypes {
  SET_CABLE = '[ActionCable] set the instance of cable consumer',
  MAKE_CABLE_PARAMS = '[ActionCable] make a query params string for connection auth',
  CONNECT_CABLE = '[ActionCable] try to create consumer',
  CONNECT_SUCCESS = '[ActionCable] connection returned',
  CONNECT_FAILURE = '[ActionCable] failed to connect'
}

export class SetCable implements Action{
  readonly type = ActionTypes.SET_CABLE;
  constructor(public payload: { cable: any }) {}
}

export class MakeCableParamsString implements Action {
  readonly type = ActionTypes.MAKE_CABLE_PARAMS;
  // constructor(public payload: { queryParams: string }) {}
}

export class ConnectCableAction implements Action {
  readonly type = ActionTypes.CONNECT_CABLE;
}

export class ConnectSuccessAction implements Action {
  readonly type = ActionTypes.CONNECT_SUCCESS;
  constructor(public payload: { connection: any }) {}
}

export class ConnectFailureAction implements Action {
  readonly type = ActionTypes.CONNECT_FAILURE;
  constructor(public payload: { error: string }) {}
}

export type Actions = SetCable | MakeCableParamsString | ConnectCableAction | ConnectSuccessAction | ConnectFailureAction
