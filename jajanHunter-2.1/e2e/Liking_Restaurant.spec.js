/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before((I) => {
    I.amOnPage('/#/favorite');
  });
   
  Scenario('showing empty liked restaurants', (I) => {
    I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
  });

  Scenario('liking one restaurant', async (I) => {
    I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
   
    I.amOnPage('/');
    I.seeElement('.post_item_title a');
    const firstRestaurant = locate('.post_item_title a').first();
    const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
    I.click(firstRestaurant);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.post_item');
    const likedRestaurantTitle = await I.grabTextFrom('.post_item_title');
 
    assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
  });

  Scenario('batal menyukai satu restaurant favorite', async (I) => {
    I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
   
    I.amOnPage('/');
    I.seeElement('.post_item_title a');
    const firstRestaurant = locate('.post_item_title a').first();
    const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
    I.click(firstRestaurant);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.post_item');
    const likedRestaurantTitle = await I.grabTextFrom('.post_item_title');
 
    assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
    
    I.amOnPage('/#/favorite');
    I.seeElement('.post_item_title a');
    const firstFavoriteRestaurant = locate('.post_item_title a').first();
    I.click(firstFavoriteRestaurant);
    I.seeElement('#likeButton');
    I.click('#likeButton');
    I.amOnPage('/#/favorite');
    I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
  });
