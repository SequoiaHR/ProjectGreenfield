const calculateRating = function(metadata) {
  if (!metadata.ratings) {
    return null;
  }

  let totalStars = 0;
  let reviewers = 0;

  for (let rating of Object.keys(metadata.ratings)) {
    totalStars += Number(rating) * metadata.ratings[rating]; 
    reviewers += metadata.ratings[rating];
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