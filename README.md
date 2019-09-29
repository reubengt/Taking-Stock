# TAKING STOCK - Week 5 Project - Founders and Coders Summer 2019 cohort

:guitar: **reuben was here**

## Project

Create a web app that includes some form of user input and provides users with content from an API that is regularly updated - e.g. the same user input submitted at different times could result in different content being retrieved. 💁‍

A good example could be a news app but feel free to be creative!

The key difference between this project and your API week project is that you will be making your API calls from the back-end and testing your server.

## Our API:

https://blog.quandl.com/api-for-commodity-data
API holding historical commodity 

## Goals:
- [x] Use at least 1 API
- [x] Make your API calls from the back-end using the Request module (or one you build yourself)
- [x] Your server should contain a minimum of 2 routes
- [x] We expect to see lots of tests! Modularise your code and test all your pure functions. Write tests for as much of your back-end and front-end logic as you can. We don't expect tests on the DOM.
- [x] Test your server routes by injecting fake HTTP requests using Supertest (including testing for 404's). Note - you are not required to test any server route that makes an API call, as this will make the test impure (a test that depends on an external factor is not reliable)
- [x] Host your project on Heroku, see resources
- [x] Use module.exports and require to break a single large server file into smaller modules.
- [x] Consider a good server file structure based on what we have discussed over the week.
- [x] Employ continuous integration on your project with Travis or a similar tool. (If you decide to use Travis, we strongly recommend that you host this project in your own repo rather than in your cohort's FAC repository to avoid all builds getting queued together)
- [ ] Use CodeCov or a similar tool to report and track test coverage.
- [x]Include Error Handling. For example: if a user attempts to make a request to a non-existent route to your server (404 - as mentioned above), provide the user with a custom response. if there is a programmer error on your server (e.g. a handler function does not act as intended), provide the user with a custom response (500 status code). Include a user input field on your web app and include server-side validation to protect your server from potentially malicious user input.
- [ ] Display continuous integration and code coverage badges on your project README.

## Stretch goals:
- [ ] Research and use Nock to mock the response of external API calls in your tests, and write tests for server routes that make API calls.
- [ ] Create a route and functionality for a POST request.


# TO DO 

- [x]Start Repo 
- [x]Set up Travis 
- [x]Set up file structure 
- [x]Write server 
- [x]TESTS
- [x]Deploy to Heroku 
- [x]set up router
- [x]set up handler 
- [x]Write API call 
- [x]Send back price for today's date to front-end 
- [x]Basic CSS styling 

Before Thursday lunch:
- [x] Decide on our commodities
- [x] Set up backend API call
- [x] Filter data ready to go to front end 

After lunch

FRONT END
- [x] Basic HTML structure 
- [x] dropdown list to select commodity
- [x] event listener on a submit/search button
- [x] XMLhttp call to backend with search query (format it like '/search?q=commodityname')
- [x] Render results to DOM

BACKEND 

big object.dataset_data.data = array which has nested arrays for different dates inside it 

- [x] decide what data to send back to front end
  yesterday's prices
- [x] filter through response object(WRITE A SEPARATE FUNCTION which returns the filtered object)
- [x] categories of commodities available


# Stretch goals 

- [ ]Display data for a few historical points 
- [ ]Graphics/SVGs
- [ ] Convert currency 
