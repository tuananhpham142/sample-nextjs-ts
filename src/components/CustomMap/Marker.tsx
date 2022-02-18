import { InfoWindow, InfoWindowProps, Marker } from '@react-google-maps/api';
import React, { ReactNode, useState } from 'react';
export interface CustomMapMarkerProps {
    position: google.maps.LatLng | google.maps.LatLngLiteral;
    icon?: string | google.maps.Icon | google.maps.Symbol;
    info?: ReactNode;
    infoProps?: InfoWindowProps;
    title?: string;
    label?: string;
    options?: google.maps.MarkerOptions;
    /** Start an animation. Any ongoing animation will be cancelled. Currently supported animations are: BOUNCE, DROP. Passing in null will cause any animation to stop. */
    animation?: google.maps.Animation;
    /** If true, the marker receives mouse and touch events. Default value is true. */
    clickable?: boolean;
    /** Mouse cursor to show on hover */
    cursor?: string;
    /** If true, the marker can be dragged. Default value is false. */
    draggable?: boolean;
    /** The marker's opacity between 0.0 and 1.0. */
    opacity?: number;
    /** Image map region definition used for drag/click. */
    shape?: google.maps.MarkerShape;
    /** If true, the marker is visible */
    visible?: boolean;
    /** All markers are displayed on the map in order of their zIndex, with higher values displaying in front of markers with lower values. By default, markers are displayed according to their vertical position on screen, with lower markers appearing in front of markers further up the screen. */
    zIndex?: number;
    /** Clusters are redrawn when a Marker is added unless noClustererRedraw? is set to true. */
    noClustererRedraw?: boolean;
    /** This event is fired when the marker icon was clicked. */
    onClick?: (e: google.maps.MapMouseEvent) => void;
    /** This event is fired when the marker's clickable property changes. */
    onClickableChanged?: () => void;
    /** This event is fired when the marker's cursor property changes. */
    onCursorChanged?: () => void;
    /** This event is fired when the marker's animation property changes. */
    onAnimationChanged?: () => void;
    /** This event is fired when the marker icon was double clicked. */
    onDblClick?: (e: google.maps.MapMouseEvent) => void;
    /** This event is repeatedly fired while the user drags the marker. */
    onDrag?: (e: google.maps.MapMouseEvent) => void;
    /** This event is fired when the user stops dragging the marker. */
    onDragEnd?: (e: google.maps.MapMouseEvent) => void;
    /** This event is fired when the marker's draggable property changes. */
    onDraggableChanged?: () => void;
    /** This event is fired when the user starts dragging the marker. */
    onDragStart?: (e: google.maps.MapMouseEvent) => void;
    /** This event is fired when the marker's flat property changes. */
    onFlatChanged?: () => void;
    /** This event is fired when the marker icon property changes. */
    onIconChanged?: () => void;
    /** This event is fired for a mousedown on the marker. */
    onMouseDown?: (e: google.maps.MapMouseEvent) => void;
    /** This event is fired when the mouse leaves the area of the marker icon. */
    onMouseOut?: (e: google.maps.MapMouseEvent) => void;
    /** This event is fired when the mouse enters the area of the marker icon. */
    onMouseOver?: (e: google.maps.MapMouseEvent) => void;
    /** This event is fired for a mouseup on the marker. */
    onMouseUp?: (e: google.maps.MapMouseEvent) => void;
    /** This event is fired when the marker position property changes. */
    onPositionChanged?: () => void;
    /** This event is fired for a rightclick on the marker. */
    onRightClick?: (e: google.maps.MapMouseEvent) => void;
    /** This event is fired when the marker's shape property changes. */
    onShapeChanged?: () => void;
    /** This event is fired when the marker title property changes. */
    onTitleChanged?: () => void;
    /** This event is fired when the marker's visible property changes. */
    onVisibleChanged?: () => void;
    /** This event is fired when the marker's zIndex property changes. */
    onZindexChanged?: () => void;
    /** This callback is called when the marker instance has loaded. It is called with the marker instance. */
    onLoad?: (marker: google.maps.Marker) => void;
    /** This callback is called when the component unmounts. It is called with the marker instance. */
    onUnmount?: (marker: google.maps.Marker) => void;
}
const CustomMapMarker = (props: CustomMapMarkerProps) => {
    const { position, onClick, info, icon, title, label, infoProps, ...otherProps } = props;
    const [showInfo, setShowInfo] = useState(false);

    // useMapEvents({
    //     click: onClick,
    // });

    return (
        <Marker
            position={position}
            // onMouseOver={() => setShowInfo(true)}
            // onMouseOut={() => setShowInfo(false)}
            onClick={() => setShowInfo(true)}
            title={title}
            label={label}
            clickable={true}
            {...(icon && {
                icon: icon,
            })}
            {...otherProps}
        >
            {showInfo && info && (
                <InfoWindow onCloseClick={() => setShowInfo(false)} {...infoProps}>
                    {info}
                </InfoWindow>
            )}
        </Marker>
    );
};

export default CustomMapMarker;
