const poolConnection = require("../dbConn/dbConn");
const pool = poolConnection;


//Register fuction 
const createUser = (req, res) => {
    
    const {username,email,gender,password,age ,confirm} = req.body; 
  
   
     console.log(email)
     console.log(username)
     console.log(gender)
     console.log(password)
     console.log(age)
     console.log(confirm)
    
    
  
    if(password == confirm){
  
     //checking if user already has an account
    pool.query('select * from loveagainuser where email = $1' ,[email],(error, results)=> {
      
      if (results.rowCount > 0) {
  
        res.send('user has already been registered')
      
      }else{
  
        pool.query('INSERT INTO loveagainuser (username,email,gender,password,age) VALUES ($1,$2,$3,$4,$5) RETURNING email',[username,email,gender,password,age],(error, results) => 
        {
    
            if (error) 
              {
                res.send(`sytem error ` );
              }
            else{
            
                res.send('successfully registered')
              
            }  
           
                
        });
      }
      });
  
    }else{
  
      res.send('password dont match')
    }
    
  };

  module.exports = {
 
    createUser
   
    
  }    
  