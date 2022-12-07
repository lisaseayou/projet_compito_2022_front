// @ts-nocheck

import { Controller } from 'react-hook-form';
import Select, {
    components,
    ContainerProps,
    OptionProps,
    ClearIndicatorProps,
    DropdownIndicatorProps,
    MultiValue,
    SingleValue,
    ActionMeta,
    StylesConfig,
    NoticeProps,
    PlaceholderProps,
    MultiValueRemoveProps,
} from 'react-select';
import {
    AlertVariantEnum,
    FontWeightEnum,
    IconEnum,
    OpacityEnum,
    TextTransformEnum,
    TypographyVariantEnum,
} from '../../../enums';
import Alert from '../Alert';
import Icon from '../Icons/Icon';
import Typography from '../Typography';

export interface OptionsType {
    readonly id?: string;
    readonly value: string;
    readonly label: string;
}

type SelectInputProps = {
    control?: any;
    validation?: any;
    id: string;
    name: string;
    options: OptionsType[];
    defaultValue?: boolean | undefined;
    placeholder: string;
    isSearchable?: boolean;
    isClearable?: boolean;
    isLoading?: boolean;
    isDisabled?: boolean;
    isMultiple?: boolean;
    containerClassName?: string;
    error?: any;
    onChange?:
        | ((
              newValue: MultiValue<boolean> | SingleValue<boolean>,
              actionMeta: ActionMeta<boolean>
          ) => void)
        | undefined;
};

const styles: StylesConfig<OptionsType> = {
    container: (base) => ({
        ...base,
        width: '100%',
    }),
    menuList: (base) => ({
        ...base,
        paddingTop: 0,
        paddingBottom: 0,
    }),
    option: (base, state) => ({
        ...base,
        cursor: state.isSelected ? 'default' : 'pointer',
        fontSize: '0.85rem',
        color: state.isSelected ? '#fff' : '#3B73AB',
        background: state.isSelected ? '#3B73AB' : 'transparent',
        ':hover': {
            backgroundColor: state.isSelected ? '#3B73AB' : '#b9cfe5',
        },
    }),
    placeholder: (base) => ({
        ...base,
        fontSize: '0.9rem',
        color: '#9ab3cc',
    }),
    singleValue: (base) => ({
        ...base,
        fontSize: '0.9rem',
        color: '#3B73AB',
    }),
    valueContainer: (base) => ({
        ...base,
        paddingTop: 0,
        paddingBottom: 0,
    }),
    control: (base, state) => ({
        ...base,
        borderColor: state.isFocused ? '#acc2d7' : '#acc2d7',
        boxShadow: 'none',
        minHeight: 30,

        ':hover': {
            borderColor: state.isFocused ? '#acc2d7' : '#acc2d7',
        },
    }),
    ClearIndicator: (base) => ({
        ...base,
        padding: 0,
    }),
    dropdownIndicator: (base, state) => ({
        ...base,
        cursor: 'pointer',
        padding: '0px 6px',
        transition: 'all .2s ease',
        transform: state.selectProps.menuIsOpen && 'rotate(180deg)',
    }),
    multiValueLabel: (base) => ({
        ...base,
        backgroundColor: '#3B73AB',
        color: 'white',
    }),
    MultiValueRemove: (base) => ({
        ...base,
        backgroundColor: '#3B73AB',
    }),
};

const SelectContainer = ({ children, ...props }: ContainerProps) => {
    return (
        <components.SelectContainer {...props} className="w-80">
            {children}
        </components.SelectContainer>
    );
};

const Placeholder = (props: PlaceholderProps) => {
    return <components.Placeholder {...props} className="text-primary-main" />;
};

const Option = (props: OptionProps) => {
    return <components.Option {...props} className="text-primary-main" />;
};

const ClearIndicator = (props: ClearIndicatorProps) => {
    const {
        children = (
            <Icon
                variant={IconEnum.X}
                className="w-5 h-5"
                opacity={OpacityEnum.OPACITY_100}
            />
        ),
        innerProps: { ref, ...restInnerProps },
    } = props;
    return (
        <div {...restInnerProps} ref={ref}>
            <div className="flex p-1">{children}</div>
        </div>
    );
};

const DropdownIndicator = (props: DropdownIndicatorProps) => {
    return (
        <components.DropdownIndicator {...props}>
            <Icon
                variant={IconEnum.CHEVRON_DOWN}
                className="w-5 h-5 cursor-pointer"
                opacity={OpacityEnum.OPACITY_100}
            />
        </components.DropdownIndicator>
    );
};

const NoOptionsMessage = (props: NoticeProps) => {
    return (
        <components.NoOptionsMessage {...props}>
            <Typography
                variant={TypographyVariantEnum?.P}
                color="text-primary-main"
                fontSize="text-xl"
                fontWeight={FontWeightEnum.BOLD}
                textTransform={TextTransformEnum.NORMAL}
                className="text-center w-full"
            >
                Aucun choix
            </Typography>
        </components.NoOptionsMessage>
    );
};

const MultiValueRemove = (props: MultiValueRemoveProps) => {
    return (
        <components.MultiValueRemove {...props}>
            <Icon
                variant={IconEnum.X}
                className="w-4 h-4"
                opacity={OpacityEnum.OPACITY_100}
            />
        </components.MultiValueRemove>
    );
};

const SelectInput = ({
    id,
    name,
    placeholder,
    options,
    defaultValue = undefined,
    isSearchable = false,
    isClearable = false,
    isLoading = false,
    isDisabled = false,
    isMultiple = false,
    control,
    validation,
    containerClassName,
    error,
    onChange,
}: SelectInputProps) => {
    return (
        <div className={containerClassName}>
            {control ? (
                <>
                    <Controller
                        control={control}
                        id={id}
                        name={name}
                        defaultValue=""
                        rules={validation}
                        render={({ field: { onChange, value } }) => {
                            return (
                                <Select
                                    components={{
                                        SelectContainer,
                                        Placeholder,
                                        Option,
                                        ClearIndicator,
                                        DropdownIndicator,
                                        MultiValueRemove,
                                        NoOptionsMessage,
                                    }}
                                    placeholder={placeholder}
                                    defaultValue={defaultValue}
                                    isDisabled={isDisabled}
                                    isLoading={isLoading}
                                    isClearable={isClearable}
                                    isSearchable={isSearchable}
                                    isMulti={isMultiple}
                                    name={name}
                                    options={options}
                                    styles={styles}
                                    onChange={onChange}
                                />
                            );
                        }}
                    />

                    {error && (
                        <Alert
                            variant={AlertVariantEnum.INPUT_ERROR}
                            containerClassName="mt-2 mb-2"
                        >
                            {error?.message as string}
                        </Alert>
                    )}
                </>
            ) : (
                <Select
                    components={{
                        SelectContainer,
                        Placeholder,
                        Option,
                        ClearIndicator,
                        DropdownIndicator,
                        MultiValueRemove,
                        NoOptionsMessage,
                    }}
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                    isDisabled={isDisabled}
                    isLoading={isLoading}
                    isClearable={isClearable}
                    isSearchable={isSearchable}
                    isMulti={isMultiple}
                    name={name}
                    options={options}
                    styles={styles}
                    onChange={onChange}
                />
            )}
        </div>
    );
};

export default SelectInput;
