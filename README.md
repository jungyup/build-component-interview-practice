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
