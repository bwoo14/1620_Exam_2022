// contact list, don't change this.
const contactsList = [
  {
    name: "Togusa",
    phone: "555 555-5555",
    image: "togusa.png",
    email: "togusa@secnine.com",
    ID: "0"
  },
  {
    name: "Tachikoma",
    phone: "555 555-5555",
    image: "tachikoma.png",
    email: "tachikoma@secnine.com",
    ID: "1"
  },
  {
    name: "Saito",
    phone: "555 555-5555",
    image: "saito.png",
    email: "saito@secnine.com",
    ID: "2"
  },
  {
    name: '"major" Motoko',
    phone: "555 555-5555",
    image: "motoko.png",
    email: "motoko@secnine.com",
    ID: "3"
  },
  {
    name: "Ishikawa",
    phone: "555 555-5555",
    image: "ishikawa.png",
    email: "ishikawa@secnine.com",
    ID: "4"
  },
  {
    name: "Batou",
    phone: "555 555-5555",
    image: "batou.png",
    email: "batou@secnine.com",
    ID: "5"
  },
  {
    name: "Aramaki",
    phone: "555 555-5555",
    image: "aramaki.png",
    email: "aramaki@secnine.com",
    ID: "6"
  },
]

const displayAllContacts = document.querySelector('#display_all_contacts')
displayAllContacts.addEventListener('click', openContact)

function loadContacts() { // Loads contacts into the page
  const contactCards = []
  for (const contact of contactsList) {
    var newCard = `<div id='${contact.ID}' class='contact-card'><img id='${contact.ID}' src='./img/${contact.image}'></img> ${contact.name}</div>`
    displayAllContacts.insertAdjacentHTML("afterbegin", newCard)
  }
}

function openContact(evt) {
  const contactIDs = getContactIDs()
  if (contactIDs.includes(evt.target.id)) {
    hideOrUnhideContacts()
    displayContact(evt.target.id)
  }
}

function getContactIDs() {
  const contactIDs = []
  for (const contact of contactsList) {
    contactIDs.push(contact.ID)
  }
  return contactIDs
}

function hideOrUnhideContacts() {
  const currentDisplayAllContacts = document.querySelector('#display_all_contacts')
  if (currentDisplayAllContacts.style.display === "none") {
    currentDisplayAllContacts.style.display = "block";
  } else {
    currentDisplayAllContacts.style.display = "none";
  }
}

function displayContact(id) {
  const displaySingleContact = document.querySelector('#display_single_contact')
  const contactToDisplay = findContact(id)

  const contactHTML = 
  `<div class='contact-display'>
    <img src='./img/${contactToDisplay.image}'></img>
    <h1>${contactToDisplay.name}</h1>
    <p>${contactToDisplay.phone}<br>${contactToDisplay.email}</p>
  </div>`

  displaySingleContact.insertAdjacentHTML("afterbegin", contactHTML)
}

function findContact(id) {
  for (const contact of contactsList) {
    if (contact.ID == id) {
      return contact
    }
  }
}


loadContacts()