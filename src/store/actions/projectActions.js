import * as actionType from "../actionTypes";

export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const { profile, auth } = getState().firebase;
    const authorId = auth.uid;
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId,
        createdAt: new Date(),
      })
      .then(() => dispatch({ type: actionType.CREATE_PROJECT, project }))
      .catch((err) => {
        dispatch({ type: actionType.CREATE_PROJECT_ERROR, err });
      });
  };
};

export const deleteProject = (id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("projects")
      .doc(id)
      .delete()
      .then(() => dispatch({ type: actionType.DELETE_PROJECT_SUCCESS, id }))
      .catch((err) => {
        dispatch({ type: actionType.CREATE_PROJECT_ERROR, err });
      });
  };
};
