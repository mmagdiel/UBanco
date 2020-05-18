# Frontend Layer

The frontend layer is the visible side of the application that's displayed to the user

## Philosophy

- **Inspire:** have an emotional connection with our future client
- **Simple:** require the minimum step to perform an action
- **Performance:** Slow applications make you sleepy &#x1F4A4;

## The Architecture

The frontend layer is divided into 2 projects:

- The design system
- The application

The **reason for this decision** was to _separate_ presentational components, layout, and core styles from business logic in the application. We're building a component library that can be reused by other projects, landing pages, external conversion funnels, and similar campaigns. It's _avoiding mixing_ all of them with the main application

## Good Practice

- Reference components, avoid copying and pasting them. **Dry principle.**
  _Example:_ from a page on applicacion project

```js
import Hello from "../../../desing-system/src/components/hello";
```

- **Compile before** and reference after the _Cascading Style Sheets._
  _Example:_ in the terminal

```sh
  $  npm run styles
```

_In gatsby.browser_ (This reference is done, but it's good to know why exist this file)

```js
import "../desing-system/src/styles.css";
```
