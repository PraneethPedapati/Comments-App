import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {
    commentListItem,
    toggleLike,

    deleteCommentListItem,
  } = props
  const {id, userName, comment, isLiked, bgColorClassName} = commentListItem

  const toggleLikeButton = () => {
    toggleLike(id)
  }

  const onDeleteComment = () => {
    deleteCommentListItem(id)
  }

  const likedTextClassName = isLiked ? 'like-text liked-text' : 'like-text'

  const timeElapsed = formatDistanceToNow(new Date())

  return (
    <li className="comment-container">
      <div className="comment-top-section">
        <p className={`user-name-logo ${bgColorClassName}`}>{userName[0]}</p>
        <div className="comment-text-container">
          <div className="user-name-container">
            <p className="user-name">{userName}</p>
            <p className="time">{timeElapsed}</p>
          </div>
          <p className="comment-text">{comment}</p>
        </div>
      </div>
      <div className="comment-bottom-section">
        <button
          type="button"
          className="like-button"
          onClick={toggleLikeButton}
        >
          {isLiked ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
              alt="like"
              className="like-img"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
              alt="like"
              className="like-img"
            />
          )}

          <p className={likedTextClassName}>Like</p>
        </button>
        <button
          type="button"
          className="delete-button"
          onClick={onDeleteComment}
          testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete-img"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
