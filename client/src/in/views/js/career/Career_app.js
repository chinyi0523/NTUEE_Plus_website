import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Recommendation from './Recommendation'
import Recruitment from './Recruitment'

class Career_app extends Component {
	render() {
		return (
			<div>
				<Switch>
					<Route
						path='/in/Career/pages/Recommendation'
						exact
						component={Recommendation}
					/>
					<Route
						path='/in/Career/pages/Recruitment'
						exact
						component={Recruitment}
					/>
				</Switch>
			</div>
		)
	}
}

export default Career_app
