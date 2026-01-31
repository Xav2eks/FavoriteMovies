import Header from "../components/Header";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <Header />
      <div className="home-content-container">
        <p>
          Welcome to your personal film archive. This is the place to gather,
          celebrate, and rediscover every movie that has ever moved you. Stop
          trying to remember that perfect film you saw years ago, or scrambling
          for a recommendation. Here, you can build your own digital collection,
          rate each experience, and craft the definitive list of your all-time
          favorites. It’s more than a list—it’s the story of your journey
          through cinema.
        </p>
        <Link to="/App" className="app-button">
          <label>GO TO APP</label>
        </Link>
      </div>
      <footer></footer>
    </div>
  );
}

export default Home;
