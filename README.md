## Build a Component Interview Practice

This repo is for personal practice for an interview in case to build a component with preferred environment, which was Vue in this repo

### Project setup

Please clone the repo and run npm install\
Then, npm run serve to run the application

### Components List

-   Countdown Timer
    -   Create a countdown timer that allows the user to enter hours, minutes, and seconds.
    -   The detailed information and requirements about the question can be found [here](https://frontendeval.com/questions/countdown-timer)
    -   The component link within this repo is [here](src/components/CountdownTimer.vue)
    -   Implemented features
        -   User can set the time from input field and click start will start the timer
        -   Once timer started user can click pause to pause the timer and click reset to reset the timer
        -   Reset button will be only shown if there is remaining time
        -   When time is up user will get notification if their browser is Safari on Mac, otherwise user will get window alert popup

-   Shopping List
    -   Create Shopping List to search items from public API
    -   Used debounce function to show search results after 500ms after typing
    -   Used store for state management and used compasables to leverages Vue Composition API to encapsulate and reuse stateful logic
    -   The detailed information and requirements about the question can be found [here](https://frontendeval.com/questions/shopping-list)
    -   The component link within this repo is [here](src/components/ShoppoingList.vue)
    -   Implemented features
        -   User can add item by clicking the item from the search results
        -   The added item will be shown below search results
        -   The added item will have its own checkbox and delete button
        -   If user checks the checkbox it will have line-through style so that user can easily know that it is checked
        -   User can uncheck the added item to revert back to original style
        -   If user clicks delete button, then the item will removed from the cart