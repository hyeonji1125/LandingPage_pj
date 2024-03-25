import { motion } from "framer-motion";
import './Trend.css';

const Trend = () => {

	return(
		<div>
			<div className='trend-container'>
			<motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{
        opacity: 1,
        y: 0,
      transition: { delay: 0.3,
				duration: 1},
      }}
			>
				<div className='trend-text'>이번 달 캠핑 트렌드를 알고 싶다면?</div>
			</motion.div>
			</div>
				<motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{
				opacity: 1,
        y: 0,
				transition: { delay: 0.5,
					duration: 1},
				}}
				>
					<div className='slide-box'>
						<div className='slide-box2'>
						<div className='marquee'>
							<img className='trend-img' src='../../images/desktop4_img1.jpg'></img>
							<img className='trend-img' src='../../images/desktop4_img2.jpg'></img>
							<img className='trend-img' src='../../images/desktop4_img3.jpg'></img>
							<img className='trend-img' src='../../images/desktop4_img4.jpg'></img>
							<img className='trend-img' src='../../images/desktop4_img5.jpg'></img>
							</div>
							<div className='marquee-second'>
							<img className='trend-img' src='../../images/desktop4_img1.jpg'></img>
							<img className='trend-img' src='../../images/desktop4_img2.jpg'></img>
							<img className='trend-img' src='../../images/desktop4_img3.jpg'></img>
							<img className='trend-img' src='../../images/desktop4_img4.jpg'></img>
							<img className='trend-img' src='../../images/desktop4_img5.jpg'></img>
							</div>
						</div>
					</div>
			</motion.div>
			<motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{
        opacity: 1,
        y: 0,
      transition: { delay: 0.5,
				duration: 1},
      }}
			>
				<div className='trend-container'>
					<button className='mainButton'>기획전 보러가기</button>
				</div>
			</motion.div>
			<div className="margin"></div>
		</div>
	)
}

export default Trend;