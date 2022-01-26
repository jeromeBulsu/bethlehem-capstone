import * as actionTypes from "../types";

const initialState = {
  error: null,
  title: "",
  description: "",
  image: "",
  imageName: "",
  carousel: [],
  carouselUid: [],
  carouselCount: "",
  add: false,
  delete: false,
  confirmDelete: false,
  selectedCarousel: [],
  selected: [],
  edit: false,
  signout: false,
  addAccount: false,
  addAccountModal: false,
  forgotPassword: false,
  sent: false,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_DELETE:
      return {
        ...state,
        delete: action.payload,
      };
    case actionTypes.SET_SENT:
      return {
        ...state,
        sent: action.payload,
      };
    case actionTypes.SET_FORGOTPASSWORD:
      return {
        ...state,
        forgotPassword: action.payload,
      };
    case actionTypes.SET_ACCOUNT_ADD_MODAL:
      return {
        ...state,
        addAccountModal: action.payload,
      };
    case actionTypes.SET_ACCOUNT_ADD:
      return {
        ...state,
        addAccount: action.payload,
      };
    case actionTypes.SET_CONFIRM_SIGNOUT:
      return {
        ...state,
        signout: action.payload,
      };
    case actionTypes.SET_EDIT:
      return {
        ...state,
        edit: action.payload,
      };
    case actionTypes.SET_ADD:
      return {
        ...state,
        add: action.payload,
      };
    case actionTypes.SET_IMAGE_NAME:
      return {
        ...state,
        imageName: action.payload,
      };
    case actionTypes.SET_SELECTED:
      return {
        ...state,
        selected: action.payload,
      };
    case actionTypes.SET_SELECTED_CAROUSEL:
      return {
        ...state,
        selectedCarousel: action.payload,
      };
    case actionTypes.SET_CONFIRM_DELETE:
      return {
        ...state,
        confirmDelete: action.payload,
      };
    case actionTypes.SET_DESCRIPTION:
      return {
        ...state,
        description: action.payload,
      };
    case actionTypes.SET_CAROUSEL_UID:
      return {
        ...state,
        carouselUid: action.payload,
      };
    case actionTypes.SET_CAROUSEL_COUNT:
      return {
        ...state,
        carouselCount: action.payload,
      };
    case actionTypes.SET_CAROUSEL:
      return {
        ...state,
        carousel: action.payload,
      };
    case actionTypes.SET_TITLE:
      return {
        ...state,
        title: action.payload,
      };
    case actionTypes.SET_IMAGE:
      return {
        ...state,
        image: action.payload,
      };
    case actionTypes.USER_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
