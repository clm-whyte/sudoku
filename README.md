# Sudoku

## Available Scripts

In the project directory, you can run:  

### `npm start`

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.  
You will also see any lint errors in the console.

### `npm test`

Launches the Jest test runner in the interactive watch mode.

### `npm coverage`

Launches the Jest coverage analysis tool and outputs a table showing current test coverage.

### `npm run storybook`

Launches Storybook on a random open port in dev-mode.

You can develop components and write stories and see the changes in Storybook immediately since it uses Webpack's hot module reloading.

### `npm run cypress:open`

Launches the Cypress interactive runner that allows you to see commands as they execute while also viewing the application under test.

### `npm run cypress:run`

Runs the Cypress spec files in the command line.

### `npm run lint`

Runs Prettier across the entire project, followed by ESLint.

### `npm run build`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.  
Your app is ready to be deployed!

### `npm run build-storybook`

Builds the storybook configured in the Storybook directory into a static web app and place it inside the public directory.  
The Storybook is currently hosted on [Netlify](https://blissful-fermat-2e696f.netlify.app/).

### `npm run chromatic`

Uploads the current Storybook to [Chromatic](https://www.chromatic.com/builds?appId=5eda5393700e8c0022cd3487) where they are compared for regressions.

### `npm run analyze`

Using Source Map Explorer, analyzes JavaScript bundles using the source maps. This helps to learn where code bloat is coming from.

## Workflow

## Links to Project Resources

<!-- markdownlint-disable MD033 -->
|                                                                                   |                                                                        |                                                                                                                  |                                                                                    |
| --------------------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| ![GitHub](https://github.githubassets.com/favicons/favicon.png)                   | [GitHub Repo](https://github.com/clm-whyte/sudoku)                     | <img src="https://storybook.js.org/images/logos/icon-storybook.png" width="32" alt="Storybook">                  | [StoryBook](https://blissful-fermat-2e696f.netlify.app/)                           |
| ![GitHub](https://github.githubassets.com/favicons/favicon.png)                   | [GitHub Project](https://github.com/clm-whyte/sudoku/projects/1)       | <img src="https://www.chromatic.com/static/favicon/favicon-default.png" width="32" alt="Chromatic">              | [Chromatic](https://www.chromatic.com/builds?appId=5eda5393700e8c0022cd3487)       |
| <img src="https://dashboard.cypress.io/img/favicon.ico" width="32" alt="Cypress"> | [Cypress Dashboard](https://dashboard.cypress.io/projects/22ku9k/runs) | <img src="https://www.deque.com/wp-content/uploads/2017/05/Deque_aXe_noType_128px.png" width="32" alt="Cypress"> | [aXe Dashboard](https://axe.deque.com/record/36106e2a-b223-11ea-af2c-7b296542c54a) |
