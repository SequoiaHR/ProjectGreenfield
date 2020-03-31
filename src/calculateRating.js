
// given one reviews metadata object, return the product's average rating
// rounded to one decimal place.

const calculateRating = function(metadata) {
  if (!metadata.ratings) {
    return null;
  }

  let totalStars = 0;
  let reviewers = 0;

  for (let rating of Object.keys(metadata.ratings)) {
    totalStars += Number(rating) * metadata.ratings[rating]; // star rating times users who chose it
    reviewers += metadata.ratings[rating]; // number of users choosing that rating
  }

  let overallRating;
  if (reviewers === 0) {
    overallRating = 0;
  } else {
    overallRating = (totalStars / reviewers).toFixed(1);
  }

  return overallRating;
}

export default calculateRating;