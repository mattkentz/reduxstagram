import React from 'react';
import { Link } from 'react-router';

import Photo from './Photo';
import Comments from './Comments';

const Single = React.createClass({
    render() {
        const index = this.props.posts.findIndex((post) => post.code === this.props.params.postId);
        const post = this.props.posts[index];

        return (
            <div className="single-photo">
                <Photo index={index} post={post} {...this.props}></Photo>
                <Comments/>
            </div>
        )

    }
});

export default Single;