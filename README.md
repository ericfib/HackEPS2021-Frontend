# CartFresh

## Inspiration
This project has been inspired by some online shopping portals like Mercadona or Glovo, but adding a real-time user interaction. This project allows people to go shopping virtually without sync problems or products lost, creating a rich user experience.

## What it does
This projectly is a collaborative shopping web app that syncs with other devices on the same room session. Users experience instant updates whenever a user in the same session changes something. The actual problems that we discovered from actual online services for buying products are:
- **Inefficient:**: Pages are sometimes confusing, unsorted or unorganized.
- **Not user-friendly**: Is commmon to see services that have complex options (advanced) that requires a higher learning curve. The idea is to simplify the user's problems as Amazon does: with only 1 click.
- **Not updated in real time**: In a traditional shopping cart, if one users is buying and adds products the other user can't see them unless he manually refreshes the page. What if one users checks out the shopping cart without syncing the products, well, you end up not buying what you wanted!! 

## How we built it
CartFresh is developed with state of the art technologies. A node.js powered backend and Vue.js frontend. The database uses Heroku DBaaS (Database as a service).

### Backend
When designing the back end, we wanted to have the utmost security while also having the fastest speeds. Google cloud functions allowed for us to use intelligent AI libraries authored by Python while also integrating in a nice seamless front-end fashion. they also allow for intelligent integration with the database. The data is stored in an encrypted format open the GCP storage which prevents hackers to access private images. In order to access the database, one needs a specific key which further prevent security.

### Frontend


## Challenges we ran into
### Problems
When building the AI model for the facial recognition I first used face_recognition library which allowed me to quickly identify nature points on a face to detect the identity. the problem was when integrating this with the GCP function it resulted in an error because the library is not supported which is why I used LBHR from cv2 which is part of their face cascade classifier program. this allowed for a intelligent and accurate facial recognition. As of prelimerary tests the accuracy is upward of 98%.

### Experience and Areas of Expertise
The biggest challenge we had with Loginly was that it was a project outside of our areas of expertise. Some of us had never done front end work before, while for others of us we had little experience with accessing and using databases. Our team also consisted of both experienced coders and those who've just begun their coding journey, so time had to be invested into not just doing the project but learning various concepts from the bottom up.

### Communication and Team Building
Each one of our team members worked from separate parts of the globe, even having a 9 hour time zone difference between some of our team members.

## Accomplishments that we're proud of
Each individual portion of the project took time to complete, but connecting everything into a completed system was the most satisfying accomplishment of our team’s project. Connecting user data from the web page to servers where the facial recognition software did its work to referencing the login page and successfully completing a login was amazing. Additionally, the team elements of working around time zone and experience barriers, and being able to organize our project fluidly was another huge success.

## What we learned
Each one of us came into this hackathon with different skills and backgrounds; similarly, each of us will leave with our own unique experiences and takeaways. In the end, the challenges we faced amounted to an experience where each of us learned new coding skills and how to work together to overcome various barriers. Some of the skills we learned included:

front end development using frameworks like Bootstrap

web development and web requests

database management.

We also learned how to organize ourselves to overcome the time zone differences and designate tasks as well as how to communicate our ideas properly to get as much done as fast as possible.

What's next for Loginly
Loginly is just the framework for a more secure and easy to use login system. Additional functionalities can be added in the future such as:

a failsafe login in case a photo login doesn't work

adding in additional account information when signing up

a design overhaul for the web page

Speeding up the processing time for the facial recognition software

## What's next for CartFresh: a collaboratevily real-time shopping experience