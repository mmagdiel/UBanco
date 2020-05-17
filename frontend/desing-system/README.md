# Design System

This is a Storybook project for content markup, style details, and build presentational components.

## The Architecture

It's divided into 3 layers:

- Components Layer
- Styles Layer
- Stories Layer

### Components Layer

It's divided use the atomic design into:

- **Atoms:** are the basic building blocks of matter
- **Molecules:** are groups of atoms bonded together and are the smallest fundamental units of a compound
- **Organisms:** re groups of molecules joined together to form a relatively complex, distinct section of an interface.
- **Templates:** consist mostly of groups of organisms stitched together to form pages.
- without **Pages:** (why?) This section live in applicacion project

For more details check [Atomic web design](https://bradfrost.com/blog/post/atomic-web-design/)
http://smacss.com/

### Styles Layer

The Bootstrap framework is used as the basis for writing the styles, but it won't be directly rewritten! On the contrary, it will be exported as a module in a smacss architecture, rewriting the local variables of the framework if it's necessary.

It will be exploited that these variables are usually defined as:

```sass
$white:    #fff !default;
```

- **Base:** it's a framework bootstrap and its functions and mixin
- **Module:** is the css components and its derived styles
- **Layout:** is the geometry of the page. a grid system won't be defined, but in excessive cases they will create auxiliary classes
- **Theme:** for rewriting bootstrap variables and creating new variables
- **State:** for animations, media query, pseudo-class, pseudo-elements, and class like this is-valid for input valid in a form (caution this class already exists in bootstrap)

For more details check [Atomic web design](http://smacss.com/)

### Stories Layer

Stories allow you to view the components by running npm run storybook. For the moments, the moments do not have an established order to show the components

## Install and Play

You need install ruby and sass gem in your machine and just run

```sh
    npm install
    npm run storybook
```
