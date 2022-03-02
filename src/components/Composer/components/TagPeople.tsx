import HaloRichCheckbox from '@/components/HaloCheckbox/HaloRichCheckbox';
import HaloFreeStyleInput from '@/components/HaloFreeStyleInput';
import { TaggedPeople } from '@/models/Feed/FeedModel';
import { isInArray } from '@/utils/array.utils';
import { InputAdornment } from '@mui/material';
import debounce from 'lodash/debounce';
import pullAllBy from 'lodash/pullAllBy';
import unionBy from 'lodash/unionBy';
import { Fragment, FunctionComponent, useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';

interface TagPeopleProps {
    className?: string;
}

const TagPeople: FunctionComponent<TagPeopleProps> = (props: TagPeopleProps) => {
    const { className } = props;

    const { register, formState, handleSubmit, watch, setValue, getValues, clearErrors, unregister, control } =
        useForm<{ search: string; tagging: Array<any> }>({
            mode: 'onChange',
            reValidateMode: 'onChange',
            resolver: undefined,
            context: undefined,
            criteriaMode: 'firstError',
            shouldFocusError: true,
            defaultValues: {
                search: '',
                tagging: [
                    {
                        name: 'b',
                        id: '2',
                        color: 'primary',
                    },
                ],
            },
        });

    const watchSearch: string = watch('search');

    const sampleList: Array<TaggedPeople> = [
        {
            name: 'a',
            id: '1',
            color: 'primary',
        },
        {
            name: 'b',
            id: '2',
            color: 'primary',
        },
        {
            name: 'c',
            id: '3',
            color: 'primary',
        },
        {
            name: 'd',
            id: '4',
            color: 'primary',
        },
        {
            name: 'e',
            id: '5',
            color: 'primary',
        },
    ];

    const handleSelectPeople = useCallback((people: TaggedPeople, selected: boolean) => {
        if (!selected) {
            setValue('tagging', pullAllBy([...getValues('tagging')], [people], 'id'));
        } else {
            setValue('tagging', unionBy([...getValues('tagging'), people], 'id'));
        }
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
                {sampleList.map((el: TaggedPeople) => {
                    return (
                        <HaloRichCheckbox
                            data={{
                                title: `People user ${el.name}`,
                                value: el.id,
                                disabled: false,
                                color: el.color,
                                subtitle: 'asdasdasdasda',
                            }}
                            onChange={({ selected }) => handleSelectPeople(el, selected)}
                            variant='solid'
                            defaultValue={isInArray(getValues('tagging'), el, 'id')}
                            color='primary'
                            circle
                            icon={`flaticon2-search`}
                            size='sm'
                            control={control}
                            name='tagging'
                            rules={{
                                validate: (value) => value || 'Value can not be null',
                            }}
                            errors={formState.errors}
                        />
                    );
                })}
            </div>
        </Fragment>
    );
};

export default TagPeople;
