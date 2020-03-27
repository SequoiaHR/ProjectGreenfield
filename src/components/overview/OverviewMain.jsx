import React from 'react';
import ImagesViewer from './sub-Components/ImagesViewer';
import ProductRating from './sub-Components/ProductRating';
import BasicDetails from './sub-Components/BasicDetails';
import StyleSelection from './sub-Components/StyleSelection';
import AddToBag from './sub-Components/AddToBag';
import Description from './sub-Components/Description';
import Axios from 'axios';

class overviewMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: {
        currentImage: undefined,
        thumbnailImages: [],
        maximized: false,
        zoomed: false
      },
      starRating: undefined,
      basicDetails: {
        id: undefined,
        category: undefined,
        name: undefined,
        price: undefined
      },
      selectedStyle: {
        selectedStyleId: undefined,
        selectedStyleColor: undefined,
        selectedReducedPrice: undefined
      },
      allStyles: [],
      cart: {
        cartSize: undefined,
        cartNumber: undefined,
        favorited: undefined
      },
      description: {
        slogan: undefined,
        productDescription: undefined,
        features: []
      }
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.changeStyleOnClick = this.changeStyleOnClick.bind(this);
  }

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
        this.setState({
          images: {
            currentImage: this.state.allStyles[i].photos[0],
            thumbnailImages: this.state.allStyles[i].photos,
            maximized: false,
            zoomed: false
          }
        });
        break;
      }
    }
  }

  componentDidMount() {
    //when the component mounts, this gets the API data, sets it as the store, and
    //then organizes it and saves it as the state
    let product_id = 3; //filler
    //componentDidMount, grab the API data for the product info
    Axios.get(`http://3.134.102.30/products/${product_id}`)
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

    //componentDidMount, grab the API data for styles
    Axios.get(`http://3.134.102.30/products/${product_id}/styles`)
      .then(API_Styles => {
        //input data into store
        this.props.storeProductStyles(API_Styles.data);
        //input this data into currentView
        //set style data in state
        console.log('API_Styles', API_Styles);
        this.setState({
          selectedStyle: {
            selectedStyleId: API_Styles.data.results[2].style_id,
            selectedStyleColor: API_Styles.data.results[2].name,
            selectedReducedPrice: API_Styles.data.results[2].sale_price
          }
        });
        this.setState({
          allStyles: API_Styles.data.results
        });
        //set state for images
        this.setState({
          images: {
            currentImage: API_Styles.data.results[2].photos[0],
            thumbnailImages: API_Styles.data.results[2].photos
          }
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <div class="level">
          <p class="level-left">
            <ImagesViewer state={this.state} />
          </p>
          <p class="level-right">
            <ProductRating state={this.state} />
            <BasicDetails state={this.state} />
            <StyleSelection
              state={this.state}
              changeStyleOnClick={this.changeStyleOnClick}
            />
            <AddToBag state={this.state} />
          </p>
        </div>
        <Description state={this.state} />
      </div>
    );
  }
}

export default overviewMain;
