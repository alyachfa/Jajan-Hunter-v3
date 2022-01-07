import RestaurantList from '../view/pages/restaurant-list';
import Detail from '../view/pages/detail';
import Favorite from '../view/pages/favorite';

const routes = {
  '/': RestaurantList,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
