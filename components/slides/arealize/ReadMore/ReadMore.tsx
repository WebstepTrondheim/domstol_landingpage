import React, { useContext, useRef, useState } from "react";
import { Title } from '../../../common/Typography'
import ArticleCard from './ArticleCard'
import styles from './ReadMore.module.scss'
import { articleData } from './ArticleData'
import ArrowButton, { Direction } from '../../../common/ArrowButton';
import DottedProgressBar from "../../../common/DottedProgressBar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper";
import { DeviceContext } from "../../../common/Device";


const ReadMore = () => {
    const [currentCard, setCurrentCard] = useState<number>(1)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const [swiper, setSwiper] = useState<Swiper | null>(null)
    const [prevEl, setPrevEl] = useState<HTMLElement | null>(null)
    const [nextEl, setNextEl] = useState<HTMLElement | null>(null)

    const { isMobile } = useContext(DeviceContext);

    const slideTo = (index: number) => {
        swiper?.slideTo(index)
    }

    return (
        <section className={styles.section}>
            {isMobile ?
                <Title className={styles.title}>LES MER</Title>
                :
                <Title className={styles.title}>VIL DU LSESE MER?</Title>
            }
            <div className={styles.container}>
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 3,
                        slideShadows: false,
                    }}
                    pagination={false}
                    modules={[EffectCoverflow, Navigation, Pagination]}
                    navigation={{
                        nextEl,
                        prevEl,
                    }}
                    className={styles.myswiper}
                    initialSlide={currentCard}
                    onSlideChange={(swiper) => setCurrentCard(swiper.activeIndex)}
                    onSwiper={setSwiper}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {articleData.map((article, index) => {
                        return <SwiperSlide key={index}>
                            <ArticleCard
                                key={index}
                                title={article.title}
                                description={article.description}
                                image={article.image}
                                link={article.link}
                            />
                        </SwiperSlide>
                    })}
                </Swiper>
            </div >

            <div
                style={{
                    marginTop: '5rem',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '3rem',
                }}
                className={styles.pagination}
            >
                <div ref={node => setPrevEl(node)}>
                    <ArrowButton direction={Direction.Left} alt={''}>Forrige</ArrowButton>
                </div>
                <DottedProgressBar
                    size={articleData.length}
                    progress={currentCard}
                    onClick={(newCardIndex) => {
                        slideTo(newCardIndex)
                        setCurrentCard(newCardIndex)
                    }} />
                <div ref={node => setNextEl(node)}>
                    <ArrowButton direction={Direction.Right} alt={''}>Neste</ArrowButton>
                </div>
            </div>
        </section >
    )
}

export default ReadMore
