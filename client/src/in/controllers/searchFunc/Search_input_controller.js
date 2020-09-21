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

const handleSubmit = (e, options) => {
	//TODO
	// send data back to backend
	// axios.post("/api/searchVisual",)
	e.preventDefault()
	let data = {}
	for (let option in options) {
		if(options[option].isChosen){
			data[options[option].option_name] = options[option].value
		}
	}
	axios
		.post('/api/searchVisual', data)
		.then((res) => {//{res.data.data=[...]}
			console.log(res.data.data)

		})
		.catch((err) => console.log(err))
}

export { renderInitialOptionState, addBlockToBlockList, handleSubmit }
