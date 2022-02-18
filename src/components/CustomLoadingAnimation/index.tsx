import LottieLoading from '@/assets/lottie/loading.json';
import { FunctionComponent } from 'react';
import Lottie from 'react-lottie';
interface CustomLoadingAnimationProps {
    className?: string;
    width?: number;
    height?: number;
}
const CustomLoadingAnimation: FunctionComponent<CustomLoadingAnimationProps> = (props: CustomLoadingAnimationProps) => {
    const { width, height } = props;
    return (
        <Lottie
            options={{
                loop: true,
                autoplay: true,
                animationData: LottieLoading,
                rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice',
                },
            }}
            height={height || 120}
            width={width || 120}
        />
    );
};

export default CustomLoadingAnimation;
