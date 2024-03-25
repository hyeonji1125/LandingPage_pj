import './House_Introduce.css'

const House_Introduce = () => {
	return(
		<div>
			<div className='house-container'>
				<div className='house-first-text'>자연 속 나의 집을 소개합니다!</div>
				<div className='img-house-container'>
					<div className= 'left-house-container'> 
						<img className='house-main-img' src='../../images/desktop2_img1.jpg'></img>
						<div className='camping-text'>
							장비&요리에 진심인<br></br>
							캠퍼의 기록
						</div>
						<div>
							<img className='house-mini-img' src='../../images/desktop2_mini_img1.jpg'></img>
							<img className='house-mini-img' src='../../images/desktop2_mini_img2.jpg'></img>
							<img className='house-mini-img' src='../../images/desktop2_mini_img3.jpg'></img>
							<img className='house-mini-img' src='../../images/desktop2_mini_img4.jpg'></img>
						</div>
					</div>
					<div className= 'right-house-container'>
						<div className='house-box'>
							<img className='house-img' src='../../images/desktop2_img2.jpg'></img>
							<div className='camping-text'>댕댕이와 함께,<br></br>
								숲 속 감성 캠핑
							</div>
						</div>
						<div>
							<img className='house-img' src='../../images/desktop2_img3.jpg'></img>
							<div className='camping-text'>회사 스트레스 날리는 주말,<br></br>
									뷰 맛집 탐험!
							</div>
						</div>
						<div>
							<img className='house-img' src='../../images/desktop2_img4.jpg'></img>
							<div className='camping-text'>별이 쏟아지는<br></br>
									은하수 아래의 캠핑
							</div>
						</div>
						<div>
							<img className='house-img' src='../../images/desktop2_img5.jpg'></img>
							<div className='camping-text'>사계절이 감긴<br></br>
									동화 같은 캠핑
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default House_Introduce