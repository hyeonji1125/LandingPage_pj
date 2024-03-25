import './MainPage.css';

const MainPage = () => {

	return(
		<div>
			<div className='bgimage'></div>
			<div className='mainpage'>
				<div className='main-first-text'>단 하루를 머물러도 집이니까</div>
				<div className='main-second-text'>오늘은 캠핑</div>
				<div>
					<p>내가 머무는 공간을 위해</p>
					<p>꼼꼼히 알아보고 꾸미는 그 모든 마음이</p>
					<p>집을 꾸미는 것과 똑 닮았으니까</p>
				</div>
				<div>
					<p>빌딩 숲을 벗어나 자연 속에 가꾼</p>
					<p>감성 가득 하루살이 집들이를 소개합니다.</p>
				</div>
			</div>
				<div className='center'>
				<button className='mainButton'>기획전 보러가기</button>
				<img className='scroll-img' src='../../images/scroll.png'></img>
				</div>
		</div>
	)
}

export default MainPage;