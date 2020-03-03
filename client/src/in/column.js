import React, { Component } from 'react';
import {Switch,Redirect,Route,Link} from "react-router-dom"
import {column_1910_page } from "./column_text/column_pages";
import ReactDOM from "react-dom";
import './column.css';
import {NavBar_in} from '../component/AppBar_in';
import Dec_image from '../images/column/1912_photo.jpg';
import Oct_image from '../images/column/1910_photo.jpg';
import Sep_image from '../images/column/1909_photo.jpg';
import Aug_image from '../images/column/1908_photo.jpg';
import Jul_image from '../images/column/1907_photo.JPG';

class Column extends Component{
    render(){
		
        return (
        <div id = "column_container">
			<div id = "column_section" style={{marginTop:"8%"}}>
				<div id="column_img">
					<img src={Dec_image} alt="Dec. Image" className="column_image" />
				</div>
				<div id = "column_text">
					<div id = "column_info">
						<div id = "column_date">|2020/02/20 星期四</div>
						<div id = "column_name">&nbsp;李筠婕 鄭謹譯 莊永松 吳建翰 俞建琁 王廷峻</div>
					</div>
					<div id = "column_title">
						2008級 鄭恆之 （Technical Lead Manager @ Google Brain）
					</div>
					<div id = "column_subtitle">
						＊經歷＊<br/>
						現任：Google Brain Technical Lead Manager<br/>
						＊學歷＊<br/>
						博士：CMU ECE(2013)<br/>
						學士：台灣大學電機系(2008)
					</div>
					<div className = "column_prefix">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;目前任職於 Google Brain 的團隊技術領導者和軟體主管工程師的鄭恆之，從事大規模機器學習的研究與軟體開發。在2013年加入 Googe 的實習生行列進行廣告排行的研究，僅僅花費不到三年的時間，就從實習生轉正職於 Google Research 的軟體工程師並且晉升 Google Brain 的技術領導與主管工程師，亮麗的職涯經歷背後是堅實的學術基礎與多篇國際期刊論文的支撐。<br/>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;熱愛音樂的鄭恆之學長在大學時期曾任台大合唱團公演指揮，並在陳宏銘教授的 Multimedia Processing and Communications Lab 時於ACM Multimedia 等論壇發表三篇論文，畢業後於 CMU ECE 攻讀博士且專注於機器學習與多媒體訊號處理。研究成果在進入博班後達到高峰，屢次在移動通訊、普及計算和行動電腦運算領域發表高度影響力的文章，並在該論壇得到最佳論文獎的殊榮。
						<Link to="/in/Column/pages/1912">敬請期待...</Link>
					</div>
					
				</div>
				
			</div>

			<div id = "column_section" >
				<div id="column_img">
					<img src={Oct_image} alt="Oct. Image" className="column_image" />
				</div>
				<div id = "column_text">
					<div id = "column_info">
						<div id = "column_date">|2019/12/07 星期六</div>
						<div id = "column_name">&nbsp;翁瑋襄 鄭謹譯 何俊緯 周子庭 謝承霖 吳建翰 余欣澄</div>
					</div>
					<div id = "column_title">
						2016級 林奕辰 （Bravo AI 洽吧智能執行長）<br/>
						2014級 沈昇勳 （Bravo AI 洽吧智能技術長）
					</div>
					<div id = "column_subtitle">
						林奕辰<br/>
						現任：Bravo AI 洽吧智能執行長<br/>
						學士：台灣大學電機系(2016)<br/>
						沈昇勳<br/>
						現任：Bravo AI 洽吧智能技術長<br/>
						碩士：台灣大學電信所<br/>
						學士：台灣大學電機系(2014)
					</div>
					<div className = "column_prefix" id="column_sp">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;創立於2017年的BravoAI (洽吧智能)是一間AI公司，專注於研發、提供金融機構廣泛的軟體服務。運用其電腦視覺、自然語言處理、深度學習等AI專長，BravoAI協助人壽與保險公司研發核保、理賠等流程自動化的方案，不僅替客戶節省大量行政成本，也為公司打出了知名度。目前為止，BravoAI以達成台灣壽險市佔率第一，更計畫邁向國際化。<br/>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BravoAI主要由創辦人趙式隆、執行長林奕辰與技術長沈昇勳帶領，團隊著重於技術基礎研究與應用技術解決實際問題。
						{/*<a id="column_readmore" href="/Column_1910">Now constructing...</a>*/}
						<Link to="/in/Column/pages/1910">read more...</Link>
					</div>
					
				</div>
				
			</div>
			<div id = "column_section">
				<div id="column_img">
					<img src={Sep_image} alt="Sep. Image" className="column_image" />
				</div>
				<div id = "column_text">
					<div id = "column_info">
						<div id = "column_date">|2019/11/24 星期日</div>
						<div id = "column_name">&nbsp;李筠婕 鄭謹譯 莊永松 吳建翰 余欣澄</div>
					</div>
					<div id = "column_title">2012級 李昀樵 （技術副總 @ 17直播）</div>
					<div id = "column_subtitle">
						＊經歷＊<br/>
						現任：Harvard MBA 學生<br/>
						曾任：17直播產品技術副總裁<br/>
						＊學歷＊<br/>
						碩士：台灣大學電機所(2014)<br/>
						學士：台灣大學電機系(2012)<br/>
					</div>
					<div className = "column_prefix" >
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;李昀樵曾是李琳山教授語音實驗室的研究生，研究所時期除了研究外，更有進行小型創業，開發出新聞摘要軟件及搜尋公共腳踏車的APP，前者以兩萬元售出，後者成為該領域當時市占率最高的APP。之後，李昀樵加入17直播，監管每年五百萬的IT預算，帶領團隊從5人成長到107人，更將17 Media的首屏載入速度從4秒縮減到0.3秒，成為同業中最快速的。李昀樵在新創領域有豐富經驗，現更到Harvard MBA進修。
						<Link to="/in/Column/pages/1909">read more...</Link>
					</div>
					
				</div>
				
			</div>
			<div id = "column_section">
				<div id="column_img">
					<img src={Aug_image} alt="Aug. Image" className="column_image"/>
				</div>
				<div id = "column_text">
					<div id = "column_info">
						<div id = "column_date">|2019/09/17 星期二</div>
						<div id = "column_name">&nbsp;鄭謹譯 施彥宇 王德宇 曾&nbsp;&nbsp;&nbsp;晴 劉桓桓</div>
					</div>
					<div id = "column_title">2008級 方劭云（當屆最年輕升遷副教授）</div>
					<div id = "column_subtitle">
						＊經歷＊<br/>
						現任：國立臺灣科技大學電機系 副教授<br/>
						聯絡方式：syfang@mail.ntust.edu.tw<br/>
						＊學歷＊<br/>
						博士：台灣大學電子所 (2013)<br/>
						學士：台灣大學電機系 (2008)</div>
					<div className = "column_prefix" >
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2008畢業於台大電機，目前任職於臺灣科技大學的方劭云教授，僅僅不到十年的時間內已經取得了副教授的頭銜，能有這樣的榮譽，是背後無數國際期刊論文與比賽獲獎的支撐。<br/>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;方教授於IEEE/ACM網絡學報屢次發布論文，二度獲得該學報最佳論文獎的榮譽。自2016起更帶領台科大團隊於CAD Contest at ICCAD比賽中四度獲獎，為臺灣在EDA領域中頗具地位的人才。目前授課項目包括VLSI、邏輯設計、演算法、奈米積體電路實體設計，並持續於EDA、奈米積體電路實體設計、製造可行性/可靠性設計、ML設計最佳化等領域中深造。
						<Link to="/in/Column/pages/1908">read more...</Link>
					</div>
					
				</div>
				
			</div>
			<div id = "column_section">
				<div id="column_img">
					<img src={Jul_image} alt="Jul. Image" className="column_image"/>
				</div>
				<div id = "column_text">
					<div id = "column_info">
						<div id = "column_date">|2019/08/28 星期三</div>
						<div id = "column_name">&nbsp;鄭謹譯 李筠婕 莊永松 戴慕潔 吳建翰 毛弘仁</div>
					</div>
					<div id = "column_title">2012級 王易如 （行動貝果共同創辦人）</div>
					<div id = "column_subtitle">
						＊經歷＊<br/>
						現任：MoBagel 共同創辦人，任職營運長<br/>
						聯絡方式：iruwang@mobagel.com<br/>
						＊學歷＊<br/>
						碩士：Computer Science/Computer Hardware , Stanford University<br/>
						學士：台灣大學電機系 (2012)
					</div>
					<div className = "column_prefix">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;王易如於史丹佛大學取得碩士學位後，經由世界最大黑克松Salesforce $1Million Hackathon籌組MoBagel（行動貝果），目前任職該新創的營運長。MoBagel 致力於讓機器學習落地，目標讓人工智慧普及化，主要方向為APU (Advanced Preprocessing Unit)，根據AI的應用類別來進行資料前處理，增加預測準確度，目前已經與台灣許多產業龍頭合作。
						<Link to="/in/Column/pages/1907">read more...</Link>
					</div>
					
				</div>
				
			</div>
			
		</div>
        )
    }
}

export default Column;
