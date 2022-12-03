import logo from "./logo.svg";
import "./App.css";
import Profile from "./components/profile/profile";

const handleName = (fullname) => {
  alert(fullname);
};

function App() {
  return (
    <div className="App">
      <Profile
        fullname={"Akinyemi"}
        bio={"I am an aspiring Professional ReactJs Developer, possessing the required skills to work on your projects"}
        profession={"ReactJs Developer"}
        handleName={handleName}
      >
        <img
          style={{ height: "100px", width: "100px"  ,objectFit: "cover", borderRadius: "100%" }}
          src="https://media.istockphoto.com/id/613531310/photo/young-and-handsome.jpg?s=612x612&w=0&k=20&c=RJVt3sQQ6uhh9JPSBjgTnnKrYlexIJHLsYMHOr_Dskg="
          alt="profile picture"
        />
      </Profile>
    </div>
  );
}

export default App;
