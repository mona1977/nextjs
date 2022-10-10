# Fullstack assessment

> 🤓 This repository contains a technical assessment to be used by candidates for the Backend Engineer position at Honest.

## Objective
Welcome to Honest, and thank you for taking the time to take part in our recruitment process. We're working hard to make
this a transparent, inclusive and positive process that lets everyone be their best (and have fun!) If you have any questions
or concerns please don't hesitate to raise them with your interviewers, who will be more than happy to help 🙂

For more information about our recruitment process please see our public [Honest Engineering Recruitment Process](https://www.notion.so/honestbank/Honest-Engineering-Recruitment-Process-0ddc3af604c14c6eba20399374edfd47)
page.

### Disclaimer

The scenario below is entirely fictitious and any resemblance to characters real or imaginary is purely coincidental. Please
don't sue us!

We will not use your code submission for any purpose other than evaluating your fit for our team. No engineers were
harmed during the creation of this technical assessment ✌️.

## Assessment

Please read through all the details below and solve all the issues and requirements 

### Background

An engineer on our team started work on landing page to collect leads ("lead" is a contact already determined to be a prospective customer in the future). However, they have been unable to complete the project. Your task is to help complete the project, and improve the overall code quality as you see fit.

---

### Requirements

The following are the minimum requirements. Treat this project as if it's your own project and refactor where you see fit.

- As a visitor, when I visit `/` path, I'm presented with a Lead collection form.
- When I enter my details and hit submit, my details are saved, and I'm given a thank you message.
- As an admin, when I visit `/admin` path, I'm presented with a login page
- When I enter my username and password, it takes me to `/leads` page which displays a list of leads we have in the database.
- When calling `/leads` API on the server side, you need to add a basic authentication header using the username and password from the login page.
- Visiting `/leads` path directly will result in an error (API returns error) if a user is not logged in and the user needs to be aware of such.
- You'll need to update the server side so that the `/leads` path is protected using a basic authenticated with `user` as username and `password` as password. Please do this so that we can make more pages private in the future.
