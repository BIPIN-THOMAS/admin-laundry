import Boxes from "./Boxes";
import Sidebar from "./Sidebar";

function Home() {
  return (
    <div className="container">
      <Sidebar/>
      <div className="right_body">
        <h2>Welcome to the Laundrybin Website</h2>
        <Boxes/>
      </div>
    </div>
  );
}

export default Home;
