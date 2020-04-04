# Project Greenfield

This project is a Mockup of a fashion retail website's product detail page created in Javascript and designed to run in a nodejs enviornment. It is made up of a Single page application that re renders depending on the product data and related meta-data it receives from an external API containing test data. All changes to the page are dynamically rendered based on user input, and any elements which are clicked have their clicks logged to an external API for further analysis.
<br/>
This is accomplished using industry standard tools such as:
- React <br/>
- Axios <br/>
- Express <br/>
- Bulma <br/>

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000/product/1](http://localhost:3000/product/1) to view it in the browser.

In development mode the page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
Uses Puppeteer to simulate page interaction and test modules.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

Once the app has been built it can deployed to a server by installing node, git, and npm:<br />
1.) pull down the repository<br />
2.) run `npm install` in the root directory<br />
3.) run `node server/server.js`<br />
4.) visit via [http://public.ip.address/product/1](http://public.ip.address/product/1) of if running on local host [http://localhost/product/1](http://localhost/product/1)<br />

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
