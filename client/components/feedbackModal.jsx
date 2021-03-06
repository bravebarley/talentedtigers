import React from 'react';
import ReactDOM from 'react-dom';
import Rating from './rating.jsx'
import Comments from './comments.jsx'

class FeedbackModal extends React.Component {
  constructor (props) {  
    super(props);
    this.state = {
      rating: null,
      comments: null
    }
    this.changeRatingState = this.changeRatingState.bind(this)
    this.changeCommentState = this.changeCommentState.bind(this)
    this.submitRatingCommentsValue = this.submitRatingCommentsValue.bind(this);
  }

  changeRatingState (value) {
    this.setState({
      rating: value
    })
  }

  changeCommentState (value) {
    this.setState({
      comments: value 
    })
  }

  submitRatingCommentsValue () {
    this.props.submitFeedbackForm(this.state.rating, this.state.comments);
  }

  render() {
    return (
      <form className="feedback_submission_form">
        <div className="modal fade" tabIndex="-1" id="myModal" role="dialog" aria-labelledby="myModalLabel">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h3 className="modal-title" id="myModalLabel">Help Reactor Feedback</h3>
              </div>
              <div className="modal-body">
                <Rating changeRatingState = {this.changeRatingState} rating = {this.state.rating} /> 
                <Comments changeCommentState = {this.changeCommentState} comments = {this.state.comments} />
              </div>
              <div className="modal-footer" id="feedback-footer">
                <button onClick={this.submitRatingCommentsValue } type="button" className="btn btn-primary" data-dismiss="modal">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    )
  }
}

export default FeedbackModal;
