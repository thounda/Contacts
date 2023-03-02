// Define component to contacts data as a prop to map into an Ordered list
const ListContacts = ({ contacts }) => {
  // console.log(contacts); // used just for testing - comment out for production build
  return (
    <ol className="contact-list">
      {contacts.map((contact) => (
        <li key={contact.id}>{contact.name}</li>
      ))}
    </ol>
  );
};

// Set export on companent for use
export default ListContacts;
