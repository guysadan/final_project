const assert = require('assert')
const calculate = require('../src/calculator')

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
    
    return JSON.stringify(state)
}

function getOutput(state, input) {
    return JSON.parse(calculate(state, input))
}

describe("calculator tests", function() {
    it("when state is undefined, return empty state", function() {
        const output = getOutput(undefined, '5')
        assert.equal(output.display, "5")
    })
    
    it("when state contains number and input is number, concat number", function() {
        const output = getOutput(generateState('2'), '3')
        assert.equal(output.display, "23")
    })
    
    it("when state already contains number and input is action, display should remain the same", function() {
        const output = getOutput(generateState('12'), '+')
        assert.equal(output.display, "12")
    })
    
    it("when state already contains number and input is action, state should save action", function() {
        const output = getOutput(generateState('23'), '+')
        assert.equal(output.action, '+')
    })
    
    it("when state contains first number and action, display should be reset", function() {
        const output = getOutput(generateState('23', '+'), '1')
        assert.equal(output.display, '1')
    })
    
    it("when state contains first number and action, first number should be saved in state", function() {
        const output = getOutput(generateState('23', '+'), '1')
        assert.equal(output.firstNumber, 23)
    })
    
    it("when state contains first number, action and part of second number, input is concatenated to the display", function() {
        const output = getOutput(generateState('1', '+', 45), '3')
        assert.equal(output.display, '13')
    })
    
    it("after evaluting result, state should be reseted and display will contain the result", function() {
        const output = getOutput(generateState('12', '+', 45), '=')
        assert.deepEqual(output, {display: '57'})
    })
})