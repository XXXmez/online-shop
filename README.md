# online-shop
![image](https://user-images.githubusercontent.com/57019591/188373913-9be6ec42-a9a8-4081-bb2c-3968e9582381.png)

An online store where products have the following functionality: filtering, sorting, searching, adding to cart

## Application functionality
1. The main page contains all the products of the store as well as filters, a search bar, a sorting field.
2. The product card contains its image, name, quantity of this product in stock, year of entry into the market, color, manufacturer, etc., whether the product is in the basket
Product cards are added dynamically using JavaScript
3. Adding items to the cart
   - by clicking on the product card or on the button on it, the product can be added to the basket or removed. Cards of goods added to the cart look different from the rest
   - the page displays the number of items added to the cart. When trying to add more than 20 items to the cart, a pop-up notification is displayed with the text "Sorry, all slots are full"
4. Sorting
   Only those products that are currently displayed on the page are sorted
   - sorting products by name in ascending and descending order
   - sorting products by the year they entered the market in ascending and descending order
5. Filters in the specified range `from and to`
   - filters by quantity
   - filters by year of release on the market
   - for filtering in the specified range, a range slider with two sliders is used. When moving the sliders, their current value is displayed, a different color of the slider before and after the slider
6. Filters by value
   Selected filters are highlighted with a style.
   - filters by manufacturer
   - color filters
   - filters by size (by quantity)
   - only popular products can be displayed
   - you can filter products by several filters of the same type
7. You can filter products by several filters of different types
   For several filters of different types, only those products that match all the selected filters are displayed.
   For example, you can display only red products. Or the popular white and red products that entered the market in 2010-2020.
   If there are no products matching all the selected filters, the page displays a notice in a human-readable format, for example, "Sorry, no matches found"
8. Reset filters
   - there is a `reset` button to reset filters
   The `reset` button only resets the filters, without affecting the sort order or products added to favorites.
   After using the `reset` button, the filters remain functional
   - when resetting filters with the `reset` button, the range slider sliders move to the edges, the slider values ​​return to their original values, the range slider is painted over with one color
9. Search
   - autocomplete search field disabled (no dropdown list with previous queries)
   - there is a placeholder
   - in the search field there is a cross that allows you to clear the search field
   - if the sequence of letters in the search query does not match the name of the product, a notification is displayed in a human-readable format, for example "Sorry, no matches found"
   - when entering a search query, only those products that contain the letters specified in the search in the specified order remain on the page. It is not necessary for the letters to be at the beginning of the word. The search is case-insensitive
   The search is conducted only among the products that are currently displayed on the page.
   - if you clear the search field, the page displays products that match all selected filters and sorting settings

## Key skills:
- typescript
- Modules in JavaScript
- webpack
- data sorting
- data filtering
- search implementation
