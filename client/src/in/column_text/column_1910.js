import React, { Component } from 'react';
import Column_content from './component/column_content';
import './column_text.css';
import {NavBar_in} from '../../component/AppBar_in';

class Column_1910 extends Component{
    render(){
		const column_1910_article = {
			title:['2016級 林奕辰 （Bravo AI 洽吧智能執行長）','2014級 沈昇勳 （Bravo AI 洽吧智能技術長）'],
			hashtags:['系友專訪','林奕辰','沈昇勳','2016級','2014級','BravoAI','洽吧智能','MachineLearning','核保理賠自動化','電腦視覺','自然語言處理','深度學習'],
			sections:[
				{
					bigtitle:'一、對大學的反思與日後影響',
					sections:[
						{
							title:'回頭看大學經歷與對於未來的影響',
							section:'現在回頭來看，覺得當時可能會很熱血於某一件事情上，但老實說會反思那時能夠以更有效率的方式如何做得比當時更好。現在來看也會比較注重大家對於一個企劃的在意程度，來決定是否花時間在這件事上。不過，參加各式各樣的活動也使我能夠有機會與不同思維的人合作，每個人都會有自己擅長的事情，比如說寫文章、技術層面、人際溝通等。在工作時，會遇到更多有不同個性與思維的人，大學時這些經歷在我工作上很有幫助。'
						},
						{
							title:'大學時期實習的建議',
							section:'我覺得這是個人的選擇，在我們的年代，實習並不是那麼流行，因此只有一部分同學會有這個經驗。但我認為，當年紀越來越大，會發現自己的暑假越來越少，因此其實如果能在年輕的時候把握暑假長達兩個月的假期，去做些不一樣的事情，我覺得是很棒的一件事。當然實習也很好，但你同時犧牲了一個假期，就看你想要過什麼樣的生活。'
						},
						{
							title:'培養成具有多元能力的Ｔ型人才',
							section:'我在大學時期有修像是社科院或是管理學院的課程，在這些課程中，其實會發現每個科系都有不同注重的地方，這些不同的思維也許對一個工程師來說沒有幫助。然而，在未來的工作中有時碰到的問題並不能單純只以工程思維來解決，其中可能包含了更多像是人與人之間互動的細節。我覺得跨科系的課程可以讓你對世界的看法不同，面對問題時也能夠降低出錯的機率。至於是否一定要去修課？我覺得也是一種選擇。如果你比較喜歡接觸多元面相的工作，那麼我很建議要修這些課程。當然，如果你只是想成為一個工程師，那倒可不必。我認為在電機系的我們有很多選擇籌碼，有太多機會可以選擇。因此想清楚，自己要發展成怎樣的人，不要後悔就好。'
						},
						{
							title:'是甚麼樣的契機開始做AI？',
							section:'沈昇勳：我是因為修了李宏毅教授的專題，當時就有接觸到像是ML之類的技術等，因此這個經驗也讓我之後工作往這個方向發展。林奕辰：我認為AI在當時是一個具有突破的技術，我不見得很喜歡它，但我認為我能夠將這個技術做得更好、能夠更滿足大眾的需求。'
						}
					]
				},
				{
					bigtitle:'二、讀研究所的必要性',
					sections:
					[
						{
							title:'研究所經驗對創業影響（沈昇勳）',
							section:'就讀研究所，學到的能力主要有兩個：一是獨立解決問題的能力。這是在專題研究的過程中學到的，從自己找題目、摸索、開發到解決問題，能夠不依賴他人完成一份研究是過程中能夠學到最多的部分，而論文反而只是一種形式。二是組織已知並表達的能力。研究所學生通常身兼TA的工作，或是帶學弟妹做專題，經由從事這些工作，能訓練整合知識的能力。教學的過程，也能增進表達這些知識的能力。'
						},
						{
							title:'大學畢業後直接創業的心境（林奕辰）',
							section:'對於當下的我來說，選擇創業，並不是一個會失去什麼的決定，如果公司運營的不順利，那即便再申請一次碩士，我也能申請到。以整個職涯來看，早一年讀或晚一年讀碩士其實影響不大。也因為對創業有些想法，而對當下的我而言，創業是一個機會成本趨近於零的選擇。想不到明確不能做的原因，那就試試看吧。'
						}
					]
				},
				{
					bigtitle:'三、Bravo AI與自動理賠',
					sections:
					[
						{
							title:'從聊天機器人變成核保理賠自動化',
							section:'當初Bravo AI的第一個產品是聊天機器人，因為聽到報章雜誌說這個領域很紅，便決定試著做做看。做了之後才發現其實沒有太多利潤。聊天機器人在技術層面上有太多東西要去調控，也不確定在花了這麼多成本後會增加多少產品價值。相反的，把原本以人力去評估是否該核保的工作交給AI來做，很明確地可以知道省下多少人力，也就知道這個產品的價值。'
						},
						{
							title:'新創公司的挑戰',
							section:'做新東西的挑戰就是不知道構想產品的可行性。以通路為例，貿易公司需要擔心的大多不是產品本身好不好，而是銷售手段夠不夠精緻;新創軟體公司擔心的則大多是產品究竟做不做得出來，而且沒有先行者可以當作範本，很多細節都要一步一步去試，但一旦做出來很可能變成為該領域業界的領頭羊。不同類型的公司都會有各自的難處，而新創公司就是一旦搶下市占那就成功了，但在沒有穩定現金流錢就是虧錢的一天。'
						},
						{
							title:'參與新創公司所需特質',
							section:'在有限的時間把事情完成，也就是要有快速解決問題的能力。不一定要是最佳解，但很多時候就像奧卡姆剃刀（簡約法則）所說，最簡單的解通常就是最佳解。在新創公司這樣的要求尤其重要，每個產品都有他的生命週期。每晚一天完成就是可以產生利潤的時間就少一天。所以能在倒數計時結束前完成任務對前期的新創公司非常重要。'
						},
						{
							title:'讓機器取代人力，Bravo AI 扮演的角色',
							section:'Bravo AI 主要做的就是AI 在保險方面的應用，最經典的案例就是自動理賠。傳統上這些工作都是人在處理，但是人在處理這些問題的時候可能會有一些瑕疵，例如對醫療知識的不足可能會造成判定錯誤，而且人處理問題的速度也比較慢。如果整個流程自動化就能有系統地解決很大一部份的問題，也可以大幅度地壓縮處理的時間。'
						},
						{
							title:'機器學習發展到了極限？從學界走到業界',
							section:'如果你看那些影像處理和辨識的論文，每個都達到了非常高的準確率，你或許會覺得這些領域已經進展到了極致，但這代表這樣的技術已經成熟了嗎？如果是的話，為甚麼市面上很少有應用這些技術的產品呢？我想這是學界與業界觀點的不同。大多數的論文只需要追求精準度的提升。但在應用的時候其實還有很多問題要解決，做為一個應用工程師，我覺得你要做的是把那些在學界看起來已經成熟的技術，讓它們可以在實際情境當中被使用。當你準備實際應用在應用端的時候，可能會出現其他的問題，比方說你要讓業界的人知道要如何使用學界有什麼新知，這是一個很大的溝通門檻；或是在應用端會做很多學界不會做的考量，比方說成本、圖片大小與處理速度等，所以我想這都還有很大的發展空間。'
						},
						{
							title:'機器學習的未來，走出一條別人不會走的路',
							section:'觀察那些美國的成功案例，像是siri。他們通常都有很大量的資料，而且他們做這樣的產品有很明確的目的，就是這些東西可以被實際應用在他們的其他產品上。對台灣的公司來說，最大的挑戰便是：要如何以少量的資料做出有價值的東西。當然，從資料的角度來看，我們不一定能跟Facebook 或Google 這類擁有大量資料的公司競爭，但是實際上還有很多應用的場域是沒有人做的，比方說AI 在製造業與金融業的應用。有很多其他的產業會需要AI，如果你想做AI，可以往這些方向去發展。就好比美國很多大公司都在發展自駕車，但是長時間發展自駕車需要大量的資金資源，這在台灣不一定有辦法做到。但是如果往其他破碎、封閉的應用場景，我想在台灣還是有一些機會的。'
						}
					]
				},
				{
					bigtitle:'四、未來規劃與給大家的建議',
					sections:
					[
						{
							title:'在未來事業中會繼續走AI或嘗試不一樣的領域?長期的目標是?',
							section:'畢竟這間公司其實是在做保險相關的應用，做這項工作的成就感是來自於如何去解決問題，而不是著重在使用什麼工具，可以解決問題的方式就是好方式，所以不會特別執著在使用AI。所以如果說會不會從AI轉換成其他領域，其實這天天都在做，但如果是說會不會從保險業轉換其他跑道也許是可能的，只不過應該還是相近的領域例如金融業銀行業等等。而公司的長期目標當然是穩定賺錢，然後思考如何作出一個可以永續經營的東西。'
						},
						{
							title:'訂定人生目標及規劃人生的建議',
							section:'當過了一段時間回頭檢視自己的時候，能不能知道自己在做什麼或要什麼是非常重要的事。雖然思考未來的方向可能受限於自己對於社會的無知，而不會是一個成熟的想法，也會因為自己的無知，而感到恐懼，但追求看似自己想要的模糊的目標，才有可能真的完成這樣的目標，也才有機會去審視自己的下一步。千萬不要人云亦云，只追隨那些現階段當紅的產業，多一些自己的想法。當因為學校課堂、社群媒體、同儕團體之間的影響產生了一些想法，不要直接接受別人所說的。如果當下覺得什麼東西是有趣的，可以去試試看，但絕對要知道自己為什麼去做、是不是真的喜歡做這些事，而不是只是因為社會價值觀或是受到某些人的慫恿。不要因為隨著時間的推進而有壓力現在必須做什麼，就倉促的下決定。找到方向停下來好好想清楚自己要的是什麼，專注去做。即使晚了一點出發，也能走的踏實。'
						}
					]

				}

			],
			
			
			annotation:['特別感謝：林奕辰、沈昇勳','撰寫：何俊緯、周子庭、謝承霖、吳建翰、余欣澄','校稿彙整：翁瑋襄、鄭謹譯'],
			id:'column_1912'
		}
		return (
			<div>
				<Column_content content = {column_1910_article}/>
			</div>
        )
    }
}

export default Column_1910
