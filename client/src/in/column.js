import React, { Component } from 'react';
import './column.css';
class column extends Component{
    render(){
        return (
        <div id = "column_container">
			<div id = "column_section">
				<div id = "column_img"></div>
				<div id = "column_text">
					<div id = "column_info">
						<div id = "column_date">2019/12/07 星期六|</div>
						<div id = "column_name"> 吳建翰 余欣澄 莊永松 鄭謹譯 李筠婕</div>
					</div>
					<div id = "column_title">2012級 李昀樵 （技術副總 @ 17直播）</div>
					<div id = "column_subtitle">現任：Harvard MBA 學生<br/>
												曾任：17直播產品技術副總裁<br/>
												碩士：台灣大學電機研究所(2014)<br/>
												學士：台灣大學電機系(2012)
												</div>
				</div>
			</div>
			<div id = "column_section">
				<div id = "column_img"></div>
				<div id = "column_text">
					<div id = "column_info">
						<div id = "column_date">date|</div>
						<div id = "column_name">name</div>
					</div>
					<div id = "column_title">title</div>
					<div id = "column_subtitle">subtitle</div>
				</div>
			</div>
			<div id = "column_section">
				<div id = "column_img"></div>
				<div id = "column_text">
					<div id = "column_info">
						<div id = "column_date">date|</div>
						<div id = "column_name">name</div>
					</div>
					<div id = "column_title">title</div>
					<div id = "column_subtitle">subtitle</div>
				</div>
			</div>
        )
    }
}

export default column;
