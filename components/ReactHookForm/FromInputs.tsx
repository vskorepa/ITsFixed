import React from 'react'
import { UseFormReturn, FieldErrors } from 'react-hook-form'
import useTranslation from 'next-translate/useTranslation'
type InputProps = {
    register: UseFormReturn['register']
    errors: FieldErrors
    name?: string
    type?: 'text' | 'number' | 'email' | 'password' | 'textarea'
    placeholder?: string
    maxLenght?: number
    required?: boolean
    options?: {
        value: number
        name: string
    }[]
    children?: React.ReactNode
    disabled?: boolean
    rows?: number
}
type SelectInputProps = {
    register: UseFormReturn['register']
    name?: string
    options?: {
        id: number | string
        name: string
    }[]
}

export const BasicInput: React.FC<InputProps> = ({
    register,
    errors,
    name,
    type,
    placeholder,
    maxLenght,
    required,
}) => {
    const { t } = useTranslation('common')

    return (
        <div className="mb-4 w-full">
            <label
                className="block text-gray-700 text-sm font-bold mb-2"
                id={name ?? 'basic'}
            >
                {name ?? 'basic'}
            </label>
            <input
                id={name ?? 'basic'}
                className={` ${
                    errors[name ?? 'basic'] ? 'border-red-500' : 'border-dark'
                }
                focus:border-primary 
                 shadow bg-light appearance-none border-2 rounded w-full py-2 px-3
                 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline
                 `}
                type={type ?? 'text'}
                placeholder={t(placeholder ?? '') ?? 'basic'}
                {...register(name ?? 'basic', {
                    required: {
                        value: required ?? false,
                        message: t('required'),
                    },
                    maxLength: {
                        value: maxLenght ?? 30,
                        message: `${t('maxLength')} ${maxLenght ?? '30'}`,
                    },
                })}
            />
            {errors[name ?? 'basic'] && (
                <p className="text-red-500 text-md italic">
                    {errors[name ?? 'basic'].message}
                </p>
            )}
        </div>
    )
}

export const EmailInput: React.FC<InputProps> = ({ register, errors }) => {
    const { t } = useTranslation('common')

    return (
        <div className="mb-4 w-full">
            <label
                className="block text-gray-700 text-sm font-bold mb-2"
                id="email"
            >
                E-Mail
            </label>
            <input
                id="email"
                className={` ${
                    errors.password ? 'border-red-500' : 'border-dark'
                }
                focus:border-primary 
                 shadow bg-light appearance-none border-2 rounded w-full py-2 px-3
                 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline
                 `}
                type="text"
                placeholder="example@email.com"
                {...register('email', {
                    required: {
                        value: true,
                        message: t('required'),
                    },
                    pattern: {
                        value: RegExp(
                            "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
                        ),

                        message: t('validemail'),
                    },
                })}
            />
            {errors.email && (
                <p className="text-red-500 text-md italic">
                    {errors.email.message}
                </p>
            )}
        </div>
    )
}
export const PasswordInput: React.FC<InputProps> = ({ register, errors }) => {
    const { t } = useTranslation('common')

    return (
        <div className="mb-4 w-full">
            <label
                className="block text-gray-700 text-sm font-bold mb-2"
                id="password"
            >
                {t('password')}
            </label>
            <input
                id="password"
                className={` ${
                    errors.password ? 'border-red-500' : 'border-dark'
                }
                focus:border-primary 
                 shadow bg-light appearance-none border-2 rounded w-full py-2 px-3
                 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline
                 `}
                type="password"
                placeholder={t('password')}
                {...register('password', {
                    required: {
                        value: true,
                        message: t('required'),
                    },
                    maxLength: {
                        value: 30,
                        message: `${t('maxLength')} 30`,
                    },
                })}
            />
            {errors.password?.type == 'required' ? (
                <p className="text-red-500 text-md italic">
                    {errors.password.message}
                </p>
            ) : (
                <></>
            )}
        </div>
    )
}
export const RegexPasswordInput: React.FC<InputProps> = ({
    register,
    errors,
    name,
    placeholder,
}) => {
    const { t } = useTranslation('common')
    return (
        <div className="mb-4 w-full">
            <label
                className="block text-gray-700 text-sm font-bold mb-2"
                id={name ?? 'password'}
            >
                {t(name ?? 'password')}
            </label>
            <input
                id={name ?? 'password'}
                className={` ${
                    errors.password ? 'border-red-500' : 'border-dark'
                }
                focus:border-primary 
                 shadow bg-light appearance-none border-2 rounded w-full py-2 px-3
                 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline
                 `}
                type="password"
                placeholder={t(placeholder ?? 'password')}
                {...register('password', {
                    required: {
                        value: true,
                        message: t('required'),
                    },
                    maxLength: {
                        value: 30,
                        message: `${t('maxLength')} 30`,
                    },
                    pattern: {
                        value: RegExp(
                            '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[A-Za-z\\d$@$!%*?&]{8,}'
                        ),
                        message: `${t('strongerPassword')}`,
                    },
                })}
            />
            {errors.password?.type == 'required' && (
                <p className="text-red-500 text-md">
                    {errors.password.message}
                </p>
            )}
            {errors.password?.type == 'pattern' && (
                <p className="text-red-500 text-md">
                    {errors.password.message}
                </p>
            )}
        </div>
    )
}

