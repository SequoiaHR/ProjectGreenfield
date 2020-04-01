import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  PinterestShareButton
} from 'react-share';
import { FacebookIcon, TwitterIcon, PinterestIcon } from 'react-share';
import './componentStyle.css';

const SocialMedia = function(props) {
  if (props.state.images.currentImage !== undefined) {
    let indexImage = props.state.images.currentImage;
    let imageURL = props.state.images.otherImagesInStyle[indexImage].url;
    let productName = props.state.basicDetails.name;
    let twitterHashtags = [['Sequoia']];

    return (
      <div className="flexContainerSocial">
        <div className="socialMediaButtons">
          <FacebookShareButton
            children={' '}
            url={'cnn.com'}
            quote={`check out this ${productName} I found on Sequoia!`}
            hashtag={'#Sequoia'}
          >
            <FacebookIcon size={'20'} />
          </FacebookShareButton>
        </div>
        <div className="socialMediaButtons">
          <TwitterShareButton
            children={' '}
            url={'cnn.com'}
            hashtags={twitterHashtags}
            title={`Check out this ${productName} I found on Sequoia!  cnn.com`}
          >
            <TwitterIcon size={'20'} />
          </TwitterShareButton>
        </div>
        <div className="socialMediaButtons">
          <PinterestShareButton
            children={' '}
            url={'cnn.com'}
            description={`check out this ${'tbd'} I found on Sequoia!`}
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
