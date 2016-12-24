# react-auth

## Do next
1. set state into local storage
2. get state from local storage
3. update API to get token from local storage

## Routes
---
  * /
  * /dashboard/accounts
  * /dashboard/accounts/:account-id
  * /dashboard/accounts/:account-id/edit
  * /dashboard/access-logs
  * /dashboard/access-logs?type=signin
  * /dashboard/access-logs?type=signup
  * /dashboard/access-logs?type=signin-fail
  * /dashboard/access-logs?type=viewed-data

## To do list
---
  1. when logged in root/miss path to display dashboard page otherwise landing page
  2. save state to local storage (using lodash throttle)
  3. on bootstrap load state from local storage
  4. on login save state token to local storage and update state
  5. should client use 2 tokens (an access token)
  6. should we implement ACL (access control layer)
  7. we can create a HoC (protected route) where componentDidMount replicates component onEnter

## Future list (performance)
---
  1. Make it a PWA
    * the app shell
    * client side storage
    * service workers
    * installable web apps
  2. What state should be stored in local storage (menu links)
  3. Implement code splitting

## Next Things
* Do your own internet startup
* Put it on GitHub as a public repository so others will see it
* Do the whole cycle from backend database and maybe some NoSQL and a simple front-end
* Add checkout with credit card processing.
* Here’s a bad idea for a startup: Virtual Lemonade
* Create a site where someone can use their phone’s current location to see what lemonade stands are available
* What means you’ll need Global Information System (GIS) enablement and a database of stands
* You’ll need server-side code and then client-side. And then, you’ll need to provide the ability for kids to register their stand with your service
* Maybe give them notifications of a traveller looking for a stand so they can say they are open
* You may not become the next Zuckerberg, but you certainly will pick up a full gamut of marketable skills.
