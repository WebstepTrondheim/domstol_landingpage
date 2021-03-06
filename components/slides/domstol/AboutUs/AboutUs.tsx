import React from 'react'
import styles from './AboutUs.module.scss'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Text from '../../../common/Text'

const AboutUs = () => {
    return (
        <section className={styles.section} >
            <div className={styles.media}>
                <motion.div
                    className={styles.weaponShield}
                    initial={{ x: -550 }}
                    animate={{ x: 0, z: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Image
                        src={'/assets/weapon-shield.jpg'}
                        layout="fixed"
                        width="250vw"
                        height="350vw"
                        alt={'weaponShield'}
                    />
                </motion.div>
                <motion.div
                    className={styles.bookStack}
                    initial={{ x: -650 }}
                    animate={{ x: 0, z: 1 }}
                    transition={{ duration: 1 }}
                >
                    <video
                        src={require('../../../../public/videos/Webstap_DA_loop_1_1208x1920.mp4')}
                        width="250px"
                        height="350px"
                        autoPlay
                        muted
                        loop
                        title='bookStack'

                    />
                </motion.div>
            </div>
            <div className={styles.textSection}>
                <motion.h1
                    className={styles.title}
                    initial={{ x: 420, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                >
                    <span className={styles.redLetter}>D</span>OMSTOL-
                    <br />
                    <span className={styles.redLetter}>A</span>DMINISTRASJONEN
                </motion.h1>
                <motion.div
                    className={styles.description}
                    initial={{ x: 420, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.25, ease: 'easeOut' }}
                >
                    <Text isOverlay>
                        Domstoladministrasjonen, DA, bygger systemene
                        som samler, sikrer og deler informasjonen. De
                        forvalter tilliten, sikrer uavhengigheten, m??ter
                        kravene og innfrir forventningene. P?? v??re vegne
                        - alle oss i Norge.
                    </Text>
                    <Text isOverlay>
                        ?? jobbe for DA betyr oppgaver med
                        mening. Mange oppgaver. For tjenester som betyr
                        noe.
                    </Text>
                </motion.div>
            </div>
        </section>
    )
}

export default AboutUs
