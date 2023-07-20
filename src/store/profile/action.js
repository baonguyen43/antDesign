import * as ActionTypes from './actionTypes';

export const actionSavingMyProfile = (payload) => ({
  type: ActionTypes.SAVING_MY_PROFILE,
  payload, // PARAMETER
});

export const actionGetMyProfile = () => ({
  type: ActionTypes.GET_MY_PROFILE,
});

export const actionGetMyProfileSuccess = (payload) => ({
  type: ActionTypes.GET_MY_PROFILE_SUCCESS,
  payload,
});

export const actionGetMyProfileFailed = (payload) => ({
  type: ActionTypes.GET_MY_PROFILE_FAILED,
  payload,
});
