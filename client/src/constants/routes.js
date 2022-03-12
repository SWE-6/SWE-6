// Public routes
const HOME = '/';
const ABOUT = '/about';
const SIGN_UP = '/signup';
const LOG_IN = '/login';

// Post routes
const ITEMS = '/patients';
const ITEM = '/patient/:id';
const EXAM_ID = '/exam/:id';
const ITEM_INSERT = '/patient/create';
const ITEM_UPDATE = '/patient/update/:id';

export const routes = {
  HOME,
  ABOUT,
  SIGN_UP,
  LOG_IN,
  ITEMS,
  ITEM,
  ITEM_INSERT,
  ITEM_UPDATE,
};
