import { useHover } from '@/hooks/useHover';
import i18n from '@/translations/index';
import { getLanguageDetector, setLanguage } from '@/utils/localStorage.utils';
import FlagEN from '@/_metronic/media/flags/united-states.svg';
import FlagVI from '@/_metronic/media/flags/vietnam.svg';
import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import { Fragment, FunctionComponent, useState } from 'react';

const useStyles = makeStyles<Theme, ChangeLanguageMenuProps>((theme: Theme) => ({
    root: {
        marginTop: theme.spacing(3),
        borderRadius: '0',
        boxShadow: 'none',
    },
}));

interface ChangeLanguageMenuProps {
    className?: string;
}
const LANGUAGES = [
    {
        title: 'English',
        value: 'en',
        icon: FlagEN,
    },
    {
        title: 'Tiếng Việt',
        value: 'vi',
        icon: FlagVI,
    },
];
const ChangeLanguageMenu: FunctionComponent<ChangeLanguageMenuProps> = (props: ChangeLanguageMenuProps) => {
    const { className } = props;
    const classes = useStyles(props);

    const [hovered, eventHandlers] = useHover();

    const [languageMenuOpen, setLanguageMenuOpen] = useState<boolean>(false);

    const handleChangeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
        setLanguageMenuOpen(false);
    };

    const lang = getLanguageDetector();
    const currentLanguage = LANGUAGES.find((x) => x.value === lang);

    return (
        <Fragment>
            <div
                className={clsx('menu-item px-5')}
                data-kt-menu-trigger='hover'
                data-kt-menu-placement='left-start'
                data-kt-menu-flip='bottom'
                {...eventHandlers}
            >
                <a href='#' className='menu-link px-5'>
                    <span className='menu-title position-relative'>
                        Language
                        <span className='fs-8 rounded bg-light px-3 py-2 position-absolute translate-middle-y top-50 end-0'>
                            {currentLanguage?.title}
                            <img className='w-15px h-15px rounded-1 ms-2' src={currentLanguage?.icon} alt='metronic' />
                        </span>
                    </span>
                </a>

                <div className='menu-sub menu-sub-dropdown w-175px py-4'>
                    {LANGUAGES.map((l) => (
                        <div
                            className='menu-item px-3'
                            key={l.value}
                            onClick={() => {
                                setLanguage(l.value);
                            }}
                        >
                            <a
                                href='#'
                                className={clsx('menu-link d-flex px-5', {
                                    active: l.value === currentLanguage?.value,
                                })}
                            >
                                <span className='symbol symbol-20px me-4'>
                                    <img className='rounded-1' src={l.icon} alt='metronic' />
                                </span>
                                {l.title}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            {/* <div className={`dropdown ${languageMenuOpen ? 'show' : ''}`}>
                <div onClick={() => setLanguageMenuOpen(!languageMenuOpen)} className='topbar-item'>
                    <div className='btn btn-icon btn-circle active btn-dropdown btn-lg me-4'>
                        <img
                            className='h-30px w-30px rounded-sm'
                            src={find(LANGUAGES, ['value', i18n.language])?.icon || FlagVI}
                            alt=''
                        />
                    </div>
                </div>
                {languageMenuOpen && (
                    <OutsideClickHandler onOutsideClick={() => setLanguageMenuOpen(false)}>
                        <div
                            className={`dropdown-menu p-0 m-0 mt-4 dropdown-menu-anim-up dropdown-menu-sm dropdown-menu-left ${
                                languageMenuOpen ? 'show' : ''
                            }`}
                        >
                            <ul className='navi navi-hover py-4'>
                                {LANGUAGES.map((lang: LanguageIconInterface, index: number) => (
                                    <li className='navi-item' onClick={() => handleChangeLanguage(lang.value)}>
                                        <Typography className='navi-link'>
                                            <span className='symbol symbol-20 me-3'>
                                                <img src={lang.icon} alt='' />
                                            </span>
                                            <span className='navi-text'>{lang.title}</span>
                                        </Typography>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </OutsideClickHandler>
                )}
            </div> */}
        </Fragment>
    );
};

export default ChangeLanguageMenu;
