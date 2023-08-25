function SideMenu({ allGenres, handleSelectedGenres }) {
  return (
    <aside className="side-menu">
      <h3 className="side-menu--title">Categories:</h3>
      {allGenres.map((genres) => (
        <button
          key={genres}
          onClick={() => handleSelectedGenres(genres)}
          className="side-menu--genres"
        >
          {genres}
        </button>
      ))}
    </aside>
  );
}

export default SideMenu;
