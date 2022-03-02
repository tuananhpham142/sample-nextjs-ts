import CustomButton from '@/components/CustomButton';
import CustomSingleDatePicker from '@/components/CustomDatePicker/CustomSingleDatePicker';
import CustomFreeStyleInput from '@/components/CustomFreeStyleInput';
import CustomRichRadioGroup from '@/components/CustomRadioGroup/CustomRichRadioGroup';
import DestinationFilter from '@/components/ViewGeneralComponent/DestinationFilter';
import OverlaySymbol from '@/components/ViewGeneralComponent/OverlaySymbol';
import { StayingForItem } from '@/models/common';
import { StayingFor } from '@/models/Search/SearchModel';
import moment from 'moment';
import { FunctionComponent, useState } from 'react';
import { useForm } from 'react-hook-form';

const stayingFor: Array<StayingForItem> = [
    {
        name: 'I know what I want',
        description: 'You already have your plan, search now.',
        value: 'PLAN',
        color: 'info',
    },
    {
        name: "I'm flexible",
        description: 'Go anywhere at anytime',
        value: 'FLEXIBLE',
        color: 'success',
    },
    {
        name: 'Day',
        description: 'Refreshing your mind with unique place',
        value: 'DAY',
        color: 'warning',
    },
    {
        name: 'Weekend',
        description: 'Weekend hideaway from work',
        value: 'WEEKEND',
        color: 'danger',
    },
    {
        name: 'Week',
        description: 'Stay for a week with fairly discount price',
        value: 'WEEK',
        color: 'dark',
    },
    {
        name: 'Monthly',
        description: 'Looking for a long-term staying, we have it right here',
        value: 'MONTH',
        color: 'primary',
    },
];

interface HomeComponentProps {}

const HomeComponent: FunctionComponent<HomeComponentProps> = (props: HomeComponentProps) => {
    const [focusedStartDate, setFocusedStartDate] = useState<boolean>(false);
    const [focusedEndDate, setFocusedEndDate] = useState<boolean>(false);

    const { formState, handleSubmit, reset, setValue, getValues, control, watch } = useForm<{
        startDate: string;
        endDate: string;
        stayingFor: StayingFor;
    }>({
        mode: 'onBlur',
        reValidateMode: 'onBlur',
        resolver: undefined,
        context: undefined,
        criteriaMode: 'firstError',
        shouldFocusError: true,
        defaultValues: {
            startDate: moment().toISOString(),
            endDate: moment().toISOString(),
            stayingFor: 'PLAN',
        },
    });

    return (
        <div className='d-flex flex-column flex-xl-row flex-column-fluid'>
            <div className='d-flex flex-column flex-center flex-lg-row-fluid'>
                <div className='d-flex align-items-start flex-column p-5 p-lg-15'>
                    <h1 className='text-dark fs-2x mb-3'>Welcome, Guest!</h1>
                    <div className='fw-bold fs-4 text-gray-400 mb-10'>
                        Plan your blog post by choosing a topic creating
                        <br />
                        an outline and checking facts
                    </div>
                    <div className='w-100'>
                        <CustomRichRadioGroup
                            //@ts-ignore
                            options={stayingFor.map((el: StayingForItem) => ({
                                title: el.name,
                                value: el.value,
                                disabled: false,
                                color: el.color,
                                subtitle: el.description,
                            }))}
                            displayAsButton
                            defaultValue={watch('stayingFor')}
                            circle
                            name='stayingFor'
                            control={control}
                            large={true}
                            color='primary'
                        />
                    </div>
                </div>
            </div>

            <div className='flex-row-fluid d-flex flex-center justfiy-content-xl-first p-10'>
                <div className='d-flex flex-center p-15 shadow-sm bg-body rounded w-100 w-md-550px mx-auto ms-xl-20'>
                    <form className='form w-100' id='kt_free_trial_form'>
                        <div className='text-center mb-10'>
                            <h1 className='text-dark mb-3'>30 Days Free Trial</h1>

                            <div className='text-gray-400 fw-bold fs-4'>
                                Have questions ? Check out
                                <a href='#' className='link-primary fw-bolder'>
                                    FAQ
                                </a>
                                .
                            </div>
                        </div>
                        {getValues('stayingFor') !== 'FLEXIBLE' ? (
                            <div className='fv-row mb-10'>
                                <DestinationFilter />
                            </div>
                        ) : (
                            <div className='fv-row mb-10'>
                                <CustomFreeStyleInput
                                    className='px-8 min-h-45px'
                                    inputClasses='text-info fw-bolder text-info__important'
                                    disabled
                                    textCenter
                                    id={`field`}
                                    name={`field`}
                                    defaultValue={'Go anywhere'}
                                    control={control}
                                />
                            </div>
                        )}

                        {getValues('stayingFor') !== 'FLEXIBLE' ? (
                            <div className='d-flex flex-wrap fv-row mb-10'>
                                <div className='flex-grow-1'>
                                    <CustomSingleDatePicker
                                        className='w-100 bg-light'
                                        focused={focusedStartDate}
                                        onFocusChange={() => setFocusedStartDate(!focusedStartDate)}
                                        id='startDate'
                                        name='startDate'
                                        date={moment(getValues('startDate'))}
                                        control={control}
                                        errors={formState.errors}
                                        openDirection='down'
                                    />
                                </div>
                                <div className='px-4 align-self-center'>
                                    <OverlaySymbol
                                        symbolSize={30}
                                        hasTooltip
                                        tooltipTitle={'Tới'}
                                        icon={'flaticon2-right-arrow'}
                                        variant='circle'
                                        size={'1x'}
                                        color={'light-info'}
                                    />
                                </div>
                                <div className='flex-grow-1'>
                                    <CustomSingleDatePicker
                                        className='w-100 bg-light'
                                        focused={focusedEndDate}
                                        onFocusChange={() => setFocusedEndDate(!focusedEndDate)}
                                        id='endDate'
                                        name='endDate'
                                        date={moment(getValues('endDate'))}
                                        control={control}
                                        errors={formState.errors}
                                        openDirection='down'
                                    />
                                </div>
                            </div>
                        ) : (
                            <div className='fv-row mb-10'>
                                <CustomFreeStyleInput
                                    className='px-8 min-h-45px'
                                    inputClasses='text-info fw-bolder text-info__important'
                                    disabled
                                    textCenter
                                    id={`field`}
                                    name={`field`}
                                    defaultValue={'At anytime'}
                                    control={control}
                                />
                            </div>
                        )}

                        <div className='fv-row mb-10'>
                            <label className='form-check form-check-custom form-check-solid form-check-inline mb-5'>
                                <input className='form-check-input' type='checkbox' name='toc' value='1' />
                                <span className='form-check-label fw-bold text-gray-700'>
                                    I Agree 30 Days Free Use
                                    <a href='#' className='link-primary ms-1'>
                                        Terms &amp; Conditions
                                    </a>
                                    .
                                </span>
                            </label>
                        </div>

                        <div className='text-center pb-lg-0 pb-8'>
                            <CustomButton
                                id='somebutton'
                                height={100}
                                size='lg'
                                onClick={() => {
                                    console.log('Execute Function');
                                }}
                                className={'w-100 pe-0'}
                                circle={false}
                                endIcon={<i className='flaticon2-right-arrow text-end ms-4 pe-0' />}
                                variant={'contained'}
                                color={'primary'}
                                title={'Start exploring'}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
HomeComponent.displayName = HomeComponent.name;

export default HomeComponent;
