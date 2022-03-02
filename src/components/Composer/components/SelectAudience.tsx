import HaloRichRadioGroup from '@/components/HaloRadioGroup/HaloRichRadioGroup';
import { Fragment, FunctionComponent } from 'react';
import { useForm } from 'react-hook-form';

interface SelectAudienceProps {
    className?: string;
}
const SelectAudience: FunctionComponent<SelectAudienceProps> = (props: SelectAudienceProps) => {
    const { className } = props;

    const { register, formState, handleSubmit, watch, setValue, getValues, clearErrors, unregister, control } =
        useForm<{ selected: any }>({
            mode: 'onBlur',
            reValidateMode: 'onBlur',
            resolver: undefined,
            context: undefined,
            criteriaMode: 'firstError',
            shouldFocusError: true,
            defaultValues: {
                selected: null,
            },
        });

    return (
        <Fragment>
            <div className='w-100'>
                <HaloRichRadioGroup
                    //@ts-ignore
                    options={['primary', 'danger', 'warning', 'success', 'info', 'dark'].map((el: string) => ({
                        title: `Option ${el}`,
                        value: el,
                        disabled: false,
                        color: el,
                        subtitle: 'asdasdasdasda',
                    }))}
                    circle
                    icon={`flaticon2-search`}
                    name='selected'
                    control={control}
                    large={true}
                    color='primary'
                />
            </div>
        </Fragment>
    );
};

export default SelectAudience;
