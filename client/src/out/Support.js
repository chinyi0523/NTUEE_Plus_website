import React, { Component } from 'react'
import './Support.css'

class Support extends Component {
	render() {
		return (
			<div>
				<div
					id='Support_container'
					class='col-8 offset-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 mt-lg-3'
				>
					<div id='Support_up'>
						<p id='Support_up_text'>
							Your support is vital in enabling NTUEE+ to fulfill our mission to
							chain all the alumnae in the world.
						</p>
					</div>
					<div id='Support_down'>
						<p id='Support_down_text'>
							帳戶:700-0001236-0553850
							<br />
							備註:NTUEE-PLUS
						</p>
					</div>
				</div>
			</div>
		)
	}
}

export default Support
