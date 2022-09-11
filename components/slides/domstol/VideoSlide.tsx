import { motion } from 'framer-motion';
import React from 'react';
import Video from '../../common/Video';

interface VideoSlideProps {
    src: string;
    autoplay: boolean
}

const VideoSlide: React.FC<VideoSlideProps> = (props) => {

    return (
        <section>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
            >
                <Video src={props.src} autoplay={props.autoplay}></Video>
            </motion.div>
        </section>
    );
};

export default VideoSlide;