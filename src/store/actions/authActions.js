import * as actionType from "../actionTypes";

export const signIn = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: actionType.LOGIN_SUCCESS });
      })
      .catch((err) => {
        dispatch({ type: actionType.LOGIN_ERROR, err });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: actionType.SIGNOUT_SUCCESS });
      });
  };
};

export const signUp = (newUser) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then((response) => {
        firestore
          .collection("users")
          .doc(response.user.uid)
          .set({
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            initials: newUser.firstName[0] + newUser.lastName[0],
          });
      })
      .then(() => {
        firebase.auth().signOut();
      })
      .then(() =>
        firebase
          .auth()
          .signInWithEmailAndPassword(newUser.email, newUser.password)
      )
      .then(() => {
        dispatch({ type: actionType.SIGNUP_SUCCESS });
      })
      .catch((err) => {
        dispatch({ type: actionType.SIGNUP_ERROR, err });
      });
  };
};
