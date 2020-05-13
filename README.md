# Project Greenfield <br>
## Project Overview
This project is a retail fashion website's product detail page created in Javascript and designed to run in a Chrome V8 enviornment. It is made up of a Single page application that re-renders depending on the product data and related meta-data it receives from an external API containing data on products, associated meta-data, reviews, and Q&A . All changes to the page are dynamically rendered based on user input and API response, and any elements which are clicked have their clicks logged to the API for further analysis.
<br/>
This is accomplished using mainly the following tools:

- [React](https://reactjs.org/) <br/>
- [React Router](https://reacttraining.com/react-router/) <br/>
- [Redux](https://redux.js.org/) <br/>
- [Axios](https://github.com/axios/axios) <br/>
- [Bulma](https://bulma.io/) <br/>

## Page Modules

### Questions and Answers
*Developed by Tristan Deitzer*

The Questions and Answers section allows users to view and contribute questions about the displayed product as well as answers to existing questions. The questions and answers are sorted by the 'helpful' rating given by users (users are limited to one helpful vote by site data stored in the browser's local storage), however an answer from the Seller will be displayed before all others. If a user 'reports' a question it will be removed from the display and flagged for internal review by a site administrator.
<br>
The module displays only the two most prominent questions and their answers by default, allowing the user to expand the display to take up a maximum of 100% of the view port, with all additional questions being displayed uing a scroll bar.
<br>
![expand-functionality](http://g.recordit.co/QE1PgEXPWQ.gif)
<br>
Users can add a question or an answer about a product through a modal popup, the information inputted for both questions and answers is validated using a combination of [regex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) and functional checks to make sure required feilds are utilized. 
<br>
![add-question-answer-functionality](http://g.recordit.co/SQtKuu208b.gif)
<br>
Users can search existing questions for desired terms using a the live search bar at the top of the module, which will narrow results dynamically as the user inputs charcters
<br>
![live-search-functionality](http://g.recordit.co/zfrnXyVjbr.gif)

### Related Products
*Developed by Dan Prevoznik*

The Related Products section displays products with similar characteristics to the currently selected product, as provided by the team's external API.
![arrow-functionality](http://g.recordit.co/PJU6hDV5IY.gif)

Upon clicking the Star icon within each Product Card, a modal is displayed comparing the current product and selected related product's characteristics. This allows for easy product comparison. 
![compare-functionality](http://g.recordit.co/Avhh4Hh9Om.gif)

### Your Outfit
*Developed by Dan Prevoznik*

The Your Outfit section allows users to keep track of their favorite articles of clothing! The user has the ability to add items to their persistent Outfit by clicking the Add card. They can remove items by clicking the "X" on each card.
![add-to-outfit-functionality](http://g.recordit.co/d55Bt6W8Ea.gif)

<br><br><br>
## Package.json Details

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000/product/1](http://localhost:3000/product/1) to view it in the browser.

In development mode the page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.<br />
Uses Puppeteer to simulate page interaction and test modules.

#### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

Once the app has been built it can deployed to a server by installing node, git, and npm:<br />
1.) pull down the repository<br />
2.) run `npm install` in the root directory<br />
3.) run `node server/server.js`<br />
4.) visit via [http://public.ip.address/product/1](http://public.ip.address/product/1) or if running on local host [http://localhost/product/1](http://localhost/product/1)<br />

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
