// infer types or implicit types
// let userName="athul"
// //  userName=0   // automatically shows error and automatically shows type


// Defining types / Expicit type


// let userName:string="athul"
// let userNumber:number=30000

// let isSubscribed:boolean=true

// let skills=['js','html','react','node','react']

// let skills:string[]=['js','html','react','node','react']

// let count: number[]=[1,2,3]
// let emptyArray:[]=[]

// let emptyArray=[]


// let userDetails:{
//     name:string,
//     age:number,

// }={'name':'athul','age':23}




//Interface

// let userDetails:{name:string,age:number,salary:number}={name:'athul',age:24,salary:20000}


// interface Details{name:string,age:number,salary:number}

// let userDetails:Details={name:'athul',age:24,salary:20000}

// let adminDetails:Details={name:'athul',age:24,salary:20000}




 
// Type

// type Details={
//     name:String;age:Number;getName:()=>void
// }

// let userDetails:Details={name:"Athul",age:24,getName() {
//     console.log(this.name)
// },}

// Type define premitive data types , union types, intersection types and more

//Union Type


// type Details={
//     name:String,
//     age:Number | String
// }

// let userDetails: Details={
//     name:"athul",
//     age:"24"
// }



// // Union type use in Array

// let Skills:(string|number)[]=["js","html",24]


// //Optional Operator

// type Details={
//     name:String,age:number|string,
//     getName?:()=>void
// }


//Functions

type Details={
    name:string;age:number|string;salary?:number;getName?:()=>void
}

let userDetails : Details={
    name:"athul",age:24,salary:100000,
}

// function getName(userDetails:Details){
//     return userDetails.name
//     getName(userDetails)
// }

