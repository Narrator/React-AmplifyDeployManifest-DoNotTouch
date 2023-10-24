# React ToDo App with Compute Backend

## What is this repo?

- Comprehensive React Todo SPA using React 18.x
- Frontend app served from the `/frontend` URL path
- Express backend app served from the `/backend` URL path
- Backend meant to be deployed as compute
- Deploy manifest found in `deploy-manifest.json`
- There's a `postbuild` script that copies all built assets to the `.amplify-hosting` folder and conforms to the deployment specification.
- React app forked from [maciekt07/TodoApp](https://github.com/maciekt07/TodoApp)