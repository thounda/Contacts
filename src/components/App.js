// Import modules and components
import "../css/App.css";
import ListContacts from "./ListContacts";

const App = () => {
  // Object array of mock 'test' data to pass into ListContacts component via props / destructing
  const contacts = [
    {
      id: "karen",
      name: "Karen Isgrigg",
      handle: "karen_isgrigg",
      avatarURL: "http://localhost:5001/karen.jpg",
    },
    {
      id: "richard",
      name: "Richard Kalehoff",
      handle: "richardkalehoff",
      avatarURL: "http://localhost:5001/richard.jpg",
    },
    {
      id: "tyler",
      name: "Tyler McGinnis",
      handle: "tylermcginnis",
      avatarURL: "http://localhost:5001/tyler.jpg",
    },
  ];

  // return statement passing in component props for 'contacts'
  return (
    <div>
      <ListContacts contacts={contacts} />
    </div>
  );
};

// set component export statement
export default App;
