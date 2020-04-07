import React from 'react';
import ImageCarousel from './sub-Components/imageCarousel/Regular Carousel/carouselMain.jsx';
import BasicDetails from './sub-Components/BasicDetails';
import StyleSelection from './sub-Components/StyleSelection';
import AddToBag from './sub-Components/AddToBag';
import Description from './sub-Components/Description';
import Axios from 'axios';
import ImageModal from './sub-Components/ImageModal.jsx';
import ZoomImage from './sub-Components/imageCarousel/Zoomed Carousel/ZoomImage.jsx';
import ZoomNavigation from './sub-Components/imageCarousel/Zoomed Carousel/ZoomNavigation.jsx';

class OverviewMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      basicDetails: {
        id: undefined,
        category: undefined,
        name: undefined,
        price: undefined
      },
      images: {
        currentImage: undefined,
        otherImagesInStyle: [],
        currentThumbnailRow: undefined
      },
      zoomedImages: {
        currentImage: undefined,
        otherImagesInStyle: [],
        currentThumbnailRow: undefined
      },

      selectedStyle: {
        selectedStyleId: undefined,
        selectedStyleColor: undefined,
        selectedReducedPrice: undefined
      },
      allStyles: [],
      zoom: false,
      cart: {
        cartSize: undefined,
        cartNumber: undefined
      },
      description: {
        slogan: undefined,
        productDescription: undefined,
        features: []
      }
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.changeStyleOnClick = this.changeStyleOnClick.bind(this);
    this.onImageArrowClick = this.onImageArrowClick.bind(this);
    this.onNavArrowClick = this.onNavArrowClick.bind(this);
    this.changeImageOnThumbnailClick = this.changeImageOnThumbnailClick.bind(
      this
    );
    this.zoomImage = this.zoomImage.bind(this);
    this.selectProductSize = this.selectProductSize.bind(this);
    this.selectProductStock = this.selectProductStock.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.onImageModalArrowClick = this.onImageModalArrowClick.bind(this);
    this.onModalNavArrowClick = this.onModalNavArrowClick.bind(this);
    this.changeZoomImageOnCircleClick = this.changeZoomImageOnCircleClick.bind(
      this
    );
  }

  ////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// STYLES CODE /////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////

  //this changes the style when you click it!
  changeStyleOnClick(newStyleId) {
    for (let i = 0; i < this.state.allStyles.length; i++) {
      if (this.state.allStyles[i].style_id === newStyleId) {
        this.setState({
          selectedStyle: {
            selectedStyleId: this.state.allStyles[i].style_id,
            selectedStyleColor: this.state.allStyles[i].name,
            selectedReducedPrice: this.state.allStyles[i].sale_price
          }
        });

        //conditional logic to keep index positioning when changing styles
        var currentStyleIndex;
        if (
          this.state.allStyles[i].photos[this.state.images.currentImage] !==
          undefined
        ) {
          currentStyleIndex = this.state.images.currentImage;
        } else {
          currentStyleIndex = 0;
        }
        this.setState({
          images: {
            currentImage: currentStyleIndex,
            otherImagesInStyle: this.state.allStyles[i].photos,
            currentThumbnailRow: 0,
            maximized: false,
            zoomed: false
          }
        });
        break;
      }
    }
  }

  ////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// REGULAR IMAGE CAROUSEL CODE /////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////

  //this function is attached to the thumbnail images in the image carousel and
  //changes the selected image when those images are clicked
  changeImageOnThumbnailClick(newThumbnailUrl) {
    for (let i = 0; i < this.state.images.otherImagesInStyle.length; i++) {
      if (
        this.state.images.otherImagesInStyle[i].thumbnail_url ===
        newThumbnailUrl
      ) {
        this.setState({
          images: {
            currentImage: i,
            otherImagesInStyle: this.state.images.otherImagesInStyle,
            currentThumbnailRow: this.state.images.currentThumbnailRow
          }
        });
        break;
      }
    }
  }

  //this function changes the displayed image when you click the arrow
  onImageArrowClick(direction) {
    //conditional logic for direction and thumbnail row changing
    if (direction === 'left') {
      let newImageNumber = this.state.images.currentImage - 1;
      let newRowNumber = Math.floor(newImageNumber / 4);

      this.setState({
        images: {
          currentImage: newImageNumber,
          otherImagesInStyle: this.state.images.otherImagesInStyle,
          currentThumbnailRow: newRowNumber
        }
      });
    } else if (direction === 'right') {
      let newImageNumber = this.state.images.currentImage + 1;
      let newRowNumber = Math.floor(newImageNumber / 4);

      this.setState({
        images: {
          currentImage: newImageNumber,
          otherImagesInStyle: this.state.images.otherImagesInStyle,
          currentThumbnailRow: newRowNumber
        }
      });
    }
  }

  //this function zooms the entire image to fill the screen as a modal
  zoomImage() {
    if (this.state.zoom) {
      this.setState({ zoom: false });
    } else if (!this.state.zoom) {
      //creating a duplicate image state for our modal to use
      this.setState({ zoomedImages: this.state.images }, () => {
        this.setState({ zoom: true });
      });
    }
  }

  //this function changes the displayed thumbnail images when you click their arrows
  onNavArrowClick(direction) {
    if (direction === 'left') {
      this.setState({
        images: {
          currentImage: this.state.images.currentImage,
          otherImagesInStyle: this.state.images.otherImagesInStyle,
          currentThumbnailRow: this.state.images.currentThumbnailRow - 1
        }
      });
    } else if (direction === 'right') {
      this.setState({
        images: {
          currentImage: this.state.images.currentImage,
          otherImagesInStyle: this.state.images.otherImagesInStyle,
          currentThumbnailRow: this.state.images.currentThumbnailRow + 1
        }
      });
    }
  }

  ////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// ZOOM IMAGE CAROUSEL CODE /////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////

  //this MODAL function changes the displayed image when you click the arrow
  onImageModalArrowClick(direction) {
    //conditional logic for direction and thumbnail row changing
    if (direction === 'left') {
      let newImageNumber = this.state.zoomedImages.currentImage - 1;
      let newRowNumber = Math.floor(newImageNumber / 4);

      this.setState({
        zoomedImages: {
          currentImage: newImageNumber,
          otherImagesInStyle: this.state.zoomedImages.otherImagesInStyle,
          currentThumbnailRow: newRowNumber
        }
      });
    } else if (direction === 'right') {
      let newImageNumber = this.state.zoomedImages.currentImage + 1;
      let newRowNumber = Math.floor(newImageNumber / 4);

      this.setState({
        zoomedImages: {
          currentImage: newImageNumber,
          otherImagesInStyle: this.state.zoomedImages.otherImagesInStyle,
          currentThumbnailRow: newRowNumber
        }
      });
    }
  }

  //this changes the displayed image when you clicke the modal navigation circles below the image
  changeZoomImageOnCircleClick(newThumbnailUrl) {
    for (
      let i = 0;
      i < this.state.zoomedImages.otherImagesInStyle.length;
      i++
    ) {
      if (
        this.state.zoomedImages.otherImagesInStyle[i].thumbnail_url ===
        newThumbnailUrl
      ) {
        this.setState({
          zoomedImages: {
            currentImage: i,
            otherImagesInStyle: this.state.zoomedImages.otherImagesInStyle,
            currentThumbnailRow: this.state.zoomedImages.currentThumbnailRow
          }
        });
        break;
      }
    }
  }

  //this function changes the displayed circles when you click the modal arrow
  onModalNavArrowClick(direction) {
    if (direction === 'left') {
      this.setState({
        zoomedImages: {
          currentImage: this.state.zoomedImages.currentImage,
          otherImagesInStyle: this.state.zoomedImages.otherImagesInStyle,
          currentThumbnailRow: this.state.zoomedImages.currentThumbnailRow - 1
        }
      });
    } else if (direction === 'right') {
      this.setState({
        zoomedImages: {
          currentImage: this.state.zoomedImages.currentImage,
          otherImagesInStyle: this.state.zoomedImages.otherImagesInStyle,
          currentThumbnailRow: this.state.zoomedImages.currentThumbnailRow + 1
        }
      });
    }
  }

  ////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// DETAILS AND API CODE /////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////

  //get data from API, stores it, and saves it in the internal state
  getData(page_id) {
    Axios.get(`http://18.224.200.47/products/${page_id}`)
      .then(API_details => {
        //input data into store
        this.props.storeProductDetails(API_details.data);

        //input this data into currentView
        this.setState({
          basicDetails: {
            id: API_details.data.id,
            category: API_details.data.category,
            name: API_details.data.name,
            price: API_details.data.default_price
          }
        });
        this.setState({
          description: {
            slogan: API_details.data.slogan,
            productDescription: API_details.data.description,
            features: API_details.data.features
          }
        });
      })
      .catch(err => {
        console.log(err);
      });


    Axios.get(`http://18.224.200.47/products/${page_id}/styles`)

      .then(API_Styles => {
        //input data into store
        this.props.storeProductStyles(API_Styles.data);
        //input this data into currentView
        //set style data in state
        if (API_Styles.data.results.length > 0) {
          this.setState({
            selectedStyle: {
              selectedStyleId: API_Styles.data.results[0].style_id,
              selectedStyleColor: API_Styles.data.results[0].name,
              selectedReducedPrice: API_Styles.data.results[0].sale_price
            }
          });
          this.setState({
            allStyles: API_Styles.data.results
          });
          //set state for images
          this.setState({
            images: {
              currentImage: 0,
              otherImagesInStyle: API_Styles.data.results[0].photos,
              currentThumbnailRow: 0
            }
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  ////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// ADD TO CART CODE /////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////

  //add to cart functions to change state
  //selected size
  selectProductSize(event) {
    this.setState({
      cart: {
        cartSize: event.target.value,
        cartNumber: this.state.cart.cartNumber
      }
    });
  }

  //selected stock
  selectProductStock(event) {
    this.setState({
      cart: {
        cartSize: this.state.cart.cartSize,
        cartNumber: event.target.value
      }
    });
  }

  //submit add to cart on button click
  addToCart() {
    //API request does nothing, so we just have an alert for now
    if (
      this.state.cart.cartNumber !== undefined &&
      this.state.cart.cartSize !== undefined
    ) {
      window.alert(
        `Your order of ${this.state.cart.cartNumber} size ${this.state.cart.cartSize} item(s) has been added to your cart!`
      );
      this.setState({ cart: {} });
    } else {
      window.alert(
        `Please pick a size and number of items before adding to your cart!`
      );
    }
  }

  ////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// LIFE CYCLE CODE /////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////

  //if there's a page change, this refreshes things
  componentDidUpdate(prevProps) {
    if (this.props.paramsId !== prevProps.paramsId) {
      this.getData(this.props.paramsId);
    }
  }

  componentDidMount() {
    //when the component mounts, this gets the API data, sets it as the store, and
    //then organizes it and saves it as the state
    this.getData(this.props.paramsId);
  }

  render() {
    if (this.props.storeState.reviewsMetadata.product_id) {
      return (
        <div className="tile is-ancestor " style={{ marginBottom: '30px' }}>
          <div className="tile is-vertical is-parent">
            <div className="tile is-child">
              <div className="tile is-parent">
                <div className="tile is-child">
                  <ImageCarousel
                    state={this.state.images}
                    onImageArrowClick={this.onImageArrowClick}
                    onNavArrowClick={this.onNavArrowClick}
                    changeImageOnThumbnailClick={
                      this.changeImageOnThumbnailClick
                    }
                    zoomImage={this.zoomImage}
                  />
                </div>
                <div className="tile is-child">
                  <BasicDetails
                    state={this.state}
                    reviews={this.props.storeState.reviewsMetadata}
                  />
                  <StyleSelection
                    state={this.state}
                    changeStyleOnClick={this.changeStyleOnClick}
                  />
                  <AddToBag
                    state={this.state}
                    selectProductSize={this.selectProductSize}
                    selectProductStock={this.selectProductStock}
                    addToCart={this.addToCart}
                  />
                  {this.state.zoom ? (
                    <ImageModal
                      title={this.state.basicDetails.name}
                      onExitClick={this.zoomImage}
                    >
                      <ZoomImage
                        state={this.state.zoomedImages}
                        onImageModalArrowClick={this.onImageModalArrowClick}
                      />
                      <ZoomNavigation
                        state={this.state.zoomedImages}
                        onModalNavArrowClick={this.onModalNavArrowClick}
                        changeZoomImageOnCircleClick={
                          this.changeZoomImageOnCircleClick
                        }
                      />
                    </ImageModal>
                  ) : null}
                </div>
              </div>
            </div>
            <div>
              <Description state={this.state} />
            </div>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default OverviewMain;
