const assert = require('assert')
const axios = require('axios');

const serverUrl = "http://localhost:3000";
const calculateRoute = `${serverUrl}/calculate`;

function generateState(display, action, firstNumber) {
    if (!display) {
        return "null"
    }
    
    const state = {
        display: display
    }
    
    if (action) {
        state.action = action
    }
    
    if (firstNumber) {
        state.firstNumber = firstNumber
    }
    
    return state;
}


describe("calculator service integ test", function() {
    it("when entering first number, return first number", function(done) {
        axios.post(calculateRoute, undefined)
            .then(x => {
                assert.deepEqual(x.data, {});
                done();
                })
            .catch(done);
    });
    
    it("when calculating 2*5, returns state that with result 10", function(done) {
        const state = {calculatorState: generateState('2', '*', 5), input: "="};
        axios.post(calculateRoute, state)
            .then(x => {
                assert.equal(x.data.display, '10');
                done();
                })
            .catch(e => done(e));
    });
});