const birthdate = "2009/3/1";
 
const ageCalculation = ( birthDate , nowDate ) => {
    const age = nowDate.getFullYear() - birthDate.getFullYear();
    const thisYearsBirthday  = new Date( nowDate.getFullYear() , birthDate.getMonth() , birthDate.getDate() );
    return age + ( thisYearsBirthday.getTime() > nowDate.getTime() ? -1 : 0 );
}
 
const age = ageCalculation( new Date(birthdate) , new Date() );
 
console.log( age + "歳" );
 
document.getElementById("age").innerText="・日本在住"+age+"歳";
