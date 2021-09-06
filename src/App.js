import './App.css';

const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src="https://e7.pngegg.com/pngimages/192/97/png-clipart-logo-template-circle-advertising-circle-template-service.png" />
      </header>
      <nav className="nav">
        <div className="links">
          <a href="#">Profile</a>
        </div>
        <div className="links">
          <a href="#">Messages</a>
        </div>
        <div className="links">
          <a href="#">News</a>
        </div>
        <div className="links">
          <a href="#">Music</a>
        </div>
        <div className="links">
          <a href="#">Settings</a>
        </div>
      </nav>
      <div className="content">
        <div className="profile-banner">
          <img src="https://drawpj.com/wp-content/uploads/2016/05/banner-cp-1.jpg" />
        </div>
        <div className="profile-avatar">
          <img src="data:image/jpeg;base64,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" />
        </div>
        <div className="profile-description">
          description
        </div>
        <div className="profile-posts">
          My posts
          <p>post</p>
          <p>post</p>
          <p>post</p>
          <p>post</p>
        </div>
      </div>
    </div>
  );
}

export default App;
