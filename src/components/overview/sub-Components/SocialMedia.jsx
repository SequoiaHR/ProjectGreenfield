import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  PinterestShareButton
} from 'react-share';
import { FacebookIcon, TwitterIcon, PinterestIcon } from 'react-share';
import './componentStyle.css';

const SocialMedia = function(props) {
  //conditional logic to handle async
  if (props.state.images.currentImage !== undefined) {
    //inputs for our social media componenets
    let indexImage = props.state.images.currentImage;
    let imageURL = props.state.images.otherImagesInStyle[indexImage].url;
    let productName = props.state.basicDetails.name;
    let twitterHashtags = [['Sequoia']];
    let webpageUrl = `http://54.152.146.97/product/${props.state.basicDetails.id}`;

    return (
      <div className="flexContainerSocial">
        <div className="socialMediaButtons">
          <FacebookShareButton
            children={' '}
            url={webpageUrl}
            quote={`Check out this ${productName} I found on Sequoia!`}
            hashtag={'#Sequoia'}
          >
            <FacebookIcon size={'20'} />
          </FacebookShareButton>
        </div>
        <div className="socialMediaButtons">
          <TwitterShareButton
            children={' '}
            url={webpageUrl}
            hashtags={twitterHashtags}
            title={`Check out this ${productName} I found on Sequoia!  cnn.com`}
          >
            <TwitterIcon size={'20'} />
          </TwitterShareButton>
        </div>
        <div className="socialMediaButtons">
          <PinterestShareButton
            children={' '}
            url={webpageUrl}
            description={`Check out this ${'tbd'} I found on Sequoia!`}
            media={imageURL}
          >
            <PinterestIcon size={'20'} />
          </PinterestShareButton>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default SocialMedia;
