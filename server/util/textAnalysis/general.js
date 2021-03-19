const nodejieba = require("nodejieba")
const { TextAnalyticsClient, AzureKeyCredential } = require("@azure/ai-text-analytics")
const config = require('../../config/config')

const textAnalyticsClient = new TextAnalyticsClient(config.CONFIG.azureAIText.dev.endpoint,  new AzureKeyCredential(config.CONFIG.azureAIText.dev.key))

const detectLanguage = async (text) => {
    const languageResult = await textAnalyticsClient.detectLanguage([text])
    const primaryLanguage = languageResult[0].primaryLanguage.name
    return primaryLanguage
}


const getKeyWord = (text) => {
    const keywordList = []
    const keywordObject = nodejieba.extract(text, 5)
    keywordObject.forEach((keyword)=>{
        keywordList.push(keyword.word)
    })
    return keywordList
}

const getKeyWordByAzure = async (text) => {
    const keyword  = await textAnalyticsClient.extractKeyPhrases([text])
    return keyword[0].keyPhrases
}


module.exports = {
    detectLanguage,
    getKeyWord,
    getKeyWordByAzure
}