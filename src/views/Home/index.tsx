import CustomSingleDatePicker from '@/components/CustomDatePicker/CustomSingleDatePicker';
import DestinationFilter from '@/components/ViewGeneralComponent/DestinationFilter';
import OverlaySymbol from '@/components/ViewGeneralComponent/OverlaySymbol';
import moment from 'moment';
import { FunctionComponent, useState } from 'react';
import { useForm } from 'react-hook-form';

interface HomeComponentProps {}
const HomeComponent: FunctionComponent<HomeComponentProps> = (props: HomeComponentProps) => {
    const [focusedStartDate, setFocusedStartDate] = useState<boolean>(false);
    const [focusedEndDate, setFocusedEndDate] = useState<boolean>(false);

    const { formState, handleSubmit, reset, setValue, getValues, control } = useForm<{
        startDate: string;
        endDate: string;
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
        },
    });

    return (
        <div className='d-flex flex-column flex-xl-row flex-column-fluid'>
            <div className='d-flex flex-column flex-center flex-lg-row-fluid'>
                <div className='d-flex align-items-start flex-column p-5 p-lg-15'>
                    <a href='../../demo1/dist/index.html' className='mb-15'>
                        <img alt='Logo' src='assets/media/logos/logo-1.svg' className='h-40px' />
                    </a>

                    <h1 className='text-dark fs-2x mb-3'>Welcome, Guest!</h1>

                    <div className='fw-bold fs-4 text-gray-400 mb-10'>
                        Plan your blog post by choosing a topic creating
                        <br />
                        an outline and checking facts
                    </div>

                    <img src='assets/media/illustrations/sketchy-1/8.png' className='h-250px h-lg-350px' />
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

                        <div className='fv-row mb-10'>
                            <DestinationFilter />
                        </div>

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

                        <div className='fv-row mb-10'>
                            <label className='form-label fw-bolder text-dark fs-6'>Confirm Password</label>
                            <input
                                className='form-control form-control-solid'
                                type='password'
                                placeholder=''
                                name='confirm-password'
                            />
                        </div>

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
                            <button
                                type='button'
                                id='kt_free_trial_submit'
                                className='btn btn-lg btn-primary fw-bolder'
                            >
                                <span className='indicator-label'>Create an Account</span>
                                <span className='indicator-progress'>
                                    Please wait...
                                    <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
HomeComponent.displayName = HomeComponent.name;

export default HomeComponent;
