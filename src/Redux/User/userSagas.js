import { takeLatest, put, all, call } from "redux-saga/effects";
import userActionTypes from "./userTypes";
import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  signUpSuccess,
  signUpFailure,
} from "./userActions";
import {
  googleProvider,
  auth,
  createUserProfileDocument,
  getCurrentUser,
} from "../../Firebase/Firebase";

//!signInWithGoogle and signInWithEmail have almost the same code, we can reduce
export function* getSnapshotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    );
    //additionalData only for signUp; if undefined, will pass nothing
    //same as app.js: const userRef = await createUserProfileDocument(userAuth); //get back userRef

    const userSnapshot = yield userRef.get();

    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })); //exactly like we had done in app.js
    //put() puts things back into our regular redux flow
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

//!GOOGLE
export function* signInWithGoogle() {
  try {
    //destructure our user object from our userRef
    const { user } = yield auth.signInWithPopup(googleProvider);
    //!up function
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

//!EMAIL
export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    //!same function as google one
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

//!CHECK USER SESSION
export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    //if userAuth is null; the user never signed in, there is no session
    if (!userAuth) return;
    //if there is value, do the same as google/email sign ins
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

//!SIGN OUT
export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* onSignOut() {
  yield takeLatest(userActionTypes.SIGN_OUT_START, signOut);
}

//!SIGN UP
//((payload = user data distructure))
export function* signUp({ payload: { displayName, email, password } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password); //we pass our emai and pw
    //yield createUserProfileDocument({user, additionalData:{displayName}});
    yield put(signUpSuccess({ user, additionalData: { displayName } }));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

export function* onSignUpStart() {
  yield takeLatest(userActionTypes.SIGN_UP_START, signUp);
}

export function* signInAfterSignUp({ payload: { user, additionalData } }) {
  yield getSnapshotFromUserAuth(user, additionalData);
}

export function* onSignUpSuccess() {
  yield takeLatest(userActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}

///////////////////////////////////////////////
export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOut),
    call(onSignUpStart),
    call(onSignUpSuccess),
  ]);
}
