'use client';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';
import { textVariant ,staggerContainer } from '../utils/motion';
import { RoadmapFeatures } from '../constants';
import styles from '../styles';
import { InsightCard, TitleText, TypingText } from '../components';


const RoadmapCard = ({roadmap}) => (
   <VerticalTimelineElement
    contentStyle={{background: '#1d1836' , color: '#fff'}}
    contentArrowStyle={{borderRight: '7px solid #232631'}}
    date={roadmap.date}
    iconStyle={{background: roadmap.iconBg}}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img 
           src={roadmap.icon}
           alt="/"
           className='w-[60%] h-[60%] object-contain'
        />
      </div>
    }
    >
      <div>
        <h3 className='text-purple-700 text-[24px] font-bold'>{roadmap.title}</h3>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2 '>
        {roadmap.tasks.map((tasks,index) => (
          <li key={`roadmap-tasks-${index}`} className='text-white-100 text-[14px] pl-1 tracking-wider'>
              {tasks}
          </li>
        ))}

      </ul>
   </VerticalTimelineElement>
)



const Insights = () => (
  <section className={`${styles.paddings} bg-black relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="Roadmap" textStyles="text-center text-2xl" />
      <TitleText title={<>Insight about SpaceBridge</>} textStyles="text-center" />
      <div className="mt-[50px] flex flex-col">
         <VerticalTimeline>
           {RoadmapFeatures.map((roadmap,index) => (
            <RoadmapCard key={index} roadmap={roadmap} />
           ))}
         </VerticalTimeline>
        
      </div>
    </motion.div>
  </section>
);

export default Insights;
