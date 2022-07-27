import { animate, motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './Number.module.scss';


const NumberSlide = () => {
    const [inViewRef, inView] = useInView();

    function Counter({ from, to }: { from: number, to: number }) {
        const nodeRef = useRef() as React.MutableRefObject<HTMLParagraphElement>;

        useEffect(() => {
            if (inView) {
                var node: any = nodeRef.current;

                const controls = animate(from, to, {
                    duration: 2,
                    onUpdate(value) {
                        node.textContent = Number(value.toFixed()).toLocaleString('no');
                    }
                });
                return () => controls.stop();
            }

        }, [from, to]);
        return <p className={styles.number} ref={nodeRef} />;
    }

    return (
        <motion.section className={styles.section}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}  >
            <div className={styles.extraheight}></div>
            <div className={styles.extraheight}></div>

            <motion.span ref={inViewRef} className={styles.number}
                initial={{
                    color: '#ffffff',
                }}
                whileInView={{
                    color: '#F2B355',
                }}
                viewport={{ once: false }}
                transition={{
                    color: { duration: 2, delay: 2 },
                }}
            >
                <Counter from={0} to={261974} />
            </motion.span>
            <div className={styles.extraheight}></div>
            <span>
                <p className={styles.text1}>Straffede personer i Norge i 2020.</p>
            </span>
            <div className={styles.extraheight}></div>
            <span>
                <p className={styles.text2}>Det krever å holde tunga rett i munnen. Og et system som er pålitelig.</p>
            </span>
            <div className={styles.extraheight}></div>
        </motion.section>
    );
};

export default NumberSlide;
