import { connect } from "react-redux";
import questionsList from "../../components/questions/questionsList";
import { getProductQuestions } from "../../redux/actions/questionsActions/getQuestions";

const mapStateToProps = (state, props)=>({store:state});
const mapDispatchToProps = (dispatch)=>( {
  getProductQuestions: id=> {
    dispatch( getProductQuestions(id) )
  }
} )

const QuestionListContainer = connect(mapStateToProps,mapDispatchToProps)(questionsList);

export default QuestionListContainer;