import React from 'react';
import {connect} from 'react-redux';
import {deletePost} from '../actions/index.js';
import {Link} from 'react-router-dom';


class PostsShow extends React.Component{
  constructor(props){
    super(props)
  }

  delete(id){
    console.log("inside delete "+id);
    this.props.deletePost(id,() => {

      this.props.history.push("/");

    });
  }
  render(){
    console.log("holaaaa "+JSON.stringify(this.props.post));
    const id = this.props.match.params.id;
    if(!this.props.post){
      console.log(this.props.post);
      return <div>Loading....</div>
    }
    const mainPost= this.props.post[id];
    return(
      <div>
        <h3>Title</h3>
        <p>{mainPost.title}</p><hr/>

        <h3>Catogery</h3>
        <p>{mainPost.categories}</p><hr/>

        <h3>Content</h3>
        <p>{mainPost.content}</p><hr/>


        <button type="button" onClick={()=>this.delete(id)} className="btn btn-primary">Delete</button>
        <Link to="/" type="button" className="btn btn-primary">Back</Link>

      </div>

    );
  }
}
function mapStateToProps(state, ownProps){
  console.log("inside "+JSON.stringify(state.posts));

  return{
    post : state.posts
  };

}
export default connect(mapStateToProps,{ deletePost })(PostsShow);
