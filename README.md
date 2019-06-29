# MasterTip

## Awesome and easy to use tip calculator!!

Click here to access the deployed link: [MasterTip](https://mastertip.herokuapp.com/) 

## Overview 

MasterTip is a fast and easy to use web application used to calculate tips. 
The application offers an option to split the tip among table members, which is a critical feature especially for cases involving big tips. 
For example, if a final bill presented to the customer is $200, and the customer wants to tip 20%, the tip would amount to $40 which, combined with the bill, would be a big financial strain to the customer. Mastertip's option to split enables people on the table to share that burden which, eventually, becomes manageable. 

Going back to the $40 tip, if, for example, there were 3 people on the table, everyone would contribute $13.33 - a reasonable amount compared to paying the whole tip alone.

#### See this in action

![tip](/asset/images/app-screenshot.png)

## How it works 

MasterTip collects bill value, desired tip percentage, and number of people on a table inputs from the user, and use the data to determine how much tip to pay and final bill value (sum of bill value and tip). 
Users have an option to chose if the tip is to be splitted or not. If the split option is chosen, the application determines how much each person on the table is going to contribute towards the total tip. 

## Technology 

This is a front end application that uses `html` for its web page. Bootstrap library was used to style the page, while `css` was also added to provide more styling option to the `html` content. We used JQuery as a Javascript library to offer dynamic contents and to perform all the calculations. 

We prefered to use Bootstrap and html native form validation instead of Javascript. This is because the html native form / input control offered a flexible way to authenticate or validate entries from users. 

We used functionalities such as `input type` , `step`, and `min` to restrict entries to our requirements. 

Below is a list of teechnologies we used: 

- html
- Bootstrap
- JQuery
- CSS. 

Additionally we added a `package.json` with `harp` as the only dependency simply to be able to easily deploy our static site on Heroku. 
There are so many ways we could have our static application deployed, but we preferred this method because, other than adding a `package.json` with `harp` as the only dependency in our project repository, we did not install any `npm package` for this application to work. 

## Deployment 

This application is deployed on Heroku. To demo or share the application, visit the link below.

[Click here ](https://mastertip.herokuapp.com/) to be directed to the deployed link on Heroku. 

## Future plan

MasterTip is currently an application to use solely on basic tip calculations. 

Our future plan is to add more functionalities to the application so that users can be able to create accounts and access their tipping history. 

#### Stay tuned for future development!!!!

#### send us comments or thoughts on how we can improve this application.