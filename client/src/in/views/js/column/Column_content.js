import React, { Component } from 'react'
import '../../css/column/Column_content.css'

class Column_content extends Component {
	constructor(props) {
		super(props)
		this.state = {
			title: this.props.content.title,
			subtitle: this.props.content.subtitle,
			hashtags: this.props.content.hashtags,
			// intro: this.props.content.intro,
			sections: this.props.content.sections,
			annotation: this.props.content.annotation,
			id: this.props.content.id,
		}
	}
	render() {
		return (
			<div id={`${this.state.id}_content`} class='column_content'>
				<div id='column_content_space'>
					<Column_title
						id={`${this.state.id}_title`}
						title={this.state.title}
					/>
					<Column_subtitle
						id={`${this.state.id}_title`}
						subtitle={this.state.subtitle}
					/>
					<div class='d-none d-lg-block'>
						<Column_hashtags
							id={`${this.state.id}_hashtags`}
							hashtags={this.state.hashtags}
						/>
					</div>
					{/* <Column_intro */}
						{/* id={`${this.state.id}_intro`} */}
						{/* intro={this.state.intro} */}
					{/* /> */}
					<Column_article
						id={`${this.state.id}_article`}
						sections={this.state.sections}
					/>
					<Column_annotation
						id={`${this.state.id}_annotation`}
						annotation={this.state.annotation}
					/>
				</div>
			</div>
		)
	}
}

export default Column_content

import '../../css/column/column_pages/Column_title.css'

class Column_title extends Component {
	constructor(props) {
		super(props)
		this.state = {
			title: this.props.title,
			id: this.props.id,
		}
		this.addTitle = this.addTitle.bind(this)
	}
	addTitle(i, content) {
		let title_container = document.getElementById(this.state.id)
		let newtitle = document.createElement('p')
		newtitle.setAttribute('href', '#')
		newtitle.setAttribute('class', 'column_title')
		newtitle.setAttribute('id', this.state.id + '_' + i)
		newtitle.innerHTML = content
		title_container.appendChild(newtitle)
	}
	componentDidMount() {
		for (let i = 1; i < this.state.title.length + 1; i++) {
			this.addTitle(i, this.state.title[i - 1])
		}
	}
	render() {
		return (
			<div id={this.state.id} class='column_whole_title'>
				{/* {this.state.title} */}
			</div>
		)
	}
}

import '../../css/column/column_pages/Column_subtitle.css'

class Column_subtitle extends Component {
	constructor(props) {
		super(props)
		this.state = {
			subtitle: this.props.subtitle,
			id: this.props.id,
		}
		this.addSubTitle = this.addSubTitle.bind(this)
	}
	addSubTitle(i, content) {
		let subtitle_container = document.getElementById(this.state.id)
		let newsubtitle = document.createElement('p')
		newsubtitle.setAttribute('href', '#')
		newsubtitle.setAttribute('class', 'column_subtitle')
		newsubtitle.setAttribute('id', this.state.id + '_' + i)
		newsubtitle.innerHTML = content
		subtitle_container.appendChild(newsubtitle)
	}
	componentDidMount() {
		for (let i = 1; i < this.state.subtitle.length + 1; i++) {
			this.addSubTitle(i, this.state.subtitle[i - 1])
		}
	}
	render() {
		return (
			<div id={this.state.id} class='column_subtitle'>
				{/* {this.state.title} */}
			</div>
		)
	}
}

import '../../css/column/column_pages/Column_hashtags.css'

class Column_hashtags extends Component {
	constructor(props) {
		super(props)
		this.state = {
			hashtags: this.props.hashtags,
			id: this.props.id,
		}
		this.addHashTag = this.addHashTag.bind(this)
	}
	addHashTag(i, content) {
		let tag_container = document.getElementById(this.state.id)
		let newtag = document.createElement('a')
		newtag.setAttribute('href', '#')
		newtag.setAttribute('class', 'column_hashtags')
		newtag.setAttribute('id', this.state.id + '_' + i)
		newtag.innerHTML = '#' + content
		tag_container.appendChild(newtag)
	}
	componentDidMount() {
		for (let i = 1; i < this.state.hashtags.length + 1; i++) {
			this.addHashTag(i, this.state.hashtags[i - 1])
		}
	}
	render() {
		return (
			// <div className "hidden">
			<div id='hashtag_space'>
				<div id={this.state.id} class='column_hashtags'></div>
			</div>
			// </div>
		)
	}
}

