const poolConnection = require("../dbConn/dbConn");
const pool = poolConnection;
const image = (req, res)=>{


    const {profilepicture} = req.body; 

   
   
    console.log(profilepicture);
    const id =parseInt(req.params.id);


    pool.query('update loveagainuser set profilepicture = $1 where id =$2' ,[profilepicture,id],(error, results) => 
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

  image

}    