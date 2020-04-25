import axios from "axios";

let recordInteraction = (element, widget) => {
  let time = new Date();
  axios
    .post(`http://18.224.200.47/interactions/`, {
      element: element,
      widget: widget,
      time: time
    })
    .catch(err => {
      console.log("Error Posting Interaction: ", err);
    });
};

export default recordInteraction;
