// Define component to contacts data as a prop to map into an Ordered list
const ListContacts = ({ contacts }) => {
  // console.log(contacts); // used just for testing - comment out for production build
  return (
    <ol className="contact-list">
      {contacts.map((contact) => (
        <li key={contact.id} className="contact-list-item">
          <div
            className="contact-avatar"
            style={{ backgroundImage: `URL(${contact.avatarURL})` }}
          ></div>
          <div className="contact-details">
            <p>{contact.name}</p>
            <p>{contact.handle}</p>
          </div>
          <button className="contact-remove">Remove</button>
        </li>
      ))}
    </ol>
  );
};

// Set export on companent for use
export default ListContacts;
