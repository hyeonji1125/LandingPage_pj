import './Trend.css';

const Trend = () => {

	return(
		<div>
			<div className='trend-container'>
				<div className='trend-text'>이번 달 캠핑 트렌드를 알고 싶다면?</div>
				<div>
				{/* <Slideshow/> */}
					<img className='trend-img' src='../../images/desktop4_img1.jpg'></img>
					<img className='trend-img' src='../../images/desktop4_img2.jpg'></img>
					<img className='trend-img' src='../../images/desktop4_img3.jpg'></img>
					<img className='trend-img' src='../../images/desktop4_img4.jpg'></img>
					<img className='trend-img' src='../../images/desktop4_img5.jpg'></img>
				</div>
				<button className='mainButton'>기획전 보러가기</button>
			</div>
		</div>
	)
}

export default Trend;