const {client} = require("./config");


const insertOneData = async()=>{

    try{

        const databaseName = client.db("hospital");
        const collectionName = databaseName.collection("patients");

        const patientData = {Id : "01", Name: "Ibrahim Hossain", Age : "25Yrs", Gender : "Male"};

        const result = await collectionName.insertOne(patientData);
        console.log(`data collection success & _id: ${result.insertedId}`);

    }catch (error){

        console.log(error);

    }finally{

        await client.close();

    }
};

insertOneData();