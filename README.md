
# CartFresh

## Inspiration

This project has been inspired by some online shopping portals like Mercadona or Glovo, but adding a real-time user interaction. This project allows people to go shopping virtually without sync problems or products lost, creating a rich user experience.

## What it does

FreshCart is a collaborative shopping web app that syncs with other devices on the same room session. Users experience instant updates whenever a user in the same session changes something. The actual problems that we discovered from actual online services for buying products are:

- **Inefficient:**: Pages are sometimes confusing, unsorted, or unorganized.

- **Not user-friendly**: It's common to see services that have complex options (advanced) that require a higher learning curve. The idea is to simplify the user's problems as Amazon does: with only one click.

- **Not updated in real time**: In a traditional shopping cart if one users are buying and add some products, the other user can't see them unless he manually refreshes the page. What if we check out the shopping cart without syncing the products, well, you end up not buying what you wanted!! That's when our project appears:

## How we built it

### Tech

CartFresh is developed with state-of-the-art technologies. A node.js powered backend and Vue.js frontend. The database uses Heroku Postgres DBaaS.

### Backend

Our real time API is developed in node.js, using a model-route-controller-services code structure.

### Frontend

The Vue.js frontend is developed with two simple views, each view has two components.
For styling, we make use of a CSS framework, tailwind.css.  
To consume the API, frontend and backend are connected via a promise-based HTTP client, Axios, directly integrated in Vue.js.

## Challenges we ran into

### Problems

Deciding what project to do was tough, we started another two projects because of our curious minds, not focusing our efforts on finishing one challenge, but the main goal has been accomplished: coding for fun as a team.

### Teammates background

Having different levels of experience and areas of expertise within the team was challenging at first. In the end it created a synergy, people for infra, backend, and frontend.

## Accomplishments that we're proud of

Restarting the project twice and finally having something. Persistence to finish.

## What we learned

- Saving time using DBaaS instead of deploying and managing our own DBs. DBeaver to create tables and populate the content.
- Teamwork, we managed to coordinate our efforts, even if we had to restart our projects.
- Version control, how to delete a commit in git 😁.
- New Javascript Frameworks and their use, with its routing system.

## What's next for CartFresh

A potential idea for our project would be making integration of our service in other popular shopping platforms.