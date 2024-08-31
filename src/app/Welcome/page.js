'use client';
import { useAuth } from '@/store/mainStore';
import { useRouter } from 'next/navigation';
import React from 'react'

const Welcome = () => {
    const { email, setLogout, isLogin } = useAuth((state) => state)
    const router = useRouter()
    
    if (!isLogin) {
        alert('Anda Harus Login Terlebih Dahulu')
        router.push('/Login')
    }
    return (
        <div className='flex h-screen w-full justify-center items-center text-5xl text-blue-500'>
            <div className='flex flex-col gap-10'>
                <p>Welcome {email}</p>
                <button onClick={(e) => {
                    e.preventDefault()
                    setLogout(false)
                    alert('Berhasil Logout')
                    router.push('/Login')
                }}
                    className='px-5 py-3 bg-blue-500 text-white hover:opacity-70 rounded-xl'
                >Logout</button>
            </div>

        </div>
    )
}

export default Welcome