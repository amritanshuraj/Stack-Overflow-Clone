import * as API  from '../API' ;

export const askQuestion = (questionData, navigate) => async(dispatch) => {
   try{
      const{data} = await API.postQuestion(questionData);
      dispatch({ type: "POST_QUESTION", payload: data});
      dispatch(fetchAllQuestions());
      navigate("/");
   }catch (error){
      console.log(error);
   }
};

export const fetchAllQuestions = () => async(dispatch) => {
   try {
      const { data } = await API.getAllQuestions();
      dispatch ({ type: "FETCH_ALL_QUESTIONS", payload : data});
   } catch (error) {
       console.log(error);
   }
};

export const deleteQuestion = (id, navigate) => async (dispatch) =>{
   try {
      const {data} = API.deleteQuestion(id)
      dispatch(fetchAllQuestions())
      navigate('/')
   } catch (error) {
      console.log(error)
   }
};

export const voteQuestion = (id, value, userId) => async(dispatch) => {
   try {
      const {data} = await API.voteQuestion(id, value, userId)
      dispatch(fetchAllQuestions())
   } catch (error) {
      console.log(error)
   }
};

export const postAnswer = (answerData) => async(dispatch) => {
   try {
      const {id, noOfAnswers, answerBody, userAnswered, userId} = answerData;
      const { data } = await API.postAnswer(id, noOfAnswers, answerBody, userAnswered, userId);
      dispatch({type: "POST_ANSWER", payload: data});
      dispatch(fetchAllQuestions());
   }catch (error){
      console.log(error);

   }   
};

export const deleteAnswer = (id, answerId, noOfAnswers) => async( dispatch ) => {
   try {
      await API.deleteAnswer(id, answerId, noOfAnswers);
      dispatch(fetchAllQuestions());
   } catch (error) {
      console.log(error);
   }
};


