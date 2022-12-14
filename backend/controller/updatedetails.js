const poolConnection = require("../dbConn/dbConn");
const pool = poolConnection;
const details = (req, res)=>{


    const {username,age,abouts} = req.body; 

   
   

    const id =parseInt(req.params.id);


    pool.query('update loveagainuser set username = $1 ,age = $2, abouts = $3  where id =$4' ,[username,age,abouts,id],(error, results) => 
        {
    
            if (error) 
              {
                res.send(`sytem error `);
              }
            else{
            
                res.json({message:'successfully jjjjj uploaded',data: results.rows})
               
              
            }  
          
    })


}



module.exports = {

  details

}    