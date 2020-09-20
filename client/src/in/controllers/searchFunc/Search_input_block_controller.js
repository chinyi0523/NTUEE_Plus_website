// Array.prototype.insert = function (index, item) {
// 	this.splice(index, 0, item)
// }

const updateOptions = (setOptions, options, currentOption, isChosen) => {
	//TODO
	// change options in Search_input, if isChosen is true, let options[currentOption].isChosen = isChosen
	// means that being chosen or not

	if (currentOption === 'Please Choose A Category') {
		return
	}
	console.log(`UPDATE isChosen TO ${isChosen} of ${currentOption}`)

	let newOpttions = {
		...options,
		[currentOption]: {
			...options[currentOption],
			isChosen: isChosen,
		},
	}

	console.log(newOpttions)

	setOptions(newOpttions)
}

const updateHaveChosen = (setHaveChosen, haveChosen, index, deleteOrChange) => {
	//TODO
	// update the haveChosen list in the Search_input, if deleteOrChange = null , it will delete the currentOption in haveChosen
	// if deleteOrChange is newOption ,it will remove the currentOptions, and add newOptions into haveChosen,
	// at the same place.
	if (deleteOrChange) {
		haveChosenReplace(setHaveChosen, haveChosen, deleteOrChange, index)
	} else {
		haveChosenDelete(setHaveChosen, haveChosen, index)
	}
}

const haveChosenDelete = (setHaveChosen, haveChosen, index) => {
	let newHaveChosen = []

	for (let haveChosenIndex in haveChosen) {
		if (parseInt(haveChosenIndex) !== index) {
			newHaveChosen.push(haveChosen[haveChosenIndex])
		}
	}

	console.log(newHaveChosen)

	setHaveChosen(newHaveChosen)
}

const haveChosenReplace = (setHaveChosen, haveChosen, newOption, index) => {
	//TODO
	// it will repalce newOption at index
	console.log(`Replace Element at index ${index} to ${newOption}`)
	let newHaveChosen = haveChosen
	newHaveChosen.splice(index, 1, newOption)
	setHaveChosen(newHaveChosen)
}

const updateValue = (setOptions, options, currentOption, value) => {
	//TODO
	// update the value in options[currentOption]
	setOptions({
		...options,
		[currentOption]: {
			...options[currentOption],
			value: value,
		},
	})
}

export { updateOptions, updateHaveChosen, updateValue }
