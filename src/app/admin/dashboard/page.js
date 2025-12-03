import prisma from '@/lib/prisma';
import Link from 'next/link';

async function getStats() {
    try {
        const articleCount = await prisma.article.count();
        const publishedCount = await prisma.article.count({ where: { isPublished: true } });
        const draftCount = await prisma.article.count({ where: { isPublished: false } });

        const recentArticles = await prisma.article.findMany({
            orderBy: { createdAt: 'desc' },
            take: 5,
        });

        return { articleCount, publishedCount, draftCount, recentArticles };
    } catch (error) {
        console.error('Failed to fetch dashboard stats:', error);
        // Jangan gagalkan build jika database tidak bisa diakses
        return {
            articleCount: 0,
            publishedCount: 0,
            draftCount: 0,
            recentArticles: [],
        };
    }
}

export default async function Dashboard() {
    const stats = await getStats();

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                <div>
                    <h1 className="text-5xl font-black text-gray-900 tracking-tight">Dashboard</h1>
                    <p className="text-gray-500 mt-3 text-xl">Welcome back! Here&apos;s your blog overview.</p>
                </div>
                <Link
                    href="/admin/articles/new"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-5 rounded-xl font-bold text-lg transition shadow-lg shadow-blue-600/30 flex items-center"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4"></path>
                    </svg>
                    New Article
                </Link>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Total Articles */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-sm border border-blue-200 hover:shadow-lg transition-all">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-blue-700 text-base font-bold uppercase tracking-wider">Total Articles</h3>
                        <div className="p-3 bg-blue-600 text-white rounded-xl shadow-md">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
                            </svg>
                        </div>
                    </div>
                    <p className="text-7xl font-black text-blue-900 mb-3">{stats.articleCount}</p>
                    <p className="text-base text-blue-600 font-semibold">All time posts</p>
                </div>

                {/* Published */}
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-sm border border-green-200 hover:shadow-lg transition-all">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-green-700 text-base font-bold uppercase tracking-wider">Published</h3>
                        <div className="p-3 bg-green-600 text-white rounded-xl shadow-md">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                    </div>
                    <p className="text-7xl font-black text-green-900 mb-3">{stats.publishedCount}</p>
                    <p className="text-base text-green-600 font-semibold">Live on blog</p>
                </div>

                {/* Drafts */}
                <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-2xl shadow-sm border border-amber-200 hover:shadow-lg transition-all">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-amber-700 text-base font-bold uppercase tracking-wider">Drafts</h3>
                        <div className="p-3 bg-amber-600 text-white rounded-xl shadow-md">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                            </svg>
                        </div>
                    </div>
                    <p className="text-7xl font-black text-amber-900 mb-3">{stats.draftCount}</p>
                    <p className="text-base text-amber-600 font-semibold">Work in progress</p>
                </div>
            </div>

            {/* Recent Articles */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
                    <h2 className="text-3xl font-black text-gray-900">Recent Articles</h2>
                    <p className="text-gray-500 mt-2 text-lg">Your latest blog posts</p>
                </div>
                <div className="divide-y divide-gray-200">
                    {stats.recentArticles.length > 0 ? (
                        stats.recentArticles.map((article) => (
                            <div key={article.id} className="p-6 hover:bg-gray-50 transition-colors">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className="text-xl font-bold text-gray-900">{article.title}</h3>
                                            {article.isPublished ? (
                                                <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-bold rounded-full">Published</span>
                                            ) : (
                                                <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-bold rounded-full">Draft</span>
                                            )}
                                        </div>
                                        <p className="text-gray-600 text-base line-clamp-2 mb-3">{article.excerpt}</p>
                                        <p className="text-base text-gray-400">
                                            {new Date(article.createdAt).toLocaleDateString('en-US', {
                                                month: 'long',
                                                day: 'numeric',
                                                year: 'numeric'
                                            })}
                                        </p>
                                    </div>
                                    <Link
                                        href={`/admin/articles/edit/${article.slug}`}
                                        className="px-5 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-semibold transition text-base whitespace-nowrap"
                                    >
                                        Edit →
                                    </Link>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="p-12 text-center">
                            <div className="text-6xl mb-4 opacity-50">📝</div>
                            <p className="text-gray-500 text-lg">No articles yet. Create your first one!</p>
                        </div>
                    )}
                </div>
                <div className="p-4 bg-gray-50 border-t border-gray-200">
                    <Link
                        href="/admin/articles"
                        className="block text-center text-blue-600 hover:text-blue-700 font-semibold transition"
                    >
                        View All Articles →
                    </Link>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl shadow-lg text-white p-8 relative overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold mb-2">Manage Content</h3>
                        <p className="text-purple-100 mb-6">View, edit, or delete your articles</p>
                        <Link
                            href="/admin/articles"
                            className="inline-block bg-white text-purple-600 hover:bg-purple-50 px-6 py-3 rounded-xl font-bold transition shadow-lg"
                        >
                            Go to Articles →
                        </Link>
                    </div>
                    <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
                </div>

                <div className="bg-gradient-to-br from-pink-600 to-pink-700 rounded-2xl shadow-lg text-white p-8 relative overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold mb-2">Visit Blog</h3>
                        <p className="text-pink-100 mb-6">See how your blog looks to visitors</p>
                        <Link
                            href="/blog"
                            className="inline-block bg-white text-pink-600 hover:bg-pink-50 px-6 py-3 rounded-xl font-bold transition shadow-lg"
                        >
                            View Blog →
                        </Link>
                    </div>
                    <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
                </div>
            </div>
        </div>
    );
}
