const {client} = require("./conFig");

const dataUpdate = async()=>{

    try{

        const databaseName = client.db("hospital");
        const collectionName = databaseName.collection("patients");

        const filter = { Name: "Rasel Ahmed" };
        const options = { upsert: true };

        const updateData = {
            $set: {Name : "Rasel Mia"}
          };
      
        const result = await collectionName.updateOne(filter, updateData);
        console.log("Data Update Success");

    }catch (error){

        console.log(error);

    }finally{

        await client.close();

    }
};

dataUpdate();