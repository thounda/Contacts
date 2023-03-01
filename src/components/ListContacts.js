// Define component to pass into UI
const ListContacts = ({ contacts }) => {
  console.log(contacts); // used just for testing - comment out for production build
  return <ol className="contact-list"></ol>;
};

// Set export on companent for use
export default ListContacts;
