import axios from 'axios'

const renderInitialOptionState = (original_options) => {
	//TODO
	// render the original options into the specific format
	/* format
    {
        display_option1: 
        {
            {
                option_name: string
                value: string
                isChosen: bool
            }
        }
        .
        .
        .
    }
     */

	let initialState = {}
	for (let option in original_options) {
		initialState[option] = {
			option_name: original_options[option],
			value: '',
			isChosen: false,
		}
	}

	return initialState
}

const addBlockToBlockList = (haveChosen, setHaveChosen) => {
	//TODO
	// add a default Search_input_block into the state of havChosen and change the state
	haveChosen.push('Please Choose A Catalog')
	setHaveChosen(haveChosen)
}

const handleSubmit = (options) => {
	//TODO
	// send data back to backend
	// axios.post("/api/searchVisual",)

	let data = {}
	for (let option in options) {
		data[option.option_name] = option.value
	}

	axios
		.post('/api/searchVisual', data)
		.then((data) => {
			console.log(data)
		})
		.catch((err) => console.log(err))
}

export { renderInitialOptionState, addBlockToBlockList, handleSubmit }
