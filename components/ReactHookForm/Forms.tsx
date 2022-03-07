import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import {
    PasswordInput,
    EmailInput,
    ConfirmPasswordInput,
    RegexPasswordInput,
    BasicInput,
    SelectInput,
    TextAreaInput,
    SendMessageInput,
    FileInput,
} from './FromInputs'
import {
    SignInValues,
    SignUpValues,
    CreateTicketValues,
    ResetPasswordValues,
    FilterTicketsValues,
    OperatorFormValues,
} from '../../types/formtypes'
import { SubmitButton } from '../esential/Buttons'
import useTranslation from 'next-translate/useTranslation'
import { Loading, Modal } from '@nextui-org/react'
import { AiOutlineSend } from 'react-icons/ai'
import { definitions } from '../../types/supabase'
import Link from 'next/link'

type ResetPasswordFormProps = {
    OnFormSubmit: (data: ResetPasswordValues) => void
}
export const ResetPasswordForm: React.FC<ResetPasswordFormProps> = ({
    OnFormSubmit,
}) => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm()
    const onSubmit = (data: ResetPasswordValues) => {
        OnFormSubmit(data)
    }
    return (
        <form
            className="bg-secondary shadow-md rounded px-8 pt-6 pb-8 mb-4 min-w-30vw self-center"
            onSubmit={handleSubmit(onSubmit)}
        >
            <EmailInput register={register} errors={errors} />
            <div className="flex items-center justify-between">
                <p className="flex flex-wrap px-2">
                    This will send a link to your email where you can reset your
                    password
                </p>
                <SubmitButton text="send" />
            </div>
        </form>
    )
}

type SignInFormProps = {
    OnFormSubmit: (data: SignInValues) => void
}
export const SignInForm: React.FC<SignInFormProps> = ({ OnFormSubmit }) => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm()
    const onSubmit = (data: SignInValues) => {
        OnFormSubmit(data)
    }
    return (
        <form
            className="bg-secondary shadow-md rounded px-8 pt-6 pb-8 mb-4 min-w-30vw self-center"
            onSubmit={handleSubmit(onSubmit)}
        >
            <EmailInput register={register} errors={errors} />
            <PasswordInput register={register} errors={errors} />
            <div className="flex items-center justify-between">
                <SubmitButton text="SignIn" />{' '}
                <div className="inline-block align-baseline font-bold text-sm text-primary hover:text-blue-800 cursor-pointer">
                    <Link href="/auth/forgotpassword">Forgot Password?</Link>
                </div>
            </div>
        </form>
    )
}

type SignUpFormProps = {
    OnFormSubmit: (data: SignUpValues) => void
}

export const SignUpForm: React.FC<SignUpFormProps> = ({ OnFormSubmit }) => {
    const { t } = useTranslation('common')

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm()

    const onSubmit: SubmitHandler<SignUpValues> = (data) => {
        if (data.password !== data.confirm_password) {
            setError('confirm_password', {
                type: 'manual',
                message: t('NotMatchingPasswords'),
            })
        } else {
            console.log('ahoj')
            OnFormSubmit(data)
        }
    }
    return (
        <form
            className="bg-secondary shadow-md rounded px-8 pt-6 pb-8 mb-4 min-w-30vw self-center"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="gap-4 flex w-full flex-wrap md:flex-nowrap">
                <BasicInput
                    name="first_name"
                    type="text"
                    required={true}
                    register={register}
                    errors={errors}
                    placeholder="John"
                />
                <BasicInput
                    name="last_name"
                    type="text"
                    required={true}
                    register={register}
                    errors={errors}
                    placeholder="Smith"
                />
            </div>

            <EmailInput register={register} errors={errors} />
            <RegexPasswordInput register={register} errors={errors} />
            <ConfirmPasswordInput register={register} errors={errors} />
            {errors.confirm_password?.type == 'manual' && (
                <p className="text-red-500 flex bg-red-200 rounded-full justify-center w-full mb-2">
                    {errors.confirm_password.message}
                </p>
            )}
            <div className="flex items-center justify-between">
                <SubmitButton text="SignUp" />
                <a
                    className="inline-block align-baseline font-bold text-sm text-primary hover:text-blue-800"
                    href="#"
                >
                    Forgot Password?
                </a>
            </div>
        </form>
    )
}

