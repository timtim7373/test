
const requestPromise = require('request-promise');
const queryString = require('querystring');

// YOUR-APP-ID: The App ID GUID found on the www.luis.ai Application Settings page.
const LUIS_appId = "d84b3c98-6089-440b-8254-8968f71e8388";

// YOUR-PREDICTION-KEY: Your LUIS authoring key, 32 character value.
const LUIS_predictionKey = "b3d1429317334b79aceabb8c90e1d11e";

// YOUR-PREDICTION-ENDPOINT: Replace this with your authoring key endpoint.
// For example, "https://westus.api.cognitive.microsoft.com/"
const LUIS_endpoint = "https://westus.api.cognitive.microsoft.com/";

export class RetrieveIntent {
    utterance:string = "I want two large pepperoni pizzas on thin crust please";
    queryParams = {
        "show-all-intents": true,
        "verbose":  true,
        "query": this.utterance,
        "subscription-key": LUIS_predictionKey
    };
    constructor() {}
    public async getPrediction(text: string) {

        if (text) {
            this.utterance = text;
            this.queryParams["query"] = this.utterance;
        }

        // Create the URI for the REST call.
        const URI = `${LUIS_endpoint}luis/prediction/v3.0/apps/${LUIS_appId}/slots/production/predict?${queryString.stringify(this.queryParams)}`;

        // Send the REST call.
        return await requestPromise(URI);
    }
}