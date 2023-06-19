// Code your solution here
const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];

function findMatching(drivers, name) {
  return drivers.filter((item) => {
    return item.toLowerCase() === name.toLowerCase()
  });
}


function fuzzyMatch(drivers,letters){
return drivers.filter((driver)=>{
  return driver.startsWith(letters)
})
}

console.log(fuzzyMatch(drivers,"Sa"));

const driversObj = [
  {
    name: 'Bobby',
    hometown: 'Pittsburgh' },
  {
    name: 'Sammy',
    hometown: 'New York' } ,
  {
    name: 'Sally',
    hometown: 'Cleveland' },
  {
    name: 'Annette',
    hometown: 'Los Angeles' },
  {
    name: 'Bobby',
    hometown: 'Tampa Bay' }
];

function matchName(driversObj, name){
  return driversObj.filter((driver) =>{
    return driver.name === name
  })

}
