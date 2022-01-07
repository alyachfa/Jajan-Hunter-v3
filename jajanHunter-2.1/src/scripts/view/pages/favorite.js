import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    const hero = document.querySelector('.hero');
    hero.style.display = 'none';
    return `
            <h2 class="content__heading">Your Favorite Restaurant</h2> <hr>
            <div id="restaurants-favorite" class="restaurants-favorite">
      
            </div>
     `;
  },

  async afterRender() {
    const restaurantsFavorite = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsFavoriteContainer = document.querySelector('#restaurants-favorite');

    restaurantsFavorite.forEach((restaurant) => {
      restaurantsFavoriteContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;
