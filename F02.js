// Írj egy olyan függvényt (tagged template) ami a paraméterként kapott texts, values értékeket úgy adja vissza egy strigben,
// hogy a text értékek dőltek, a value-k félkövérek legyenek, ha beillesztjük a html-be, tehát
// a megfelelő tagekkel kiegészített stinget adjon vissza!

'use strict';

const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: '30'
};

const taggedCode = (texts, ...values) =>
    texts.map((text, index) =>
        `<em>${text}</em>${values[index] ? `<strong>${values[index]}</strong>` : ``}`
    ).join();

document.body.innerHTML = taggedCode`My name is ${user.firstName} ${user.lastName}. I'm ${user.age} years old.`;
