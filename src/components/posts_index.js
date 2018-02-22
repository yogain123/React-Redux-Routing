import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/index.js';
import {ShowPosts} from '../actions/index.js';

import _ from 'lodash';
import {Link} from 'react-router-dom'

class PostIndex extends Component {

  componentDidMount(){   //componentDidMount is a rect life cycle function
    this.props.fetchPosts();
  }

  showPost(id){
    this.props.history.push(`/posts/${id}`);
  }

  renderPosts(){
    const postsArray = _.map(this.props.posts);
    return _.map(this.props.posts).map(post=>{

      return (
         <li className = "listy-group-item" key={post.id} onClick={()=>this.showPost(post.id)}>
           {post.title}
         </li>
      );
    });
  }
  render(){    //render is a reect life cycle function
    console.log(JSON.stringify(_.map(this.props.posts)));
    return(
      <div>

      <div>
        <button type="button" className="btn btn-primary" onClick={()=>{this.props.history.push("/posts/new")}}>Add a post</button>
        <div>{this.props.children}</div>
      </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {posts:state.posts}
}
export default connect(mapStateToProps, {fetchPosts,ShowPosts})(PostIndex);
