const {authModel} = require("../models/user");
const {Router} = require("express")
const router = Router();
const {createtokenforuser} = require("../services/authentication")

router.post("/register", async (req, res) => {
    const { name, email, password, confirmpassword } = req.body;
    await authModel.create({
      name,
      email,
      password,
      confirmpassword
    });
    console.log("register")

    return res.json("register succesfully")
  });


  router.post("/login", async (req, res) => {
    const { email, password } = req.body;

        try {
              const user = await authModel.findOne({ email:email });
              console.log("from signin",user)
              if (!user) {
                return res.status(404).json({ error: "User not found" });
              }

              try{
                const token = await  authModel.matchpasswordandgenaratetoken(email,password)
             console.log("succesed")
             console.log("token",token);
             res.cookie("over","token")// // cookie is not set here
                return res.json("login")
              }
            catch(error){
              return res.status(401).json({ error: "Incorrect email or password" });

            }
             
            } 
            catch (error) {
              return res.status(500).json({ error: "Internal server error" });
            }
        
  });


  router.get("/",async(req,res)=>{
    res.cookie("homepar","koioioi") // cookie is not set here
    res.json("succes")
  })


module.exports = router;

