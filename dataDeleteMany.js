const {client} = require("./conFig");

const dataDeleteMany = async()=>{

    try{

        const databaseName = client.db("hospital");
        const collectionName = databaseName.collection("patients");

        // with condition
        const deleteDataCondition = {Age : "25Yrs"};

        // without condition
        const deleteDataAll = {};
      
        const result = await collectionName.deleteMany(deleteDataAll);
        console.log("Successfully deleted document.");

    }catch (error){

        console.log(error);

    }finally{

        await client.close();

    }
};

dataDeleteMany();