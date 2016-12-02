# react-auth

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
