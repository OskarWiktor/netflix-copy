import PlayArrowIcon from "@mui/icons-material/PlayArrow";

function PlayButton({ children, onClick }) {
  return (
    <button className="play-btn">
      <PlayArrowIcon
        className="play-btn--icon"
        style={{color: "white"}}
        onClick={onClick}
      />
      {children && <span className="play-btn--text">{children}</span>}
    </button>
  );
}

export default PlayButton;
