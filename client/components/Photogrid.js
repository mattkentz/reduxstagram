import React from 'react';
import { Link } from 'react-router';

import Photo from './Photo';

const Photogrid = React.createClass({
    render() {
        return (
            <div className="photo-grid">
                {this.props.posts.map((post, index) => {
                    return <Photo {...this.props} key={index} index={index} post={post}/>
                })}
            </div>
        )

    }
});

export default Photogrid;