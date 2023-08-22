// trim()
// touppercase()
// to lower case()
//  slice



let myname = "dilJan"
console.log(myname.toLowerCase());

let myn = myname.toUpperCase();
console.log(myn);

console.log(myname.length);

let mynm = myname.trim();
console.log(mynm);
console.log(mynm.length);

let youn = myname.slice(1,4);
console.log(youn)


//  type of operator
//  data type ( primitve data type)
//  number
// string
// bolean
// null
// bigint
// undefined
// symbol


//  convert number to string
   
      let yourname = 2 + "";
      console.log(typeof yourname);   
      console.log(yourname);

//   //   convert string to number


        let ourname = +"diljan"
      console.log(typeof ourname);   



    //  // string concatenation

    let f_name="diljan";
    let l_name="ali";
    let nmae = f_name +"   "+ l_name;
    console.log(nmae);


    //  template string

    let first_name = "diljan"
    let last_name = " ali"

    let full_name = `my first name is ${first_name} and my last name is ${last_name}`;
    console.log(full_name);



    //  // comparision operator

    let number1= 34;
    let number2 = "34";
    console.log(number1==number2)
    console.log(number1===number2)

