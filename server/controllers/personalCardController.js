const personalCardService = require('../services/personalCardService');


const getDetails=async(req,res)=>{
    try {
        let Details=req.body;
        console.log('details');
        console.log(Details);
       let getDetails=await personalCardService.getDetails(Details);
        return res.status(200).json(getDetails);
    }
    catch (err) {
        return res.status(500).send("Internal Server Error");
    }
}

module.exports={
    getDetails
}