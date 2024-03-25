import { motion } from "framer-motion";
import './StartCamping.css';

const StartCamping = () => {
	return(
		<div>
			<div className='start-container'>
			<motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{
        opacity: 1,
        y: 0,
      transition: { delay: 0.3,
				duration: 1},
      }}
    >
				<div className='start-text'>캠핑, 도대체 어떻게 시작해요?</div>
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
				<div className='start-sc-text'>
					<p>이것만은 꼭!</p> 
					<p>캠핑 입문 필수품</p>
				</div>
			</motion.div>
			<motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{
        opacity: 1,
        y: 0,
      transition: { delay: 0.5,
				duration: 1.3},
      }}
			>
					<div className='start-img-container'>
						<div className='img-bax1'>
							<img className='sc-img' src='../../images/desktop3_img1.jpg'></img>
							<img className='sc-img' src='../../images/desktop3_img2.jpg'></img>
							<img className='sc-img' src='../../images/desktop3_img3.jpg'></img>
						</div>
						<div className='img-bax1'>
							<img className='sc-img' src='../../images/desktop3_img4.jpg'></img>
							<img className='sc-img' src='../../images/desktop3_img5.jpg'></img>
							<img className='sc-img' src='../../images/desktop3_img6.jpg'></img>
						</div>
					</div>
			</motion.div>
			</div>
		</div>
	)
}

export default StartCamping;