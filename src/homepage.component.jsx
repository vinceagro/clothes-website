import "./homepage.style.scss";

//1 Creating a funcion - no lifecycle methots needed
const HomePage = () => (
  <div className="homepage">
    <div className="directory-menu">
      <div className="menu-item">
        <div className="content ">
          <h1 className="title">HATS</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>

      <div className="menu-item">
        <div className="content ">
          <h1 className="title">JACKETS</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>

      <div className="menu-item">
        <div className="content ">
          <h1 className="title">SNEAKERS</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content ">
          <h1 className="title">WOMENS</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>

      <div className="menu-item">
        <div className="content ">
          <h1 className="title">MANS</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
