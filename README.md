# Angular 7 Real World implementation 

This project is an Angular implementations of the Thinkster 'Real World' front end 'Conduit' which is a Medium clone.

This implementation is hosted here (https://mattr.z19.web.core.windows.net)

The project is Angular style guide and best practice compliant and, as far as I can see, correctly implements the functionality of the 'Conduit' front end.

Although building Conduit doesn't quite require you use the vast totality of Angular functionality, it does excercise most of the key concepts you need to understand to build a production Angular application including,

1. Reusable components
2. Routing included child routes, route guards 
3. Observables for HTTP and state sharing
4. Authentication (as in basic token auth)
5. Custom directives 
6. Project layout and structure with Angular CLI
7. Some basic unit testing 

## Running and Building the Project 

Project uses the (awesome) Angular CLI for build.

1. Install the Angular CLI globally. 
2. Run npm install to resolve all dependencies. 
3. Run ng serve 
4. In a browser navigate to http://localhost:4200/

## Functionality overview

(copied from the gothinkster GitHub page)

The example application is a social blogging site (i.e. a Medium.com clone) called "Conduit". It uses a custom API for all requests, including authentication. 

**General functionality:**

- Authenticate users via JWT (login/signup pages + logout button on settings page)
- CRU* users (sign up & settings page - no deleting required)
- CRUD Articles
- CR*D Comments on articles (no updating required)
- GET and display paginated lists of articles
- Favorite articles
- Follow other users

**The general page breakdown looks like this:**

- Home page (URL: /#/ )
    - List of tags
    - List of articles pulled from either Feed, Global, or by Tag
    - Pagination for list of articles
- Sign in/Sign up pages (URL: /#/login, /#/register )
    - Uses JWT (store the token in localStorage)
    - Authentication can be easily switched to session/cookie based
- Settings page (URL: /#/settings )
- Editor page to create/edit articles (URL: /#/editor, /#/editor/article-slug-here )
- Article page (URL: /#/article/article-slug-here )
    - Delete article button (only shown to article's author)
    - Render markdown from server client side
    - Comments section at bottom of page
    - Delete comment button (only shown to comment's author)
- Profile page (URL: /#/profile/:username, /#/profile/:username/favorites )
    - Show basic user info
    - List of articles populated from author's created articles or author's favorited articles