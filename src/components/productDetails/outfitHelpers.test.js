import { addToOutfit, removeFromOutfit } from "./outfitHelpers.js";

let localOutfit;
beforeEach(() => {
  localOutfit = JSON.parse(window.localStorage.getItem("outfit"));
});
afterEach(() => {
  window.localStorage.setItem("outfit", JSON.stringify(localOutfit));
});

describe("Get and Set Outfit", () => {
  test("Should add IDs to a user's outfit", () => {
    let id1 = 120;
    addToOutfit(id1);
    let localOutfit = JSON.parse(window.localStorage.getItem("outfit"));
    expect(localOutfit.hasOwnProperty(120)).toBe(true);

    let id2 = 34;
    addToOutfit(id2);
    let localOutfit2 = JSON.parse(window.localStorage.getItem("outfit"));
    expect(localOutfit2.hasOwnProperty(34)).toBe(true);
  });
  test("Should remove IDs from a user's outfit", () => {
    let id1 = 120;
    let id2 = 34;
    addToOutfit(id1);
    addToOutfit(id2);
    removeFromOutfit(id1);
    let localOutfit = JSON.parse(window.localStorage.getItem("outfit"));
    expect(localOutfit.hasOwnProperty(id1)).toBe(false);
  });
});
