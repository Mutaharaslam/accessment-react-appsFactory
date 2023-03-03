# AF JS Recruiting

### Info

- swagger: `https://afrecruitingfront-webapi-prod.azurewebsites.net/swagger/index.html`

### Tasks

- change background color to `#8db5b1`

- add a page headline above the search form

  - the text should be: `Hotel Search`
  - should have a font size of 2rem and be bold
  - should have a text color of white
  - should have some spacing: 3rem on top, 2rem on bottom

- display the rating of the hotel with stars

  - should be on the right of the hotel name
  - the property `rating` is inside the hotel object
  - use the ascii star symbol: `★`
  - example for 3 stars: `★★★`

- extend hotel rating stars to display empty stars

  - use the ascii star symbol: ★, ☆
  - example for 3 stars: ★★★☆☆

- automatically load first results on page load

  - load the hotels with the initial form values

- while waiting for hotel results:

  - disable "Search" button
  - change "Search" button text to "Loading.."

- add hover effect to "Search" button

  - make button 10% bigger
  - animate this hover effect for 300ms

- make hotel list responsive

  - one column mobile
  - two columns tablet (>= 900px)
  - three columns desktop (>= 1200px)

- fix minimal rating bug

- add a header to every request being made to the api

  - key: X_LANGUAGE
  - value: should be the default browser locale
