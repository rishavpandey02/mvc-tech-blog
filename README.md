# Model-View-Controller Tech Blog

## Link/ Images of Webpage
https://secure-falls-67864-605944f5b92f.herokuapp.com/
## Project Overview

This project implements a CMS-style blog site that follows the Model-View-Controller (MVC) paradigm. Users can interact with the site to view, create, comment on, and manage blog posts. The site includes functionalities such as user authentication, and interactive dashboard for managing blog posts, and a commenting system.

## Acceptance Criteria

The following are the acceptance criteria which have guided the development of this project:

1. On visiting the site for the first time, users should see:
   - The homepage with existing blog posts (if any).
   - Navigation links for the homepage and dashboard.
   - The option to log in.

2. The navigation system should work as follows:
   - Clicking on the homepage option takes the user to the homepage.
   - Clicking on other links prompts the user to sign up or log in.

3. Signup and Login:
   - The signup option should allow users to create a username and password.
   - User credentials should be saved upon clicking the sign-up button, logging them into the site.
   - Returning users should be able to log in using their username and password.

4. Once logged in, users should see:
   - Navigation links for the homepage, dashboard, and an option to log out.
   - The ability to view existing blog posts with titles and creation dates on the homepage.

5. Blog Post Interaction:
   - Clicking on a blog post presents the user with detailed information including the post creator’s username and the option to leave a comment.
   - Comments can be saved and will display the comment creator’s username and creation date.

6. Dashboard:
   - Users can view their blog posts and have the option to add a new one.
   - Adding a new blog post prompts users to enter a title and content.
   - Users can update or delete their blog posts.

7. Logging out:
   - Users can log out via the navigation.
   - Being idle on the site for a set time allows viewing posts and comments but requires re-login for adding, updating, or deleting posts.

## Installation

1. Clone the repository.
2. Install the necessary dependencies by running `npm install`.
3. Create your own .env file containing DB_NAME='tech_blog_db' DB_USER='' DB_PASSWORD='',
4. Login to mySQL 
5. Run 'source db/schema.sql', then quit mysql shell
6. Run npm run seed command from terminal to populate database tables
8. Start server with npm start

## Usage

Navigate to the hosted URL or run locally to interact with the application as per the defined acceptance criteria. To create, update, or delete posts and comments, a user needs to sign up or log in.

## Technologies Used

- Node.js
- Express.js
- MySQL
- Sequelize ORM
- Handlebars.js
- CSS/Bootstrap
- JavaScript

## Contribution

To contribute to this project, please fork the repository and submit a pull request.

 
## Questions

For any queries or concerns, please open an issue or contact the project maintainers.

---

Thank you for visiting this project!