type CreateTicketFormProps = {
    OnFormSubmit: (data: CreateTicketValues) => void
    options: {
        id: number
        name: string
    }[]
}
export const CreateTicketModalForm: React.FC<CreateTicketFormProps> = ({
    OnFormSubmit,
    options,
}) => {
    const { t } = useTranslation('common')

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm()
    const onSubmit = (data: CreateTicketValues) => {
        OnFormSubmit(data)
    }
    return (
        <form
            className="flex flex-col items-center gap-5"
            onSubmit={handleSubmit(onSubmit)}
        >
            <Modal.Header>
                <h2 id="modal-title">Create yours ticket</h2>
            </Modal.Header>

            <Modal.Body>
                <SelectInput
                    register={register}
                    name="ticket_type_id"
                    options={options}
                />
                <TextAreaInput
                    register={register}
                    errors={errors}
                    required={true}
                    name="description"
                    placeholder="Briefly describe you problem"
                    maxLenght={500}
                    rows={5}
                />
            </Modal.Body>
            <Modal.Footer>
                <button type="submit" onClick={close}>
                    {t('submit')}
                </button>
            </Modal.Footer>
        </form>
    )
}

type SendMassageFormProps = {
    disabled?: boolean
    OnFormSubmit: (data: definitions['messages']) => void
    isSending: boolean
}
export const SendMassageForm: React.FC<SendMassageFormProps> = ({
    disabled,
    OnFormSubmit,
    isSending,
}) => {
    const {
        setFocus,
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm()
    const onSubmit = (data: definitions['messages']) => {
        OnFormSubmit(data)
        reset()
        setFocus('message')
    }
    return (
        <form
            className="h-5vh short:h-10vh rounded-t-3xl rounded w-full bottom-0"
            onSubmit={handleSubmit(onSubmit)}
        >
            <SendMessageInput
                name="message"
                placeholder={disabled ? ' ' : 'TypeYourMessage'}
                register={register}
                errors={errors}
                maxLenght={1048}
                disabled={disabled}
            >
                {isSending ? (
                    <Loading className="text-3xl absolute right-8 bottom-4 text-secondary w-auto   " />
                ) : (
                    !disabled && (
                        <button
                            className="text-3xl absolute right-8 bottom-4 text-secondary w-auto   "
                            type="submit"
                        >
                            <AiOutlineSend />
                        </button>
                    )
                )}
            </SendMessageInput>
        </form>
    )
}

type FilterTicketsModalFormProps = {
    OnFormSubmit: (data: FilterTicketsValues) => void
    stateOptions: {
        id: string
        name: string
    }[]
    typeOptions: {
        id: number
        name: string
    }[]
    state: string
    type: number
}

export const FilterTicketsModalForm: React.FC<FilterTicketsModalFormProps> = ({
    OnFormSubmit,
    stateOptions,
    typeOptions,
}) => {
    const { t } = useTranslation('common')

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm()
    const onSubmit = (data: FilterTicketsValues) => {
        OnFormSubmit(data)
    }
    return (
        <form
            className="flex flex-col items-center gap-5"
            onSubmit={handleSubmit(onSubmit)}
        >
            <Modal.Header>
                <h2 id="modal-title">Filter your tickets</h2>
            </Modal.Header>

            <Modal.Body>
                <SelectInput
                    register={register}
                    name="ticketState"
                    options={stateOptions}
                />
                <SelectInput
                    register={register}
                    name="ticketType"
                    options={typeOptions}
                />
                <button type="submit" onClick={close}>
                    filter
                </button>
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
        </form>
    )
}

type OperatorFormProps = {
    OnFormSubmit: (data: OperatorFormValues) => void
}

export const OperatorForm: React.FC<OperatorFormProps> = ({ OnFormSubmit }) => {
    const { t } = useTranslation('common')

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm()

    const onSubmit: SubmitHandler<OperatorFormValues> = (data) => {
        OnFormSubmit(data)
    }
    return (
        <form
            className="bg-secondary shadow-md rounded px-8 pt-6 pb-8 mb-4 min-w-30vw self-center"
            onSubmit={handleSubmit(onSubmit)}
        >
            <TextAreaInput
                register={register}
                errors={errors}
                required={true}
                name="conviction"
                placeholder="Try to convice us to pick you to be an operator."
                maxLenght={500}
                rows={10}
            />
            <FileInput register={register} errors={errors} />

            <div className="flex items-center justify-between">
                <SubmitButton text="Submit" />
            </div>
        </form>
    )
}
