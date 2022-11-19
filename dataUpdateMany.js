const {client} = require("./conFig");

const dataUpdateMany = async()=>{

    try{

        const databaseName = client.db("hospital");
        const collectionName = databaseName.collection("patients");

        // without condition
        const filter = {};

        const updateDataNoCondition = {
            $set: {Ref : "Dr.Mainul Hasan"}
          };

        // with condition
        const filterAge = { Age: "25Yrs" };
        const options = { upsert: true };

        const updateData = {
            $set: {Time : "5.00PM"}
          };
      
        const result = await collectionName.updateMany(filterAge, updateData);
        console.log("Data Update Success");

    }catch (error){

        console.log(error);

    }finally{

        await client.close();

    }
};

dataUpdateMany();