import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

class CommentBox extends Component {
    state = { comment: '' };

    handleSubmit = event => {
        const { saveComment } = this.props;
        event.preventDefault();
        saveComment(this.state.comment);
        this.setState({ comment: ''});
    }

    render() {
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
                <h4>Add a Comment</h4>
                    <textarea value={this.state.comment} onChange={(e) => this.setState({comment: e.target.value})}/>
                <div>
                    <button>Submit Comment</button>    
                </div>    
            </form>
            <button className="fetch-comments" onClick={() =>  this.props.fetchComments()}>Fetch Comments</button>   
            </div>
        );
    }
}

export default connect(null, actions)(CommentBox);