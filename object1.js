let employee = {
    name : 'naveen',
    mobile : 6281278714,
    laptop :{
        cpu : 'i7',
        ram : '4gb',
        brand : 'dell'
    }
}
for(let key in employee.laptop){
    console.log(key, employee.laptop[key])
}