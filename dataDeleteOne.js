const {client} = require("./conFig");

const dataDeleteOne = async()=>{

    try{

        const databaseName = client.db("hospital");
        const collectionName = databaseName.collection("patients");

        const deleteData = {Age : "2Yrs"};
      
        const result = await collectionName.deleteOne(deleteData);
        if (result.deletedCount === 1) {
            console.log("Successfully deleted one document.");
          } else {
            console.log("No documents matched the query. Deleted 0 documents.");
          };

    }catch (error){

        console.log(error);

    }finally{

        await client.close();

    }
};

dataDeleteOne();