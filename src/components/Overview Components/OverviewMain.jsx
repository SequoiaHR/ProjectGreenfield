import React from 'react';
import ReactDOM from 'react-dom';
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
        price: undefined,
        reducedPrice: undefined
      },
      styles: {
        selectedStyle: undefined,
        allStyles: []
      },
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
  }

  componentDidMount() {
    //when the component mounts, this gets the API data, sets it as the store, and
    //then organizes it and saves it as the state
    let product_id = 3; //filler
    //componentDidMount, grab the API data for the product info
    Axios.get(`http://3.134.102.30/products/${product_id}`)
      .then(productInfo => {
        console.log('set store with this data: ', productInfo);
        //input this data into currentView
        this.setState({
          basicDetails: {
            id: productInfo.id,
            category: productInfo.category,
            name: productInfo.name,
            price: productInfo.default_price,
            reducedPrice: undefined
          }
        });
        this.setState({
          description: {
            slogan: productInfo.slogan,
            productDescription: productInfo.description,
            features: productInfo.features
          }
        });
      })
      .catch(err => {
        console.log(err);
      });

    //componentDidMount, grab the API data for styles
    Axios.get(`http://3.134.102.30/products/${product_id}/styles`)
      .then(API_Styles => {
        console.log('set state with this data: ', API_Styles);
        //input this data into currentView
        this.setState({
          styles: {
            selectedStyle: API_Styles.results[0].style_id,
            allStyles: API_Styles.results
          }
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    <div>
      <ImagesViewer />
      <ProductRating />
      <BasicDetails />
      <StyleSelection />
      <AddToBag />
      <Description />
    </div>;
  }
}

export default overviewMain;
