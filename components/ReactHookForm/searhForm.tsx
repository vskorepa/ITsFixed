import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { HiSearch } from 'react-icons/hi'

type SearchFormProps = {
    searchChange: (search: string) => void
}
export const SearchFrom: React.FC<SearchFormProps> = ({ searchChange }) => {
    const { register, watch } = useForm()
    useEffect(() => {
        const searchSubscription = watch((value) => searchChange(value.search))
        return () => {
            searchSubscription.unsubscribe()
        }
    }, [searchChange])
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
