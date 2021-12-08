# Countries of the World

## What is this app?

This is a simple React app designed to display a list of countries from a database along with a series of inputs for sorting and navigating the database.

## Why are you making this app?

I am designing this app to practice interactions between React and Supabase - along with my fellow students in Alchemy Code Lab's September 2021 cohort.

## What are the requirements?

This app needs to:

- [x] Send requests to and retrieve data from a database using `Supabase.js`
  - [x] Make a new file called `countries.js` to retrieve responses from Supabase
  - [x] Set Supabase credentials in local development environment
- [x] In `App.js`:
  - [x] Import and utilize `useEffect()` and `useState()` to manage database calls and update State for `countries`, `continents`, and a `query` search function
  - [x] Loop through `countries` to retrieve and display name and flag
  - [x] Have a `query` function that uses `.filter()` array method to sort countries by name
  - [x] Provides a dropdown list of continents using `.filter()`
- [ ] **Stretch Goals**:
  - [x] Render a `loading` state
  - [ ] Allow users to sort by `name`
