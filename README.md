# Vending Machine Technical Assessment

_David Dembo - April 2020_

## Instructions

```
npm i
npm run start:server
```

In a separate terminal:
```
npm start
```

App will be served at: [https://localhost:3000/](https://localhost:3000/)

------------------------

## Assessment Overview

This React app is my response to the [Assessment Brief](#Assessment-Brief). No existing code was provided as a starting point. I decided to use `create-react-app` to initialise the repo and reduce the overhead involved with project setup so I could focus on addressing the brief. Some customisation was still required e.g. ESLint and Prettier rules as well as setting up `husky` to automatically lint and format code on each commit.

### Key features and decisions

* 'Change Flavour' view implemented:
  * Selectable product lists
  * Working search functionality
  * Revenue chart (`chart.js`)
* Use `graphql` for data
  * Custom `productsApi` exposed as a data source for resolvers
  * Schema and resolver stitching ready for scaling
  * Express server for handling requests
* Made some lightweight wrappers around `antd` layout components to decouple antd from views as much as possible
  * Sticky layout with header, footer and content areas
* Used CSS modules for component styles, with common styles/design tokens exposed as global variables.

### Known Issues

* Chart not completely implemented (see [comment](#Challenges-encountered) below)
* Horizontal alignment issues when the main content area has a scrollbar. There's no obvious, elegant and cross-browser solution to this. Need to rethink the flexbox approach to layout.
* Poor responsiveness - two-column section breaks on small viewports. Need additional rules for breakpoints.
* Slow interface - managed to alleviate some issues with memoization, but initial renders for product list are still very slow.
* Some minor deviations from the design, mostly to do with the alignment of content across multiple components, and margins/padding/borders for certain elements

### Next steps for this assessment would have been...

* More unit testing.
* Finish implementing the revenue chart according to designs, including making `Net Gain` expandable/collapsible.
* Rethink my approach to layout to address issues with responsiveness and horizontal alignment.
* Additional performance testing and optimisation
  * Pagination and infinite loading for product list
  * Logic in `productsApi` could be optimised
* Further improve styling:
  * Create more design tokens for spacing and other concerns, and use them in CSS modules similar to colours
  * Use `rem` for units & implement helper functions for converting from px
* Have a combined server to handle both `React` and `graphql` requests. Start both with a single command.
* Further refactor to use wrapper components and completely remove `antd` as a dependency from views

### Challenges encountered

* Working with `antd` was challenging (new framework), particularly when it came to customising styles. There's probably smarter ways of implementing layouts/components, which I would learn with more experience. Half the documentation is Chinese-only which also made things more difficult.
* Structure and quality of provided data is poor. This limited my ability to optimise graphql queries and performance in general
  * Could not take advantage of `ApolloClient`'s cache as this introduced a bug with stale `net_gain` values on product selection change, due to the way data object keys are calculated by default.
  * It's a bit of a moot point as a real application would use a less-naive information architecture served from an external source that handles persistence and mutation.
* In hindsight, I could have saved time by using `antd`'s `<List>` component - I only noticed it in the docs after I'd already written my own `<ItemList>`.
* Implementing the chart - I chose `chart.js` and quickly discovered it has a very finnicky and poorly documented API for customising charts. Chart is only partially implemented; I could have finished it perfectly with a little more time, but the performance problems with the list was also slowing down the iteration process.

### Future ideas for improvement

* Additional views and features with routing
* Mutations for changing data
* Restructure of data, look into graphql client state hydration and result caching
* Expand `components`, more wrappers for layout and UI elements. Eventually turn this into a stand-alone package and import as a dependency.
* Implement proper state management and/or consider using a form framework. This would be total overkill for this tech assessment though - also it is difficult to choose a tool without knowing what other screens, features, data, etc will look like.
* Set up SSR, possibly use a framework like `Next.js`
  * Opens up additional potential for performance optimisation e.g. pre-fetching & static generation

------------------------

## Assessment Brief

### Data

- A list of current products information
- A list of product change data

### ToDo

- Page as per design provided
- Selected products panel should show current product items
- On current product click there should be a list of products show from product change data
- This list must contain all products but the one selected on the left
- On each item click show revenue summary information based on `cannibalised` data inside product info.
- Net Gain should expand into a list of all the cannibalised products.

Please feel free to substituted missed data values with dummy numbers (i.e. Vends, Cols)

### Information

You are encouraged to use AntD framework to speed up the process and help with components build. If you are not familiar with AntD, feel free to use the one you have experience with, but AntD is the preferred choice.

To fetch images use `https://cdn.vendinganalytics.com/reyes-ccb/tb/PRODUCT_CODE.png` url.

`VPD == average_sales`

`Revenue = VPD * price`

`Net Gain = Selected Product Revenue - Current ProductRevenue - sum(Cannibalised products revenue)`

All prices are given in cents.