export const ConfirmPasswordInput: React.FC<InputProps> = ({
    register,
    errors,
}) => {
    const { t } = useTranslation('common')

    return (
        <div className="mb-4 w-full">
            <label
                className="block text-gray-700 text-sm font-bold mb-2"
                id="confirm_password"
            >
                {t('confirmpassword')}
            </label>
            <input
                id="confirm_password"
                className={` ${
                    errors.confirm_password ? 'border-red-500' : 'border-dark'
                }
                focus:border-primary 
                 shadow bg-light appearance-none border-2 rounded w-full py-2 px-3
                 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline
                 `}
                type="password"
                placeholder={t('confirmpassword')}
                {...register('confirm_password', {
                    required: {
                        value: true,
                        message: t('required'),
                    },
                    maxLength: {
                        value: 30,
                        message: `${t('maxLength')} 30`,
                    },
                })}
            />
            {errors.confirm_password?.type == 'required' ? (
                <p className="text-red-500 text-md italic">
                    {errors.confirm_password.message}
                </p>
            ) : (
                <></>
            )}
        </div>
    )
}

export const SelectInput: React.FC<SelectInputProps> = ({
    register,
    name,
    options,
}) => {
    return (
        <div className="inline-block relative w-full">
            <label
                className="block text-gray-700 text-sm font-bold mb-2"
                id={name ?? 'select'}
            >
                {name ?? 'select'}
            </label>
            <div className="flex justify-between">
                <select
                    id={name ?? 'select'}
                    className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                    {...register(name ?? 'select')}
                >
                    {options?.map((option) => (
                        <option key={option.name} value={option.id}>
                            {option.name}
                        </option>
                    ))}
                </select>
                {/* <MdKeyboardArrowDown /> */}
            </div>
        </div>
    )
}

export const TextAreaInput: React.FC<InputProps> = ({
    register,
    errors,
    name,
    placeholder,
    required,
    maxLenght,
    rows,
}) => {
    const { t } = useTranslation('common')

    return (
        <div>
            <label
                className="block text-gray-700 text-sm font-bold mb-2"
                id={name ?? 'textArea'}
            >
                {t(name ?? 'textArea')}
            </label>
            <textarea
                className="w-full rounded-2xl p-1 outline-none border-2 border-dark focus:border-primary text-white bg-light text-dark"
                placeholder={t(placeholder ?? 'Type some text')}
                rows={rows}
                {...register(name ?? 'TextArea', {
                    required: {
                        value: required ?? false,
                        message: t('required'),
                    },
                    maxLength: {
                        value: maxLenght ?? 50,
                        message: `${t('maxLength')} ${maxLenght ?? 50}`,
                    },
                })}
            />
            {errors[name ?? 'basic'] && (
                <p className="text-red-500 text-md italic">
                    {errors[name ?? 'basic'].message}
                </p>
            )}
        </div>
    )
}

export const SendMessageInput: React.FC<InputProps> = ({
    register,
    errors,
    name,
    placeholder,
    maxLenght,
    required,
    children,
    disabled,
}) => {
    const { t } = useTranslation('common')

    return (
        <div className="w-full h-5vh short:h-10vh relative items-end">
            <textarea
                disabled={disabled ?? false}
                rows={2}
                id={name ?? 'basic'}
                className={` ${
                    errors[name ?? 'basic'] ? 'border-red-500' : 'border-dark'
                }
                focus:border-primary px-4 text-xl pr-12
                 bg-light appearance-none border-4 rounded-b-3xl w-full h-5vh short:h-10vh
                 text-gray-700  leading-tight focus:outline-none scroll-smooth resize-none
                 `}
                placeholder={t(placeholder ?? '') ?? 'basic'}
                {...register(name ?? 'basic', {
                    required: {
                        value: required ?? false,
                        message: t('required'),
                    },
                    maxLength: {
                        value: maxLenght ?? 30,
                        message: `${t('maxLength')} ${maxLenght ?? '30'}`,
                    },
                })}
            ></textarea>
            {children}
            {errors[name ?? 'basic'] && (
                <p className="text-red-500 text-md italic">
                    {errors[name ?? 'basic'].message}
                </p>
            )}
        </div>
    )
}

export const FileInput: React.FC<InputProps> = ({ register, errors }) => {
    const { t } = useTranslation('common')
    return (
        <div className="mb-4 w-full">
            <label
                className="block text-gray-700 text-sm font-bold mb-2"
                id="cv"
            >
                CV
            </label>
            <input
                id="cv"
                className={` ${errors.cv ? 'border-red-500' : 'border-dark'}
                focus:border-primary 
                 shadow bg-light appearance-none border-2 rounded w-full py-2 px-3
                 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline
                 `}
                type="file"
                placeholder="example@email.com"
                {...register('cv', {
                    required: {
                        value: true,
                        message: t('required'),
                    },
                    validate: {
                        TypeValidation: (v) =>
                            v[0].type === 'application/pdf' || t('filePDF'),
                        SizeValidation: (v) =>
                            v[0].size <= 10000000 || t('BigFile'),
                    },
                })}
            />

            {errors.cv && (
                <p className="text-red-500 text-md italic">
                    {errors.cv.message}
                </p>
            )}
        </div>
    )
}
