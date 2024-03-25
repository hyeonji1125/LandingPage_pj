import { motion } from "framer-motion";
import './MainPage.css';

const MainPage = () => {

	return(
		<div>
			<div className='bgimage'></div>
			<div className='mainpage'>
			<motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{
        opacity: 1,
        y: 0,
      transition: { delay: 0.1,
				duration: 1.5 },
      }}
    >
			<div className='main-first-text'>단 하루를 머물러도 집이니까</div>
		</motion.div>

		<motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{
        opacity: 1,
        y: 0,
      transition: { delay: 0.3,
				duration: 1.5 },
      }}
    >
			<div className='main-second-text'>오늘은 캠핑</div>
		</motion.div>

		<motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{
        opacity: 1,
        y: 0,
      transition: { delay: 0.5,
				duration: 1.5 },
      }}
    >
				<div>
					<p>내가 머무는 공간을 위해 꼼꼼히 알아보고 꾸미는 그 모든 마음이 집을 꾸미는 것과 똑 닮았으니까</p>
					<p>빌딩 숲을 벗어나 자연 속에 가꾼 성 가득 하루살이 집들이를 소개합니다</p>
				</div> 
		<button className='mainButton'>기획전 보러가기</button>
		</motion.div>
		</div>
				<div className='center'>
				<motion.div
					className="scroll-img"
					animate={{ y: 100 }}
					transition={{ type: "spring" }}
				>
					<img className='scroll-img' src='../../images/scroll.png'></img>
				</motion.div>
				</div>
	</div>
	)
}

export default MainPage;