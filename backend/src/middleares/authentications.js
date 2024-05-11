// // const {validatetoken} = require("../service/authentication")


// // function checkforauthenticationcookie(cookiename){
// //     return (req,res,next) => {
// //         const tokencookievalue = req.cookies?.[cookiename]
// //         if (!tokencookievalue) {
// //           return  next();
// //         }

// // try{

// //     const userpayload = validatetoken(tokencookievalue)
// //     req.user = userpayload;
// //     console.log(req)
// //     console.log("userpayload",userpayload)

// // }
// // catch(error){}
// // return next();
// //     }
// // }

// // module.exports = {
// //     checkforauthenticationcookie,

// // }

// const {validatetoken} = require("../services/authentication")


// function checkforauthenticationcookie(cookiename){
//     return (req,res,next) => {
//         const tokencookievalue = req.cookies?.[cookiename]
//         if (!tokencookievalue) {
//           return  next();
//         }

// try{

//     const userpayload = validatetoken(tokencookievalue)
//     req.user = userpayload;

// }
// catch(error){}
// return next();
//     }
// }

// module.exports = {
//     checkforauthenticationcookie,

// }