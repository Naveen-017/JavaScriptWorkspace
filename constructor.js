function Details(name,tech)
{
    this.name = name;
    this.tech = tech;
}
let details = new Details('naveen','js');
let details1 = new Details('Raju','js');
details1.name = 'priya'

console.log(details)
console.log(details1)