const person = {
    name: "John Doe",
    age: 25,
    country: "USA",
    semester: "Fall 2023",
    cms: "1234567890",
    details: [
        { contactNumber: "123-456-7890", email: "john.doe@example.com" },
        { contactNumber: "987-654-3210", email: "johndoe@gmail.com" },
        { contactNumber: "555-555-5555", email: "johndoe@yahoo.com" }
    ]
};

for (const key in person) {
    if (typeof person[key] !== 'object') {
        console.log(person[key]);
    } else {
        for (const detail of person[key]) {
            console.log(detail.contactNumber);
            console.log(detail.email);
        }
    }
}
