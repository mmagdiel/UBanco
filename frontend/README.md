## The Architecture

The frontend layer is divided into 2 projects:

- The design system
- The application

The **reason for this decision** was to _separate_ presentational components, layout, and core styles from business logic in the application. We're building a component library that can be reused by other projects, landing pages, external conversion funnels, and similar campaigns. It's _avoiding mixing_ all of them with the main application
