import HaloFreeStyleInput from '@/components/HaloFreeStyleInput';
import HaloSimpleCard from '@/components/HaloSimpleCard';
import { PlaceSuggestionType } from '@/models/Places/PlaceModel';
import { InputAdornment } from '@mui/material';
import debounce from 'lodash/debounce';
import { Fragment, FunctionComponent, useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';

interface PlaceCheckinProps {
    className?: string;
}

const PlaceCheckin: FunctionComponent<PlaceCheckinProps> = (props: PlaceCheckinProps) => {
    const { className } = props;

    const { register, formState, handleSubmit, watch, setValue, getValues, clearErrors, unregister, control } =
        useForm<{ search: string; checkin: PlaceSuggestionType | null }>({
            mode: 'onChange',
            reValidateMode: 'onChange',
            resolver: undefined,
            context: undefined,
            criteriaMode: 'firstError',
            shouldFocusError: true,
            defaultValues: {
                search: '',
                checkin: null,
            },
        });

    const watchSearch: string = watch('search');

    const sampleList: Array<PlaceSuggestionType> = [
        {
            name: 'Hà Nội',
            id: '1',
            lat: '',
            lng: '',
            distance: 12,
            unit: 'km',
            address: 'Ha noi, Ha noi, Viet Nam',
            img: 'https://images.pexels.com/photos/4652275/pexels-photo-4652275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {
            name: 'Hà Nội',
            id: '1',
            lat: '',
            lng: '',
            distance: 12,
            unit: 'km',
            address: 'Ha noi, Ha noi, Viet Nam',
            img: 'https://images.pexels.com/photos/4652275/pexels-photo-4652275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {
            name: 'Hà Nội',
            id: '1',
            lat: '',
            lng: '',
            distance: 12,
            unit: 'km',
            address: 'Ha noi, Ha noi, Viet Nam',
            img: 'https://images.pexels.com/photos/4652275/pexels-photo-4652275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {
            name: 'Hà Nội',
            id: '1',
            lat: '',
            lng: '',
            distance: 12,
            unit: 'km',
            address: 'Ha noi, Ha noi, Viet Nam',
            img: 'https://images.pexels.com/photos/4652275/pexels-photo-4652275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {
            name: 'Hà Nội',
            id: '1',
            lat: '',
            lng: '',
            distance: 12,
            unit: 'km',
            address: 'Ha noi, Ha noi, Viet Nam',
            img: 'https://images.pexels.com/photos/4652275/pexels-photo-4652275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {
            name: 'Hà Nội',
            id: '1',
            lat: '',
            lng: '',
            distance: 12,
            unit: 'km',
            address: 'Ha noi, Ha noi, Viet Nam',
            img: 'https://images.pexels.com/photos/4652275/pexels-photo-4652275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {
            name: 'Hà Nội',
            id: '1',
            lat: '',
            lng: '',
            distance: 12,
            unit: 'km',
            address: 'Ha noi, Ha noi, Viet Nam',
            img: 'https://images.pexels.com/photos/4652275/pexels-photo-4652275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {
            name: 'Hà Nội',
            id: '1',
            lat: '',
            lng: '',
            distance: 12,
            unit: 'km',
            address: 'Ha noi, Ha noi, Viet Nam',
            img: 'https://images.pexels.com/photos/4652275/pexels-photo-4652275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
    ];

    const handleSelectPlace = useCallback((place: PlaceSuggestionType) => {
        console.log(place);
        setValue('checkin', place);
    }, []);

    const handleSearchPeople = () => {
        // const data = await dispatch(getStockAutosuggests({ keyword: inputValue }));
        // let res = unwrapResult(data).data;
        // res = res.map((el) => ({
        //     ...el,
        //     value: el.id,
        //     name: `${el.symbol} - ${el.name}`,
        // }));
        console.log('searching...');
    };
    const debounceSearch = useCallback(debounce(handleSearchPeople, 1500), []);

    useEffect(() => {
        if (watchSearch.length >= 2) {
            debounceSearch();
        }
    }, [watchSearch]);

    return (
        <Fragment>
            <div className='w-100'>
                <HaloFreeStyleInput
                    disabled={false}
                    circle
                    id={`search`}
                    name={`search`}
                    placeholder='Search friends...'
                    startAdornment={
                        <InputAdornment position='start'>
                            <span className='flaticon-search text-white opacity-50' />
                        </InputAdornment>
                    }
                    control={control}
                    className='mb-2'
                />
                {sampleList.map((el: PlaceSuggestionType) => {
                    return (
                        <HaloSimpleCard
                            onClick={() => handleSelectPlace(el)}
                            title={el.name}
                            label={`${el.distance} ${el.unit}`}
                            color='light-primary'
                            subtitle={el.address}
                            imgUrl={el.img}
                            cardClickable
                            className='mb-2'
                        />
                    );
                })}
            </div>
        </Fragment>
    );
};

export default PlaceCheckin;
