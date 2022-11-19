const {client} = require("./conFig");

const dataFindOne = async()=>{

    try{

        const databaseName = client.db("hospital");
        const collectionName = databaseName.collection("patients");

        // without condition
        const findPatientData = {};
        // with condition
        const findDataWithCondition = {Id : "02"};


        const options = {
            // sort matched documents in descending order by rating
            sort: { "imdb.rating": -1 },
            // Include only the `title` and `imdb` fields in the returned document
            projection: { _id: 0, Name: 1, Age: 1, Gender: 1},
          };

        const result = await collectionName.findOne(findDataWithCondition, options);
        console.log(result);

    }catch (error){

        console.log(error);

    }finally{

        await client.close();

    }
};

dataFindOne();