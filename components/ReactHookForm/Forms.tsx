import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
	PasswordInput,
	EmailInput,
	ConfirmPasswordInput,
	RegexPasswordInput,
	BasicInput,
	SelectInput,
	TextAreaInput,
	SendMessageInput,
} from "./FromInputs";
import {
	SignInValues,
	SignUpValues,
	CreateTicketValues,
} from "../../types/formtypes";
import { SubmitButton } from "../esential/Buttons";
import useTranslation from "next-translate/useTranslation";
import { Modal } from "@nextui-org/react";
import { AiOutlineSend } from "react-icons/ai";
import { definitions } from "../../types/supabase";

type SignInFormProps = {
    OnFormSubmit: (data: SignInValues) => void
}
export const SignInForm: React.FC<SignInFormProps> = ({ OnFormSubmit }) => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();
	const onSubmit = (data: SignInValues) => {
		OnFormSubmit(data);
	};
	return (
		<form
			className="bg-secondary shadow-md rounded px-8 pt-6 pb-8 mb-4 min-w-30vw self-center"
			onSubmit={handleSubmit(onSubmit)}
		>
			<EmailInput register={register} errors={errors} />
			<PasswordInput register={register} errors={errors} />
			<div className="flex items-center justify-between">
				<SubmitButton text="SignIn" />
				<a
					className="inline-block align-baseline font-bold text-sm text-primary hover:text-blue-800"
					href="#"
				>
                    Forgot Password?
				</a>
			</div>
		</form>
	);
};

type SignUpFormProps = {
    OnFormSubmit: (data: SignUpValues) => void
}

export const SignUpForm: React.FC<SignUpFormProps> = ({ OnFormSubmit }) => {
	const { t } = useTranslation("common");

	const {
		register,
		handleSubmit,
		setError,
		formState: { errors },
	} = useForm();

	const onSubmit: SubmitHandler<SignUpValues> = (data) => {
		if (data.password !== data.confirm_password) {
			setError("confirm_password", {
				type: "manual",
				message: t("NotMatchingPasswords"),
			});
		} else {
			console.log("ahoj");
			OnFormSubmit(data);
		}
	};
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
			{errors.confirm_password?.type == "manual" && (
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
	);
};

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
	const { t } = useTranslation("common");

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();
	const onSubmit = (data: CreateTicketValues) => {
		OnFormSubmit(data);
	};
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
				/>
			</Modal.Body>
			<Modal.Footer>
				<button type="submit" onClick={close}>
					{t("submit")}
				</button>
			</Modal.Footer>
		</form>
	);
};

type SendMassageFormProps = {
    OnFormSubmit: (data: definitions["messages"]) => void
}
export const SendMassageForm: React.FC<SendMassageFormProps> = ({
	OnFormSubmit,
}) => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm();
	const onSubmit = (data: definitions["messages"]) => {
		OnFormSubmit(data);
		console.log("reset");
		reset();
	};
	return (
		<form
			className="flex flex-nowrap items-center h-10vh shadow-md rounded w-full"
			onSubmit={handleSubmit(onSubmit)}
		>
			<SendMessageInput
				name="message"
				placeholder="TypeYourMessage"
				register={register}
				errors={errors}
				type="text"
				maxLenght={1048}
			/>
			<button className="pr-6 w-1/12 text-3xl" type="submit">
				<AiOutlineSend />
			</button>
		</form>
	);
};
