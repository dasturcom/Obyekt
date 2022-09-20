let elFormContact = $_(".form-contact-js");
let elNameInput = $_(".form-contact-js__name-input", elFormContact);
let elSurnameInput = $_(".form-contact-js__surname-input", elFormContact);
let elContacInput = $_(".form-contact-js__contact-input", elFormContact);
let elRelationInput = $_(".form-contact-js__relation-input", elFormContact);
let elContacsUL = $_(".contact");

let contacts = [];

function ContactsNew(name, surname, number, relation) {
    this.name = name,
    this.surname = surname,
    this.number = number,
    this.relation = relation
};

function renderContact() {

    contacts.forEach(contact => {

        elContacsUL.innerHTML = ""

        let newLiElement = createElement("li", "contact_item list-group-item");
        let newDivElement = createElement("div", "contact_fullname", `${contact.name} ${contact.surname}`);
        let newElement = createElement("div", " small", contact.relation);
        let newLink = createElement("a", "contact_phone-number", contact.number);

        newLink.setAttribute("href", `tel: ${contact.number}`);

        newLiElement.appendChild(newDivElement);
        newLiElement.appendChild(newElement);
        newLiElement.appendChild(newLink);

        elContacsUL.appendChild(newLiElement)
    })

}

elFormContact.addEventListener("submit", function(e) {
    e.preventDefault();

    let nameValue = elNameInput.value;
    let surnameValue = elSurnameInput.value;
    let contactValue = elContacInput.value;
    let relationValue = elRelationInput.value;

    contacts.push(new ContactsNew(nameValue, surnameValue, contactValue, relationValue));

    renderContact()

    elFormContact.reset();
    elNameInput.focus()

})