import { motion } from 'framer-motion'
import React, { useEffect } from 'react'
import ArrowButton, { Direction } from '../../../common/ArrowButton'
import styles from './Introduction.module.scss'
import Weight from '../../../../public/assets/domstol/weight.svg';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

interface IntroductionProps {
    allowScrolling: (value: boolean) => void;
}

const DomstolIntroduction: React.VFC<IntroductionProps> = ({ allowScrolling }) => {
    const { ref, inView } = useInView()

    useEffect(() => {
        allowScrolling(inView)
    }, [allowScrolling, inView]);

    return (
        <>
            <section className={styles.container}>

                <div className={styles.videoContainer}>
                    <video
                        src={require('../../../../public/assets/domstol/videos/Webstep_DA_illustrasjon_v02.mp4')}
                        autoPlay
                        muted
                        loop
                    ></video>
                </div>
            </section>
            <div className={styles.breakpoint} ref={ref}></div>
        </>
    )
}

export default DomstolIntroduction
