// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, name) {
  let newCollection = [];
  const lowerCaseName = name.toLowerCase();

  for (const item of drivers) {
    if (item.toLowerCase() === lowerCaseName) {
      newCollection.push(item);
    }
  }

  return newCollection;
}

function  fuzzyMatch(driver,name){
    let newCollection = [];

  for (const item of drivers) {
    if (item.includes(name) ) {
      newCollection.push(item);
    }
    else if (item === name){
        newCollection = 0
    }
}

  return newCollection;

}
