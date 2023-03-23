export const topDesserts = [
    {
        id: "1",
        title: "Tiramisú",
        description: "The best in town",
        image: "https://www.elmundoeats.com/wp-content/uploads/2020/12/FP-10-Minute-Eggless-Tiramisu-For-Two-2.jpg",
        price: "$5.00"
    },
    {
        id: "2",
        title: "Lemon Ice Cream",
        description: "Mind-blowing taste",
        image: "https://www.yourhomebasedmom.com/wp-content/uploads/2013/07/lemon-ice-cream-5-1-500x500.jpg",
        price: "$4.50"
    },
    {
        id: "3",
        title: "Chocolate mousse",
        description: "Unexplored flavour",
        image: "https://www.elmundoeats.com/wp-content/uploads/2020/12/FP-10-Minute-Eggless-Tiramisu-For-Two-2.jpg",
        price: "$6.00"
    },
];

const people = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    imageUrl: 'https://img.freepik.com/premium-photo/asian-elderly-old-woman-face-eye-with-wrinkles-portrait-closeup-view_39768-7241.jpg',
    profession: 'mathematician',
    accomplishments: 'She was able to get up in the morning, despite having a severe cold.'
}, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    imageUrl: 'https://i.pinimg.com/474x/c8/85/7b/c8857b606d198c6fad07be23ce586be8--medicine.jpg',
    profession: 'chemist',
    accomplishments: 'He was a ble to mix oil and water with a spun, to the awe of everyone.'
}, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    imageUrl: 'https://img.freepik.com/free-photo/senior-man-face-portrait-wearing-bowler-hat_53876-148154.jpg',
    profession: 'physicist',
    accomplishments: 'He was able to dress as a woman in ton square, and survived!'
}, {
    name: 'Percy Lavon Julian',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlTdOHc15DPoTIZxLTpie7J5G3PElVq9SDyg&usqp=CAU',
    profession: 'chemist',
    accomplishments: 'He was able to drink distilled water and survive!'
}, {
    name: 'Subrahmanyan Chandrasekhar',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRx98EzIYQktHbWee4t54usbgW3rcFBp3dHA&usqp=CAU',
    profession: 'astrophysicist',
    accomplishments: 'He was able to survive highschool despite such horrible name.'
}];


export const recipes = [{
    id: 'greek-salad',
    name: 'Greek Salad',
    ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
  }, {
    id: 'hawaiian-pizza',
    name: 'Hawaiian Pizza',
    ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
  }, {
    id: 'hummus',
    name: 'Hummus',
    ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
  }];

export const filterNerds = people.filter(elem => elem.profession === 'chemist');
export const filterNerds2 = people.filter(elem => elem.profession !== 'chemist');