// import '../../css/column/column_pages/Column_intro.css'

/*class Column_intro extends Component {
	constructor(props) {
		super(props)
		this.state = {
			intro: this.props.intro,
			id: this.props.id,
		}
		this.addIntro = this.addIntro.bind(this)
	}
	addIntro(i, content) {
		let intro_container = document.getElementById(this.state.id)
		let newintro = document.createElement('p')
		newintro.setAttribute('href', '#')
		newintro.setAttribute('class', 'column_intro')
		newintro.setAttribute('id', this.state.id + '_' + i)
		newintro.innerHTML = content
		intro_container.appendChild(newintro)
	}
	componentDidMount() {
		for (let i = 1; i < this.state.intro.length + 1; i++) {
			this.addIntro(i, this.state.intro[i - 1])
		}
	}
	render() {
		return (
			<div id={this.state.id} class='column_intro'>
				{/* {this.state.title} }
		/*	</div>
		)
	}
}*/

class Column_article extends Component {
	constructor(props) {
		super(props)
		this.state = {
			sections: this.props.sections,
			id: this.props.id,
		}
	}
	render() {
		const new_sections = []
		for (let i = 0; i < this.state.sections.length; i++) {
			new_sections.push(
				<Column_section
					id={this.state.id + '_' + (i + 1)}
					sections={this.state.sections[i]}
				/>
			)
		}
		return <div id={this.state.id}>{new_sections}</div>
	}
}

import '../../css/column/column_pages/Column_section.css'
class Column_section extends Component {
	constructor(props) {
		super(props)
		this.state = {
			bigtitle: this.props.sections.bigtitle,
			sections: this.props.sections.sections,
			id: this.props.id,
		}
	}
	componentDidMount() {
		let minor_section_container = document.getElementById(this.state.id)
		for (let i = 0; i < this.state.sections.length; i++) {
			let new_minor_section = document.createElement('div')
			let minor_section_title = document.createElement('li')
			let minor_section_content = document.createElement('p')

			 
			minor_section_title.innerHTML = this.state.sections[i].title
			minor_section_title.setAttribute(
				'id',
				this.state.id + '_minor_title' + (i + 1)
			)
			minor_section_title.setAttribute('class', 'column_minor_title')
			minor_section_content.innerHTML =
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
				this.state.sections[i].section
			minor_section_content.setAttribute(
				'id',
				this.state.id + '_content' + (i + 1)
			)
			minor_section_content.setAttribute('class', 'column_minor_content')
			new_minor_section.setAttribute('class', 'column_minor_sections')
			new_minor_section.setAttribute(
				'id',
				this.state.id + '_minor_section' + (i + 1)
			)

			new_minor_section.appendChild(minor_section_title)
			new_minor_section.appendChild(minor_section_content)
			minor_section_container.appendChild(new_minor_section)
		}
	}
	render() {
		return (
			<div id={this.state.id}>
				<p id={this.state.id + '_bigtitle'} class='column_sections_bigtitle'>
					{this.state.bigtitle}
				</p>
			</div>
		)
	}
}
import '../../css/column/column_pages/Column_annotation.css'

class Column_annotation extends Component {
	constructor(props) {
		super(props)
		this.state = {
			annotation: this.props.annotation,
			id: this.props.id,
		}
		this.addAnno = this.addAnno.bind(this)
	}
	addAnno(i, content) {
		let tag_container = document.getElementById(this.state.id)
		let newtag = document.createElement('li')
		newtag.setAttribute('href', '#')
		newtag.setAttribute('class', 'column_annotation')
		newtag.setAttribute('id', this.state.id + '_' + i)
		newtag.innerHTML = content + '\n'
		tag_container.appendChild(newtag)
	}
	componentDidMount() {
		for (let i = 1; i < this.state.annotation.length + 1; i++) {
			this.addAnno(i, this.state.annotation[i - 1])
		}
	}
	render() {
		return (
			<div id='Anno_space'>
				<div id={this.state.id} class='column_annotation'></div>
			</div>
		)
	}
}
