import 'mocha';
import * as chai from 'chai';
import {response} from './fixtures/response.fixtures';
import {RetrieveIntent} from '../modules/RetrieveIntent';
import chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const assert = chai.assert;
describe('Retrieve Intent from LUIS', () => {
    it('get response', (done) => {
        let retrieveIntent = new RetrieveIntent();
        retrieveIntent.getPrediction("").then((res)=>{
            console.log("done");
            chai.expect(res).to.eql(response);
            done();
        }).catch((err)=>console.log(err));
    }).timeout(8000);
});