/*let n1 = 0;
let n2 = 1;
let n3 ;

console.log(n1+" "+n2);
for(let i = 2; i<=10; i++){
    n3 = n1+n2;
    console.log(n3);
    n1 = n2;
    n2 = n3;
}
*/

/*const num =70;

for(let i =2; i<num; i++){
    if(num%i == 0){
        console.log("not prime")
        break;
    }   
}
console.log("prime")
*/

//prime number or not
/* num =6;
let count =0;
for(let i=2;i<num; i++){
	if(num%i == 0){
		count ++
		break;
	}
}

if(count == 0){
	console.log("Prime");
}else{
	console.log("not Prime");
}
 */

function greet(user,user2){
    return `raj${user},${user2}`
}
let user = 'naveen'
let user2 ='ganesh'
let str = greet(user,user2);
console.log(str);

function add(a,b)
{
    return (a+b);
}
console.log(add(5,8))

console.log(88<<2)

const biggestNum = Number.MAX_VALUE;
console.log(biggestNum)

const xmass = new Date("2001-4-26");
console.log(xmass.getFullYear());

console.log("\u00A9")