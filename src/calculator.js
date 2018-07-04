module.exports = function calculate(jsonState, input) {
    
    if (!jsonState ) {
        return JSON.stringify({
            display: input
        })
    }
    
    const state = JSON.parse(jsonState)
    
    if(state == null) {
		return JSON.stringify({
			display: input
		})
	}
    
    if (Number.isNaN(parseInt(input))) {
        if (input === '=') {
            const expression = `${state.firstNumber}${state.action}${state.display}`
            const result = eval(expression)
            return JSON.stringify({
                display: result.toString()
            })
        }   
        else {
            state.action = input
        }
    }
    else {
        if (state.action) {
            if (!state.firstNumber) {
                state.firstNumber = parseInt(state.display)
                state.display = ""
            }
            
            state.display += input
        }
        else {
            state.display += input
        }
    }
    
    return JSON.stringify(state)
}