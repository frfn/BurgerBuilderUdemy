# Testing React Apps!

"Clicking Around" Doesn't Cut It!

-   Testing is complex, and you create and write automated tests!

<br>

## What does that mean right? We'll learn.

This will be an introduction to writing Unit Tests for React Apps built with create-react-app

<br>

## Testing?

-   Writing automated tests
    There is a work flow that a developer must go through
    build app --> test manually and click around --> **UNIT TESTS and AUTOMATIC TESTS** --> ship app to server

By doing tests, we're seeing what breaks our application/see how the application works with the unit tests!!
In doing so, we are writing test that will run automatically and will test a tiny fraction of the application (unit testing!) - Enzyme has a function called shallow()

<br>

### - TEST DRIVEN DEVELOPMENT (TDD)

-   Puts the TESTS first in the application work flow
-   writing tests before any application code
-   By doing so, step by step testing will ensure less failures!
-   Should be thought of at the beginning of component creation

### - Why Test?

-   component should output Hello
-   component should always render personData
-   component should always receive persons prop
-   component should always receive newPerson component when editable prop is received

These are possible tests that MIGHT fail. That's why testing is needed for application building!
Clicking around just does NOT cut it.

By adding new features, these requirements might fail, so test, test, test!!

## Testing Tools + Unit Testing!

### Testing Tools

-   ## Test Runner

    Executes the tests and running the code + providing validation library!
    Does not run in a browser, just emulated in a browser which is cool, create-react-app produces an env where testing is already pre configured

-   ## Jest

    Popular testing tool, will be using!

-   ## Testing Utilites
    -   Simulate the React App
        -   React Test Utils
        -   Enzyme! --> made by the Airbnb & recommended by the React team for testing

## What Not To Test

-   Libraries.. no need to test, they work. They're already tested.
-   Don't test complex connections, simple ones like if the button works!
    then follow the breadcrumbs it leaves, like, does it trigger the method(), does the prop pass into the component?
    only test to see the React Component renders correctly

## What to Test

-   Test isolated units
-   Test conditional outputs
    if TRUE then cool, if FALSE then it will do this.
    Make SURE they happen though
    Faking data is usually how testing goes.

### Dependencies (three packages)

Installing Enzyme for UNIT TESTING
`npm i --save `

-   `enzyme`
-   `react-test-renderer`
-   `enzyme-adapter-react-16`

## Test!

Test a component! Functional, Container, Redux!

### Testing NavItems component

-   Go to Components/NavigationItems/ for test file

### DRAWBACK.

**Lol fixed though, got fucked by installing Jest manually, don't.**
Had to delete `package-lock.json` and `node_modules`, fixed by
'`npm install`' -- installs everything back Thank God.

### Continuing:

Test has passed.

-   Test Suites: is describe()
-   Tests: is it()

take note, you can pass props in,
.setProps( { key: value } ) AWESOME. cool for testing and setting props!!

### MOCK FUNCTIONS: I've seen this from Brook's app

AKA 'spies', it lets you peek on the behavior of a function that is called indirectly by some other code rather than testing the output

-   means, 'replaced'

### ENZYME DOCS, look at that if you want more in depth testings!

-   airbnb.io

-   Full Rendering renders the whole tree
    import { mount } from ...

### Testing for a SPECIFIC NavigationItem /logout:

`<NavigationItem> Logout </NavigationItem>`

### Testing components correctly!

-   just practice and do tests, no matter if they make sense or not
-   testing TAKES experience, and see what crucial things are happening

## Testing Containers

BurgerBuilder.js

-   we get:
    `TypeError`: `this.props.onInitIngredients` is not a function
    because we **shallow render** BurgerBuilder.js, it does _NOT_ contain all the props!

    -   fixed by passing prop in component!

-   ADD '`export`' for the class, there is a default export,
    by adding export, you can export the class without having it connected to the Store, and other HOCs

## Testing Redux

-   We don't want to test super complex chains, no, we want to test the meat of the Redux, those are the reducers.

-   Reducers are SYNCHRONOUS and JUST FUNCTIONS, simple. We get something in, we get something out.
-   reducer really IS just a function... wtf.

-   Oh man, got a crazy amount of LITTLE prop changes, auth.js is fixed for action creator and reducer + new auth.test.js

-   Reducer is the most SIMPLEST to test.

Important Tips!

-   Dive deeper if you want to test more
-   Don't test unnecessary stuff... often it is the most difficult to test!
    ... don't do it.

-   difficult work, no need! Just test! Redundant, not fun, why do it?

Easily tested! This is how it should be!
Does the reducer work?
Does the button give us new prop when clicked?
Do the components update correctly if input changes?
