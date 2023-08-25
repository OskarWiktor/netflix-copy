import FavoriteIcon from "@mui/icons-material/Favorite";

function LikeButton({ onClick, isLiked }) {
  const handleLikeClicked = () => {
    onClick();
  };
  return (
    <button className="like-btn" onClick={handleLikeClicked}>
      <FavoriteIcon className={`like-btn--icon ${isLiked ? "liked" : ""}`} />
    </button>
  );
}

export default LikeButton;
