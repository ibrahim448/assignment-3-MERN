const {client} = require("./conFig");

const insertManyData = async()=>{

    try{

        const databaseName = client.db("hospital");
        const collectionName = databaseName.collection("patients");

        const patientData = [

            {Id : "02", Name: "Rasel Ahmed", Age : "26Yrs", Gender : "Male"},
            {Id : "03", Name: "Mamun", Age : "25Yrs", Gender : "Male"},
            {Id : "04", Name: "fatema", Age : "25Yrs", Gender : "Female"},
            {Id : "05", Name: "Imran Hossain", Age : "25Yrs", Gender : "Male"}
        ];

        const options = { ordered: true };

        const result = await collectionName.insertMany(patientData);
        console.log(`data collection success & _id: ${result.insertedCount}`);

    }catch (error){

        console.log(error);

    }finally{

        await client.close();

    }
};

insertManyData();