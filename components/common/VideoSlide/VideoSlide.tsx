import { motion } from 'framer-motion';
import React from 'react';
import Video from './Video';

interface VideoSlideProps {
    src: string;
    autoplay: boolean
    landscape?: boolean;
}

const VideoSlide: React.FC<VideoSlideProps> = (props) => {

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <Video src={props.src} autoplay={props.autoplay} landscape={props.landscape} />
        </motion.section>
    );
};

export default VideoSlide;
