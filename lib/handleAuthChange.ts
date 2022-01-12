import { definitions } from './../types/supabase'
import React, { useEffect, useState } from 'react'
import { AuthChangeEvent, Session } from '@supabase/supabase-js'

import { supabase } from './supabaseClient'

export const useHandleAuthChange = () => {
    const [authenticatedState, setAuthenticatedState] =
        useState('not-authenticated')
    useEffect(() => {
        console.log('CHANGE')
        const { data: authListener } = supabase.auth.onAuthStateChange(
            (event, session) => {
                handleAuthChange(event, session!)

                if (event === 'SIGNED_IN') {
                    checkUser()
                }
                if (event === 'SIGNED_OUT') {
                    setAuthenticatedState('not-authenticated')
                }
            }
        )
        checkUser()
        return () => {
            console.log('REMOVE')
            authListener?.unsubscribe()
        }
    }, [])

    async function checkUser() {
        const user = await supabase.auth.user()
        const { data: userRole, error: roleError } = await supabase
            .from<definitions['user_roles']>('user_roles')
            .select(
                `
            role
        `
            )
            .eq('user_id', user?.id)
            .single()

        if (userRole?.role === 'user') {
            setAuthenticatedState('authenticated-user')
        }

        if (userRole?.role === 'operator') {
            setAuthenticatedState('authenticated-operator')
        }
        if (userRole?.role === 'admin') {
            setAuthenticatedState('authenticated-admin')
        }
        if (!user) {
            setAuthenticatedState('not-authenticated')
        }
    }
    async function handleAuthChange(event: AuthChangeEvent, session: Session) {
        console.log(event)
        await fetch('/api/auth', {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            credentials: 'same-origin',
            body: JSON.stringify({ event, session }),
        })
    }

    return authenticatedState
}
