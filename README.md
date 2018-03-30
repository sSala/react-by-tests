# React by tests

[![Build Status](https://api.travis-ci.org/sSala/react-by-tests.svg?branch=master)](https://travis-ci.org/sSala/react-by-tests)

This project is created with [create-react-app](https://github.com/facebook/create-react-app)

* [React] - A JavaScript library for building user interfaces
* [Jest] – Delightful JavaScript Testing
* [Enzyme] – Enzyme is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components' output.

Works on macOS, Windows, and Linux.<br>
If something doesn’t work, please [file an issue](https://github.com/sSala/react-by-tests/issues/new).

### Course purpose

Learn [React] using the tests.
We can do this by reproducing [this](https://marcomontalbano.github.io/an-introduction-to-frontend-for-beginners/) with es6 and [React] using the [TDD] methodology.<br>
I think that this is a good way to learn new technologies.

### Test-driven development cycle

1. #####Add a test
    We already add all test we need to implements the project.<br>
    When you are more confident you can edit and add new tests
2. #####Run all tests and see if the new test fails
    The tests should fail for the expected reason.
3. #####Write the code
    The next step is to write some code that causes the test to pass. The new code written at this stage is not perfect and may, for example, pass the test in an inelegant way. That is acceptable because it will be improved and honed in Step 5.<br>
    At this point, the only purpose of the written code is to pass the test. The programmer must not write code that is beyond the functionality that the test checks.
4. #####Run tests
    If all test cases now pass, the programmer can be confident that the new code meets the test requirements, and does not break or degrade any existing features. If they do not, the new code must be adjusted until they do.
5. #####Refactor code
    The growing code base must be cleaned up regularly during test-driven development. New code can be moved from where it was convenient for passing a test to where it more logically belongs.
    * Duplication must be removed
    * Object, class, variable and method names should clearly represent their current purpose and use, as extra functionality is added
    * As features are added, method bodies can get longer and other objects larger. They benefit from being split and their parts carefully named to improve readability and maintainability
    * Inheritance hierarchies may be rearranged to be more logical and helpful, and perhaps to benefit from recognized design patterns

#####Repeat

## Quick Overview

```sh
npm start
```

Then open [http://localhost:3000/](http://localhost:3000/) to see your app.<br>
When you’re ready to deploy to production, create a minified bundle with `npm run build`.


### Get Started Immediately

You **don’t** need to install or configure tools like Webpack or Babel.<br>
They are preconfigured and hidden so that you can focus on the code.

Just create a project, and you’re good to go.

## Creating an App

**You’ll need to have Node >= 9.8.0 on your local development machine** You can use [nvm] (macOS/Linux) or [nvm-windows] to easily switch Node versions between different projects.

Inside the newly created project, you can run some built-in commands:

### `npm install` or `yarn install`

Install all packages.

### `npm start` or `yarn start`

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will automatically reload if you make changes to the code.<br>
You will see the build errors and lint warnings in the console.

### `npm test` or `yarn test`

Runs the test watcher in an interactive mode.<br>
By default, runs tests related to files changed since the last commit.

### `npm run build` or `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
By default, it also includes a service worker so that your app loads from local cache on future visits.

We are ready so let's start learning!!!

-------------------------------
[React]: https://reactjs.org/
[TDD]: https://en.wikipedia.org/wiki/Test-driven_development
[Jest]: https://facebook.github.io/jest/
[Enzyme]: http://airbnb.io/enzyme/
[nvm]: https://github.com/creationix/nvm#installation
[nvm-windows]: https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows
