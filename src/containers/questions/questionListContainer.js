import { connect } from "react-redux";
import questionsList from "../../components/questions/questionsList";
import { getProductQuestions } from "../../redux/actions/questionsActions/getQuestions";

//MAPPING THE STATE AND DISPATCH ITEMS IN REDUX STORE TO THE QuestionListContainer COMPONENT
//WHICH IS CREATED IN THE IMAGE OF THE QuestionList COMPONENT

const mapStateToProps = (state, props)=>({store:state});
const mapDispatchToProps = (dispatch)=>( {
  getProductQuestions: id=> {
    dispatch( getProductQuestions(id) )
  }
} )

const QuestionListContainer = connect(mapStateToProps,mapDispatchToProps)(questionsList);

export default QuestionListContainer;