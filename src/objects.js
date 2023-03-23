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
    profession: 'mathematician',
  }, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
  }, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
  }, {
    name: 'Percy Lavon Julian',
    profession: 'chemist',  
  }, {
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
  }];

 export const listPeople = people.map(dude => <li className="listItem" key={dude.id}>{dude.name} - {dude.profession}</li>);

 console.log(listPeople);

