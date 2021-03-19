const CONFIG = {
    mongodb: {
        dev: {
            address: "mongodb://mongodbadmin:Ds5sPkEnhrM9GIOQRFKqJieZR1WhOUG57rpHX5QjSJuQRojNuCthqBqHiMWuG5Hj0X5oa35O1mtUd2EafflEVg==@mongodbadmin.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@mongodbadmin@",
        },
        prod: {
            address: ""
        }
    },
    azureAIText: {
        dev: {
            key: "260d7999349147baa75b16b018450624",
            endpoint:"https://azureaitext.cognitiveservices.azure.com/"
        },
        prod: {
            key: "",
            endpoint: ""
        }
    },
    server: {
        port: 3000
    }
}

module.exports = {
    CONFIG
}