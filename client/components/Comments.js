import React from 'react';

const Comments = React.createClass({
    renderComment(comment, index) {
        return (
            <div className="comment" key={index}>
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button className="remove-comment" onClick={this.props.removeComment.bind(null, this.props.params.postId, index)}>&times;</button>
                </p>
            </div>
        )
    },

    handleSubmit(e) {
        e.preventDefault();
        const { postId } = this.props.params;
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;
        this.props.addComment(postId, author, comment);
        this.refs.commentForm.reset();
    },
    render() {

        const comments = this.props.comments[this.props.params.postId] || [];

        return (
            <div className="comments">
                {comments.map(this.renderComment)}
                <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
                    <input type="text" ref="author" placeholder="author" />
                    <input type="text" ref="comment" placeholder="comment" />
                    <input type="submit" hidden/>
                </form>
            </div>
        )
    }
});

export default Comments;