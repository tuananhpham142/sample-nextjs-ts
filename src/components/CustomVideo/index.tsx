import { MediaItem } from '@/models/Media/MediaModel';
import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Fragment, FunctionComponent, useRef, useState } from 'react';
import ReactPlayer from 'react-player/lazy';

const useStyles = makeStyles<Theme, CustomVideoProps>((theme: Theme) => ({}));

interface dialogStateObject {
    itemIndex: any;
    isOpen: boolean;
}

export interface VideoSettingProps {
    pip?: boolean;
    playing?: boolean;
    controls?: boolean;
    light?: boolean;
    volume?: number;
    muted?: boolean;
    played?: number;
    loaded?: number;
    duration?: number;
    playbackRate?: number;
    loop?: boolean;
}
interface CustomVideoProps extends VideoSettingProps {
    src: string;
    className?: string;
    width?: number | string;
    height?: number | string;
    pauseVideoOnClick?: boolean;
    onClick?: (player: ReactPlayer | undefined) => void;
}
export type videoMediaItemProps = Omit<MediaItem, 'type'>;

const CustomVideo: FunctionComponent<CustomVideoProps> = (props: CustomVideoProps) => {
    const classes = useStyles(props);
    const videoRef = useRef<ReactPlayer | undefined>();
    const {
        src,
        className,
        pip,
        playing,
        controls,
        light,
        volume,
        muted,
        played,
        loaded,
        duration,
        playbackRate,
        loop,
        width,
        height,
        pauseVideoOnClick,
        onClick,
    } = props;

    const [playingControl, setPlaying] = useState<boolean>(playing || false);

    const handlePlayPause = () => {
        setPlaying(!playingControl);
    };
    const handleStop = () => {
        // this.setState({ url: null, playing: false });
    };
    const handleVolumeChange = (e: Event) => {
        // this.setState({ volume: parseFloat(e.target.value) });
    };

    const handleSetPlaybackRate = (e: Event) => {
        // this.setState({ playbackRate: parseFloat(e.target.value) });
    };

    const handleOnPlaybackRateChange = (speed: number) => {
        // this.setState({ playbackRate: parseFloat(speed) });
    };

    const handleTogglePIP = () => {
        // this.setState({ pip: !this.state.pip });
    };
    return (
        <Fragment>
            {ReactPlayer.canPlay(src) ? (
                <ReactPlayer
                    ref={(player) => {
                        if (player) videoRef.current = player;
                    }}
                    onClick={() => {
                        if (pauseVideoOnClick) handlePlayPause();
                        if (typeof onClick === 'function') onClick(videoRef.current);
                    }}
                    className={className}
                    width={width || '100%'}
                    height={height || '100%'}
                    url={src}
                    pip={pip}
                    playing={playingControl}
                    controls={controls}
                    light={light}
                    loop={loop}
                    playbackRate={playbackRate}
                    volume={volume}
                    muted={muted}
                    onReady={() => {}}
                    onStart={() => {}}
                    // onPlay={this.handlePlay}
                    // onEnablePIP={this.handleEnablePIP}
                    // onDisablePIP={this.handleDisablePIP}
                    // onPause={this.handlePause}
                    // onBuffer={() => console.log('onBuffer')}
                    // onPlaybackRateChange={this.handleOnPlaybackRateChange}
                    // onSeek={(e) => console.log('onSeek', e)}
                    // onEnded={this.handleEnded}
                    // onError={(e) => console.log('onError', e)}
                    // onProgress={this.handleProgress}
                    // onDuration={this.handleDuration}
                />
            ) : (
                <div className='d-flex align-items-center justify-content-center'>This is not video type!</div>
            )}
        </Fragment>
    );
};
CustomVideo.defaultProps = {
    playing: true,
    controls: true,
    loop: true,
    muted: false,
};

export default CustomVideo;
