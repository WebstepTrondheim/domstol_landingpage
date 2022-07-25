import { motion, Variants } from 'framer-motion'
import React from 'react'
import styles from './HairyGoals.module.scss'
import Image from 'next/image'
import Text from '../../../common/Text'
const HairyGoals = () => {

    const descriptionContainer: Variants = {
        hidden: {},
        show: {
            opacity: 1,
            transition: {
                delayChildren: 1,
                staggerChildren: 0.25
            }
        },
        leave: {
            y: 400,
            opacity: 0,
            transition: {
                duration: 1.5,
                delay: 0.5
            }
        }
    }

    const item = {
        hidden: {
            opacity: 0,
            x: 200
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1
            }
        }
    }

    return (
        <section className={styles.section}>
            <div className={styles.media}>
                <motion.div
                    initial={{ x: -200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ y: -400, opacity: 0 }}
                    transition={{
                        delay: 0.5,
                        duration: 1.5,
                    }}
                >
                    <Image className={styles.hermanImage}
                        src="/assets/herman_seip.jpg"
                        alt="bilde av Herman Seip"
                        width={435}
                        height={580}
                        objectFit={'cover'}
                    ></Image>
                </motion.div>
            </div>
            <motion.div
                className={styles.description}
                variants={descriptionContainer}
                initial="hidden"
                animate="show"
                exit="leave"
            >   <div className={styles.intro}>
                    <div className={styles.stickyDiv}>
                        <motion.h2 variants={item}>HÅRETE MÅL</motion.h2>
                        <motion.p variants={item} >
                            Det digitale skiftet er kommet til Domstolene.
                            DA har tro på teknologi og de har en klar
                            ambisjon:
                        </motion.p>
                    </div>
                </div>
                <div className={styles.quoteSignature}>
                    <motion.q variants={item} className={styles.quote}>
                        Vi skal være best i verden!
                    </motion.q>
                    <motion.span variants={item} className={styles.signature}>
                        <span>
                            Herman Seip,
                        </span>
                        Arkitekt hos DA
                    </motion.span>
                </div>
                <motion.div variants={item}>
                    <Text isOverlay>
                        DA har ambisjon om å la norske borgere
                        kommunisere digitalt med Domstolene. Når Norge
                        digitaliseres må Domstolene henge med. </Text>
                    <Text isOverlay> Dette handler om ryggraden av det norske samfunnet, om
                        systemer for effektiv samhandling rundt
                        strafferett, sivilrett og tvister.
                    </Text>
                    <Text isOverlay>
                        DA er en offensiv oppdragsgiver med tro på ny
                        teknologi. De drømmer om verdens beste løsninger
                        og vi skal være med og gi dem det. </Text>
                    <Text isOverlay>Oppdraget for Domstoladministrasjon har skapt et drømmemiljø
                        for softwareutviklere på jakt etter oppgaver som
                        virkelig betyr noe.
                    </Text>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default HairyGoals
