// Public routes
const HOME = '/';
const ABOUT = '/about';
const SIGN_UP = '/signup';
const LOG_IN = '/login';

// Post routes
const ITEMS = '/items';
const ITEM = '/item/:id';
const ITEM_INSERT = '/item/create';
const ITEM_UPDATE = '/item/update/:id';

//
const ADMIN = "/admin";
const UPDATE = "/admin/update";

const CREATE_EXAM = "/new/exam";
const EDIT_EXAM = "/edit/patient/:patientId/exam/:examId"

export const routes = {
  HOME,
  ABOUT,
  SIGN_UP,
  LOG_IN,
  ITEMS,
  ITEM,
  ITEM_INSERT,
  ITEM_UPDATE,
  //
  ADMIN,
<<<<<<< HEAD
  UPDATE
=======
  CREATE_EXAM,
  EDIT_EXAM
>>>>>>> aa00575ee206b5033f43f22282ffb6be6a9e88e8
};
