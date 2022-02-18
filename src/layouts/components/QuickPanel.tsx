import NotificationItem from '@/components/ViewGeneralComponent/Notification/NotificationItem';
import { Typography } from '@mui/material';
import clsx from 'clsx';
import { Fragment, FunctionComponent, useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
interface QuickPanelProps {
    show: boolean;
    onClose: () => void;
}

// const useStyles = makeStyles<Theme, QuickPanelProps>((theme: Theme) => ({}));

const QuickPanel: FunctionComponent<QuickPanelProps> = (props: QuickPanelProps) => {
    const { show, onClose } = props;
    // const classes = useStyles(props);

    const [selectedTab, setSelectedTab] = useState<'notification' | 'saved'>('notification');

    const setTab = (_tabName: 'notification' | 'saved') => {
        setSelectedTab(_tabName);
    };

    return (
        <Fragment>
            <div className='offcanvas-overlay'>
                <OutsideClickHandler onOutsideClick={onClose}>
                    <div
                        className={clsx({
                            [`offcanvas offcanvas-right pt-5 pb-10 px-6`]: true,
                            ['offcanvas-on']: show,
                        })}
                    >
                        <div className='bg-white'>
                            {/*begin::Header*/}
                            <div className='offcanvas-header offcanvas-header-navs d-flex align-items-center justify-content-between mb-5'>
                                <Typography variant='h5' className='fw-bold m-0'>
                                    Notifications
                                </Typography>
                                <Typography
                                    onClick={onClose}
                                    className='btn btn-xs btn-icon btn-light btn-hover-primary'
                                >
                                    <i className='ki ki-close icon-xs text-muted'></i>
                                </Typography>
                            </div>
                            {/*end::Header*/}

                            {/*begin::Content*/}
                            <div className='offcanvas-content scroll ps ps--active-y'>
                                {/* BEGIN::Notifications Tab */}
                                <div
                                    style={{
                                        height: 'calc(100vh - 90px)',
                                        overflowY: 'auto',
                                    }}
                                    className={`tab-pane fade me-n5 scroll ps show`}
                                >
                                    <div className='navi navi-spacer-x-0'>
                                        {[
                                            'like',
                                            'comment',
                                            'page',
                                            'plantrip',
                                            'share',
                                            'group',
                                            'feed',
                                            'notification',
                                        ].map((el, index: number) => (
                                            <NotificationItem
                                                key={el}
                                                title={`
                                                    {{mention}} reacted to your comment: "Ngọc Điệp duy nó là người chụp ảnh đó...
                                                    `}
                                                mention={`Đào Duy`}
                                                url={''}
                                                image={``}
                                                readed={false}
                                                since={`2020-02-19 00:14:20`}
                                                //@ts-ignore
                                                variant={el}
                                                acceptUrl={`url`}
                                                declineUrl={`url`}
                                            />
                                        ))}
                                    </div>
                                </div>
                                {/* END::Notifications Tab */}
                            </div>
                            {/*end::Content*/}
                        </div>
                    </div>
                </OutsideClickHandler>
            </div>
        </Fragment>
    );
};

export default QuickPanel;
