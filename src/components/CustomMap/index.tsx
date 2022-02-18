import { DEFAULT_LOCATION_CENTER, DEFAULT_ZOOM, GOOGLE_API_KEY } from '@/constants/map';
import { Paper, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import clsx from 'clsx';
import React, { Fragment, FunctionComponent } from 'react';
import CustomMapMarker, { CustomMapMarkerProps } from './Marker';

const useStyles = makeStyles<Theme, CustomMapProps>((theme) => ({}));
const containerStyle = {
    width: '100%',
    height: '400px',
    borderRadius: 8,
};

interface CustomMapProps {
    className?: string;
    zoom?: number;
    center: google.maps.LatLng | google.maps.LatLngLiteral;
    markers?: Array<CustomMapMarkerProps>;
    options?: google.maps.MapOptions;
    tilt?: number;
    /** Additional map types to overlay. Overlay map types will display on top of the base map they are attached to, in the order in which they appear in the overlayMapTypes array (overlays with higher index values are displayed in front of overlays with lower index values). */
    extraMapTypes?: google.maps.MapType[];
    /** When false, map icons are not clickable. A map icon represents a point of interest, also known as a POI. By default map icons are clickable. */
    clickableIcons?: boolean;
    /** The heading for aerial imagery in degrees measured clockwise from cardinal direction North. Headings are snapped to the nearest available angle for which imagery is available. */
    heading?: number;
    /** The initial Map mapTypeId. Defaults to ROADMAP. */
    mapTypeId?: string;
    /** A StreetViewPanorama to display when the Street View pegman is dropped on the map. If no panorama is specified, a default StreetViewPanorama will be displayed in the map's div when the pegman is dropped. */
    streetView?: google.maps.StreetViewPanorama;
    /** This event is fired when the user clicks on the map. An ApiMouseEvent with properties for the clicked location is returned unless a place icon was clicked, in which case an IconMouseEvent with a placeId is returned. IconMouseEvent and ApiMouseEvent are identical, except that IconMouseEvent has the placeId field. The event can always be treated as an ApiMouseEvent when the placeId is not important. The click event is not fired if a Marker or InfoWindow was clicked. */
    onClick?: (e: google.maps.MapMouseEvent) => void;
    /** This event is fired when the user double-clicks on the map. Note that the click event will also fire, right before this one. */
    onDblClick?: (e: google.maps.MapMouseEvent) => void;
    /** This event is repeatedly fired while the user drags the map. */
    onDrag?: () => void;
    /** This event is fired when the user stops dragging the map. */
    onDragEnd?: () => void;
    /** This event is fired when the user starts dragging the map. */
    onDragStart?: () => void;
    /** This event is fired when the mapTypeId property changes. */
    onMapTypeIdChanged?: () => void;
    /** This event is fired whenever the user's mouse moves over the map container. */
    onMouseMove?: (e: google.maps.MapMouseEvent) => void;
    /** This event is fired when the user's mouse exits the map container. */
    onMouseOut?: (e: google.maps.MapMouseEvent) => void;
    /** This event is fired when the user's mouse enters the map container. */
    onMouseOver?: (e: google.maps.MapMouseEvent) => void;
    /** This event is fired when the DOM contextmenu event is fired on the map container. */
    onRightClick?: (e: google.maps.MapMouseEvent) => void;
    /** This event is fired when the visible tiles have finished loading. */
    onTilesLoaded?: () => void;
    /** This event is fired when the viewport bounds have changed. */
    onBoundsChanged?: () => void;
    /** This event is fired when the map center property changes. */
    onCenterChanged?: () => void;
    /** This event is fired when the map heading property changes. */
    onHeadingChanged?: () => void;
    /** This event is fired when the map becomes idle after panning or zooming. */
    onIdle?: () => void;
    /** This event is fired when the projection has changed. */
    onProjectionChanged?: () => void;
    /** This event is fired when the map size has changed. */
    onResize?: () => void;
    /** This event is fired when the map tilt property changes. */
    onTiltChanged?: () => void;
    /** This event is fired when the map zoom property changes. */
    onZoomChanged?: () => void;
    /** This callback is called when the map instance has loaded. It is called with the map instance. */
    onLoad?: (map: google.maps.Map) => void | Promise<void>;
    /** This callback is called when the component unmounts. It is called with the map instance. */
    onUnmount?: (map: google.maps.Map) => void | Promise<void>;
    onViewportChanged?: (map: any, e?: Event) => void;
}

const CustomMap: FunctionComponent<CustomMapProps> = (props: CustomMapProps) => {
    const classes = useStyles(props);
    const { zoom, className, center, onViewportChanged, onUnmount, markers, ...otherProps } = props;
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: GOOGLE_API_KEY,
    });

    const [map, setMap] = React.useState(null);

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map);
    }, []);

    const handleUnmount = React.useCallback(function callback(map) {
        setMap(null);
        if (typeof onUnmount === 'function') onUnmount(map);
    }, []);

    return (
        <Fragment>
            <Paper className={clsx('w-100 rounded-8', classes.mapContainer)}>
                {isLoaded ? (
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        zoom={zoom || DEFAULT_ZOOM}
                        center={center}
                        onLoad={onLoad}
                        onUnmount={handleUnmount}
                        {...otherProps}
                    >
                        {markers &&
                            markers.length > 0 &&
                            markers.map((marker: CustomMapMarkerProps, index) => {
                                return <CustomMapMarker key={index} {...marker} />;
                            })}
                    </GoogleMap>
                ) : (
                    <></>
                )}
            </Paper>
        </Fragment>
    );
};
CustomMap.defaultProps = {
    center: DEFAULT_LOCATION_CENTER,
};
export default React.memo(CustomMap);
