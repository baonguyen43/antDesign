import profile from 'api/profileApi';
import { put, takeLeading } from 'redux-saga/effects';

import * as ActionTypes from './actionTypes';
import { actionGetMyProfileFailed, actionGetMyProfileSuccess } from './action';

function* getMyProfile() {
  try {
    const response = yield profile.getMyProfile();

    yield put(actionGetMyProfileSuccess(response));
  } catch (error) {
    yield put(actionGetMyProfileFailed());
  }
}

export default function* profileSaga() {
  yield takeLeading(ActionTypes.GET_MY_PROFILE, getMyProfile);
};
