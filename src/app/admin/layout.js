'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function AdminLayout({ children }) {
    const pathname = usePathname();
    const router = useRouter();
    const [sidebarOpen, setSidebarOpen] = useState(true);

    // Don't show layout on login page
    if (pathname === '/admin/login') {
        return <>{children}</>;
    }

    const handleLogout = async () => {
        await fetch('/api/auth/logout', { method: 'POST' });
        router.push('/admin/login');
    };

    return (
        <div className="flex min-h-screen bg-gray-50 text-gray-900 font-sans">
            {/* Sidebar */}
            <aside className={`${sidebarOpen ? 'w-72' : 'w-20'} bg-white border-r border-gray-200 p-6 flex flex-col shadow-sm transition-all duration-300`}>
                {/* Toggle Button */}
                <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="absolute top-6 -right-4 bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition z-10"
                >
                    <svg className={`w-5 h-5 transition-transform ${sidebarOpen ? '' : 'rotate-180'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"></path>
                    </svg>
                </button>

                <div className="mb-10">
                    {sidebarOpen ? (
                        <h2 className="text-2xl font-black text-gray-900 tracking-tight">Admin Panel</h2>
                    ) : (
                        <div className="text-2xl font-black text-gray-900 text-center">AP</div>
                    )}
                </div>

                <nav className="flex-1 space-y-2">
                    <Link
                        href="/admin/dashboard"
                        className={`flex items-center px-4 py-4 rounded-xl transition font-bold text-base ${pathname === '/admin/dashboard'
                                ? 'bg-blue-50 text-blue-700'
                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                            }`}
                    >
                        <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                        </svg>
                        {sidebarOpen && <span className="ml-3">Dashboard</span>}
                    </Link>
                    <Link
                        href="/admin/articles"
                        className={`flex items-center px-4 py-4 rounded-xl transition font-bold text-base ${pathname.startsWith('/admin/articles')
                                ? 'bg-blue-50 text-blue-700'
                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                            }`}
                    >
                        <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
                        </svg>
                        {sidebarOpen && <span className="ml-3">Articles</span>}
                    </Link>
                </nav>

                <button
                    onClick={handleLogout}
                    className={`mt-auto px-4 py-4 w-full flex items-center justify-${sidebarOpen ? 'start' : 'center'} text-red-600 hover:bg-red-50 rounded-xl transition font-bold text-base`}
                >
                    <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                    </svg>
                    {sidebarOpen && <span className="ml-3">Logout</span>}
                </button>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 overflow-y-auto">
                {children}
            </main>
        </div>
    );
}
