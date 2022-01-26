import * as actionTypes from "../types";

export const setImage = (item) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.SET_IMAGE, payload: item });
  } catch (err) {
    dispatch({ type: actionTypes.USER_ERROR, payload: err });
  }
};
export const setTitle = (item) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.SET_TITLE, payload: item });
  } catch (err) {
    dispatch({ type: actionTypes.USER_ERROR, payload: err });
  }
};
export const setDescription = (item) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.SET_DESCRIPTION, payload: item });
  } catch (err) {
    dispatch({ type: actionTypes.USER_ERROR, payload: err });
  }
};

export const setCarousel = (item) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.SET_CAROUSEL, payload: item });
  } catch (err) {
    dispatch({ type: actionTypes.USER_ERROR, payload: err });
  }
};

export const setCarouselCount = (item) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.SET_CAROUSEL_COUNT, payload: item });
  } catch (err) {
    dispatch({ type: actionTypes.USER_ERROR, payload: err });
  }
};
export const setCarouselUid = (item) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.SET_CAROUSEL_UID, payload: item });
  } catch (err) {
    dispatch({ type: actionTypes.USER_ERROR, payload: err });
  }
};

export const setConfirmDelete = (item) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.SET_CONFIRM_DELETE, payload: item });
  } catch (err) {
    dispatch({ type: actionTypes.USER_ERROR, payload: err });
  }
};

export const setDelete = (item) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.SET_DELETE, payload: item });
  } catch (err) {
    dispatch({ type: actionTypes.USER_ERROR, payload: err });
  }
};
export const setSelectedCarousel = (item) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.SET_SELECTED_CAROUSEL, payload: item });
  } catch (err) {
    dispatch({ type: actionTypes.USER_ERROR, payload: err });
  }
};
export const setSelected = (item) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.SET_SELECTED, payload: item });
  } catch (err) {
    dispatch({ type: actionTypes.USER_ERROR, payload: err });
  }
};
export const setImageName = (item) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.SET_IMAGE_NAME, payload: item });
  } catch (err) {
    dispatch({ type: actionTypes.USER_ERROR, payload: err });
  }
};

export const setAdd = (item) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.SET_ADD, payload: item });
  } catch (err) {
    dispatch({ type: actionTypes.USER_ERROR, payload: err });
  }
};
export const setEdit = (item) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.SET_EDIT, payload: item });
  } catch (err) {
    dispatch({ type: actionTypes.USER_ERROR, payload: err });
  }
};
export const setConfirmSignout = (item) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.SET_CONFIRM_SIGNOUT, payload: item });
  } catch (err) {
    dispatch({ type: actionTypes.USER_ERROR, payload: err });
  }
};

export const setAddAccount = (item) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.SET_ACCOUNT_ADD, payload: item });
  } catch (err) {
    dispatch({ type: actionTypes.USER_ERROR, payload: err });
  }
};

export const setAddAccountModal = (item) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.SET_ACCOUNT_ADD_MODAL, payload: item });
  } catch (err) {
    dispatch({ type: actionTypes.USER_ERROR, payload: err });
  }
};

export const setForgotPassword = (item) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.SET_FORGOTPASSWORD, payload: item });
  } catch (err) {
    dispatch({ type: actionTypes.USER_ERROR, payload: err });
  }
};

export const setSent = (item) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.SET_SENT, payload: item });
  } catch (err) {
    dispatch({ type: actionTypes.USER_ERROR, payload: err });
  }
};
