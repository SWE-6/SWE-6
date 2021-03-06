// Public routes
const HOME = '/';
const ABOUT = '/about';
const SIGN_UP = '/signup';
const LOG_IN = '/login';

// Post routes
const EXAMS = '/exams';
const ADMIN = '/admin';
const ITEM = '/patient/:id';
const PATIENT_EXAM = '/patients/:id';
const ITEM_INSERT = '/item/create';
const ITEM_UPDATE = '/item/update/:id';
const CREATE_EXAM = "/new/exam";
export const routes = {
  HOME,
  ABOUT,
  SIGN_UP,
  LOG_IN,
  EXAMS,
  ADMIN,
  ITEM,
  ITEM_INSERT,
  ITEM_UPDATE,
  //
  PATIENT_EXAM,
  CREATE_EXAM,
};
