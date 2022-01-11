import React, { useEffect } from 'react'
import { useForm, UseFormWatch } from 'react-hook-form'
import { HiSearch } from 'react-icons/hi'
import { BasicInput } from './FromInputs'

type SearchFormProps = {
    searchChange: (search: string) => void
}
export const SearchFrom: React.FC<SearchFormProps> = ({ searchChange }) => {
    const {
        register,
        watch,
        formState: { errors },
    } = useForm()
    const watchSearch = watch('search', '')
    useEffect(() => {
        console.log('Subscribe')
        const searchSubscription = watch((value) => searchChange(value.search))
        return () => {
            searchSubscription.unsubscribe(), console.log('UNSUBSCRIBE')
        }
    }, [watch])
    return (
        <form className="">
            <div className="flex items-center gap-2  ">
                <HiSearch />
                <input
                    {...register('search', { maxLength: 50 })}
                    type="text"
                    name="search"
                    placeholder="search"
                    className=" border-b-2 bg-secondary border-light outline-none focus:border-primary text-light"
                />
            </div>
        </form>
    )
}
