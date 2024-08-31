'use client'
import { useAuth } from '@/store/mainStore'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Login = () => {
    const { setLogin, setLogout, setInputEmail, setInputPassword, email, password, data } = useAuth((state) => state)
    const router = useRouter()
    return (
        <div className="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
            <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
                <h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">
                    Welcome Back!
                </h1>
                <form action="#">
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="text-blue-500 shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="your@email.com"
                            required=""
                            onChange={(e) => setInputEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="text-blue-500 shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Enter your password"
                            required=""
                            onChange={(e) => setInputPassword(e.target.value)}
                        />
                        <a
                            href="#"
                            className="text-xs text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Forgot Password?
                        </a>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="remember"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none"
                                defaultChecked=""
                            />
                            <label
                                htmlFor="remember"
                                className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
                            >
                                Remember me
                            </label>
                        </div>
                        <Link href={'/CreateAccount'}  className="text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Create Account
                        </Link>
                    </div>
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={(e) => {
                            e.preventDefault()
                            const findEmail = data.find((item, idx) => item.email == email)
                            const findPassword = data.find(item => item.password == password)
                            console.log(findEmail, findPassword);
                            if (findEmail && findPassword) {
                                alert('Login Berhasil')
                                setLogin(true)
                                router.push('/Welcome')
                                return
                            }
                            if (!findEmail) {
                                alert('Email Tidak Terdaftar')
                                return
                            }
                            if (!findPassword) {
                                alert('Password Salah')
                                return
                            }

                        }}
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login