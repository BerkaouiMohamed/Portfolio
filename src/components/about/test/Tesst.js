import './Tesst.css'


import {  motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import {  useRef, useState } from 'react'

function Tesst() {



  const mobiledivice= (window.innerWidth<500 )?true:false






  const el = useRef(null)
  const { scrollY } = useScroll();
const [display,setDisplay]=useState('flex')



  useMotionValueEvent(scrollY, "change", (latest) => {
latest>150?setDisplay("none"):setDisplay("flex")  })

console.log(window.innerWidth)
  const opacity = useTransform(scrollY, [0,20], [1, 0]);

  const scalee = useTransform(scrollY, [10,20], [1,mobiledivice?1: 1.3]);
  const y = useTransform(scrollY, [0,20], [0,mobiledivice?100: 100]);



  return (
    <div>
      <motion.div
        className="hero"
        ref={el}
        style={{
          opacity: opacity,display:display, scale:scalee,y:y
        }}
      >



        <motion.svg
style={{ display:display,scale:1}}

          id="loader" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1445.67 1692.28"><motion.path
            id="path"
            strokeWidth="5"
            stroke="rgba(30, 30, 30, 1)"
            strokeLinecap="round"
            fillOpacity="1"
            fill='rgba(0, 0, 0, 0.2)'

            class="cls-1" d="M949.27,80.15c-67-13.61-123.39-17.38-161-11.52C718.4,79.51,667.75,96,649.85,103.79a94,94,0,0,1,10.6-18.36c13-16.73,31-18.93,30.62-20.72-.67-3-47.74,1.65-89.22,12.6-102.5,27-232.33,108.86-294.14,245.43-32.37,71.54-40.9,167.52-40.9,167.52v95.45l9.11,407.56,33.15,227.55,45.2,145.42,104,162.36,117.56,78.72L718.51,1653l142.65-55.4,70-62.28,118.38-169.12,45.25-133.84s25.52-125,25.2-214.19c-13.18,42.24-31,90.66-31,90.66l-20.91,96.72L988.18,1261l-80.4,146.49-5.32-80.43-69.54-68.41-75.9-52.9-71.58.26-86.2,52.11-77.5,71.14v83.27l-108.54-172-74.71-57.37-21-123.87-.1-.39C312.73,1044,295,993.42,295,993.42S289.45,521.81,401.21,463c8.14-4.28,46.75-23.37,46.75-23.37l76-42.86,68.52,7.38a13.81,13.81,0,0,0,3.25.09c5.5-1.08,41.21-5.52,41.21-5.52l42.72,4,1.69.09C697,403.45,716,392.23,716,392.23l43,23.46a14.55,14.55,0,0,0,3.28.56l80.69-3.79a8.25,8.25,0,0,1,2.16.2,8,8,0,0,1,2.31,1L970,455.2l25.76,1.5,2.73,1.43s104.68,81.26,119.16,99.21c0,0,41.6,40.17,41.3,131.61-.18,55.85-13.11,114.44-11.79,125.73.18,1.59-.55,3,.18,1.59l28.17-121.58c10.89-118.71,1.07-201.14-2-232.77-1.09-12-7.21-41.78-7.21-41.78s9.54,6.95,13,10.47,8,8.1,9.84,11.27c0,0-8.1-92.25-67.28-158.1-58.78-65.4-144.9-95-144.9-95a59.81,59.81,0,0,1,33.23-13.88c40.3-3.6,32.63,2.33,43.1.2-41.92-41.2-77.88-52.66-103.29-56.84C887.7,108,883,114,883.75,113.3c0,0,6.57-11.16,22.13-20.2C913.29,88.79,934.78,83.47,949.27,80.15ZM576.76,1333.92l109.58-58.33a2.14,2.14,0,0,1,.4-.07h58.77a2.11,2.11,0,0,1,.37.06l108.9,59.18L878,1410.53l-22.66,55.26-45.41,22.77L765,1472.12l-7.24-58-79.7.43-4.51,58.54-45.16,19.24s-51.59-27.31-54.28-29a2,2,0,0,1-.4-.48L556,1410ZM212,1202.16" />
        </motion.svg>

        <motion.div


          className="aboutheadertext"


        >

          <h2 >Hi Again</h2>

        </motion.div>
        <motion.div style={{display:display}} initial={{ y: 0 }}
          animate={{ y: 20 }}

          transition={{ duration: 0.8, ease: 'easeInOut', repeat: Infinity }}
          id='scrolldown'>
          <svg viewBox="-32.5 0 150 150" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              id="path"
              strokeWidth="0.5"
              stroke="rgba(30, 30, 30, 1)"
              strokeLinecap="round"
              initial={{ pathLength: 0, fill: "none", }}
              animate={{ pathLength: 1, fill: 'none', }}
              transition={{
                default: { duration: 0.5, ease: "easeInOut" },
                fillOpacity: { duration: 0.1, ease: "easeIn", repeat: Infinity }
              }}
              d="M3.293,14.707a1,1,0,0,1,1.414-1.414L11,19.586V2a1,1,0,0,1,2,0V19.586l6.293-6.293a1,1,0,0,1,1.414,1.414l-8,8a1,1,0,0,1-.325.216.986.986,0,0,1-.764,0,1,1,0,0,1-.325-.216Z"
              fill="#000000" />
          </svg>
        </motion.div>
      </motion.div>
      <motion.div
        className="blur-mask"
        style={{ 
          opacity: opacity,
         
          backdropFilter: 'blur(25px)',display:display
        }}

      />

    </div>
  )
}

export default Tesst