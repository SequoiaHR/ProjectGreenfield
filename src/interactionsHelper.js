import axios from "axios";

//Helper Function To Record Interaction Async
let recordInteraction = (element, widget) => {
  let time = new Date();
  axios
    .post(`http://18.224.200.47/interactions/`, {
      element: element,
      widget: widget,
      time: time
    })
    .then(({ status }) => {
      if (status === 201) console.log(`Interaction Posted (${element}, ${widget})`);
      else console.log(`Interaction Not Posted (${element}, ${widget})`);
    })
    .catch(err => {
      console.log("Error Posting Interaction: ", err);
    });
};

export default recordInteraction;

// EXAMPLE OBJECT SENT
// var exampleData = {
//   element: "div.button.related-product",
//   widget: "related-items-comparison",
//   time: "Wed Apr 01 2020 11:05:20 GMT-0400 (Eastern Daylight Time)"
// };
