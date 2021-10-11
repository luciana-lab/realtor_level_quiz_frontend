# Real Estate Agent Level Quiz
This is the frontend page of the application that the user can view and interact with it. Please, also install the [Rails backend](https://github.com/luciana-lab/realtor_level_quiz_backend) and follow the installation instructor.

This quiz was developed considering a real-world case scenario of a real estate marketing company that estate marketing products to real estate agents and wants to know better their agents, suggest and promote products to the right target, and increase sales.\
Usage:
1. The user fills up a form with first name, last name, email, check if it's already a client;
2. Answer all 6 questions;
3. See their result with products suggestions, free content, and a special promo code.

If the user already did the quiz before, after their fill up the form again it'll directly go to their result. On the result page, the user is able to retake the quiz.\
An alert message will pop up if the user tries to get the result without filling out all 6 questions.

**User Perspective**

*Who is the User?*\
American real estate agents that works with residential properties.

*What is their pain point?*\
Real estate agents need to build brand recognition to generate leads and get referrals. Even if they are already well-known in the area, they need to keep creating brand awareness.\
There are a lot of real estate marketing options in the market so it can be a bit overwhelming and hard to decide which product is the best fit at that moment for them to use.

*How do they use our solution to overcome this problem?*\
This application helps the agent know where they are at the moment and which marketing products can help them achieve the next step of their end goal.

**Company Perspective**

*Who is the company?*\
A real estate marketing company focuses on marketing products and services to real estate agents and brokers. The main products are print materials that can be sent all over the country.

*What is the pain point?*\
As real estate housing marketing constantly changing, it's important for the company to keep ahead and up to date about the clients' needs. Know the audience is very important to develop the right products and services.

*How do they use our solution to overcome this problem?*\
This application generates leads to be added to a follow-up system and collects accurate and reliable data information to create action plans and make decisions based on results.

**Flow Diagram**\
*Models*\
Questions, Realtor Levels (Results), Options, and Users.

*Relationship*\
This application have has_many relationships.\
A question has many options.\
A realtor level has many options and has many users.\
A option belongs to a question and elongs to a realtor level.\
A user belogs to a realtor level.

*Attributes*\
A question has a title.\
A realtor level has level, description, free content, slides, and a promo code.\
A option has a content.\
A user has a first name, last name, email, has account (to know if the user is a cold or a warm audience). The first three attributes of the user are required.

Flow diagram [here](https://drive.google.com/file/d/1N-ZeTPwMwMq8o3Aytgb_hThB8fndvzzV/view?usp=sharing)
## Instalation
Fork and clone this repo.

Install the backend.

In the backend terminal, start the server:
```
    $ rails s
```

Open the HTML page:
```
    $ open index.html
```
## Usage

To see the User API data been update go to your local web server.

[Users API](http://localhost:3000/users)
## Contributing

This project is intended to be a safe and welcoming space for collaboration.
Bug reports and pull requests are welcome on GitHub at [Luciana GitHub Profile](https://github.com/luciana-lab).

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Code of Conduct

Everyone interacting in this project's codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/luciana-lab/realtor_level_quiz_backend/blob/main/CODE_OF_CONDUCT.md).

## Extras
Live Project GitHub Page [here](https://luciana-lab.github.io/realtor_level_quiz_frontend/)\
Heroku - Questions API [here](https://real-estate-agent-quiz.herokuapp.com/questions)\
Heroku - Realtor Levels API [here](https://real-estate-agent-quiz.herokuapp.com/realtor_levels)\
Heroku - Users API [here](https://real-estate-agent-quiz.herokuapp.com/users)\
Project Walkthrough Video [here](https://youtu.be/YaqhYMvx9I8)\
Project Walkthrough Video [here](https://youtu.be/YaqhYMvx9I8)\
Project Walkthrough Video [here](https://youtu.be/YaqhYMvx9I8)\
Project Walkthrough Video [here](https://youtu.be/YaqhYMvx9I8)\
Blog Post [here](https://luciana-lab.medium.com/creating-and-updating-user-database-javascript-frontend-rails-backend-178a6656b76d)\
30 minutes video coding [here](https://youtu.be/vrZv5b7a23U)