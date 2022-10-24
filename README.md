# Rundit backend assignment template

As part of our application process, we'd like to see what you can produce by giving you a small assignment. The aim is to identify the level of code you can produce and hopefully it should take you no more than a few hours to complete the assignment, but any extra polish or features you might want to put in will not go unnoticed.

## Assignment
To give a taste of what Rundit is about, you are going to build a small feature that is similar to what Rundit does. The finished app should expose two endpoints that provide the following two functionalities.

The first API endpoint should provide the possibility to bulk insert company-specific monthly key performance indictor values. Simply put, these are values a company reports monthly (e.g. revenue for January 2022 was 50.000 dollars, February 65.000 dollars etc.). For the purposes of this assignment, we can assume that all the inputted values are currency-based and the company can be referred only by its name. No need to build a separate company entity and everything that goes with it.

The second API endpoint should return the aggregated data to be used in charts. Given a from and to value, it should provide the totals and averages of the every portfolio metric for each month within the given time period. For example I should be able to retrieve the revenue averages and totals for revenue from January 2020 to December 2020.

You are free to design the data structures and API endpoints as you see fit. If you don’t agree with the two endpoint solution, you can deviate from that too.

## Things to consider
- Consider how you structure and organize your code and the project.
- One of the most difficult things in programming is naming things, we want to see some well-named functions and objects. Keep it consistent.
- Testing is highly appreciated.
- It’s ok not to perfect everything. If you feel like there is something you did that should be done better but it would require too much work, you can also comment that in the source code.

If any questions arise, please do not hesitate to contact us. Happy coding!

## Project setup
TODO
