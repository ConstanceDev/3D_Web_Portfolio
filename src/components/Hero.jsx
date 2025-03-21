import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 
      top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-1 flex-col justify-start items-start gap-5">
          <div className="w-5 h-5 rounded-gradient bg-[#915eff]"/>
          <div />
        </div>

      </div>

    </section>  )
}

export default Hero