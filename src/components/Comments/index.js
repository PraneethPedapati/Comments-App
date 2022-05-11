import {Component} from 'react'
import './index.css'
import {v4} from 'uuid'
import CommentItem from '../CommentItem/index'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {commentsList: [], nameValue: '', commentValue: ''}

  getNameInput = event => {
    this.setState({nameValue: event.target.value})
  }

  getCommentInput = event => {
    this.setState({commentValue: event.target.value})
  }

  addingComment = event => {
    event.preventDefault()
    const {commentsList, nameValue, commentValue} = this.state
    const newCommentObj = {
      id: v4(),
      userName: nameValue,
      comment: commentValue,
      isLiked: false,
      bgColorClassName:
        initialContainerBackgroundClassNames[
          Math.ceil(
            Math.random() * (initialContainerBackgroundClassNames.length - 1),
          )
        ],
    }
    const newCommentList = [...commentsList, newCommentObj]

    this.setState({
      commentsList: newCommentList,
      nameValue: '',
      commentValue: '',
    })
  }

  toggleLike = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachCommentItem => {
        if (eachCommentItem.id === id) {
          return {...eachCommentItem, isLiked: !eachCommentItem.isLiked}
        }
        return eachCommentItem
      }),
    }))
  }

  deleteCommentListItem = id => {
    const {commentsList} = this.state
    const filteredCommentList = commentsList.filter(
      eachCommentItem => eachCommentItem.id !== id,
    )
    this.setState({commentsList: [...filteredCommentList]})
  }

  render() {
    const {commentsList, nameValue, commentValue} = this.state

    const commentCount = commentsList.length

    return (
      <div className="bg-container">
        <h1 className="comments-heading">Comments</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
          alt="comments"
          className="comments-img"
        />
        <form className="form-container" onSubmit={this.addingComment}>
          <p className="form-header-text">
            Say something about 4.0 Technologies
          </p>
          <input
            type="text"
            placeholder="Your Name"
            className="name-input"
            onChange={this.getNameInput}
            value={nameValue}
          />
          <textarea
            rows="5"
            cols="25"
            placeholder="Your Comment"
            className="comment-input"
            onChange={this.getCommentInput}
            value={commentValue}
          />
          <button type="submit" className="add-comment-button">
            Add Comment
          </button>
        </form>
        <hr className="break-line" />
        <p className="comments">
          <span className="comments-count">{commentCount}</span> Comments
        </p>
        <ul className="comment-list-container">
          {commentsList.map(eachCommentItem => (
            <CommentItem
              commentListItem={eachCommentItem}
              key={eachCommentItem.id}
              toggleLike={this.toggleLike}
              deleteCommentListItem={this.deleteCommentListItem}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
