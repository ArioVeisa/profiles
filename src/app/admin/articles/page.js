'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ArticlesList() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchArticles();
    }, []);

    const fetchArticles = async () => {
        try {
            const res = await fetch('/api/articles');
            const data = await res.json();
            setArticles(data);
        } catch (error) {
            console.error('Failed to fetch articles', error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (slug) => {
        if (!confirm('Are you sure you want to delete this article?')) return;

        try {
            const res = await fetch(`/api/articles/${slug}`, {
                method: 'DELETE',
            });
            if (res.ok) {
                fetchArticles();
            }
        } catch (error) {
            console.error('Failed to delete article', error);
        }
    };

    if (loading) return <div className="flex justify-center p-12"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div></div>;

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Articles</h1>
                    <p className="text-gray-500 mt-1">Manage your blog posts</p>
                </div>
                <Link
                    href="/admin/articles/new"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-semibold transition shadow-lg shadow-blue-600/20 flex items-center"
                >
                    <span className="mr-2 text-lg">+</span> Create New
                </Link>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 border-b border-gray-100">
                            <tr>
                                <th className="p-6 text-xs font-bold text-gray-500 uppercase tracking-wider">Title</th>
                                <th className="p-6 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="p-6 text-xs font-bold text-gray-500 uppercase tracking-wider">Date</th>
                                <th className="p-6 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {articles.map((article) => (
                                <tr key={article.id} className="hover:bg-gray-50/50 transition-colors group">
                                    <td className="p-6">
                                        <div className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{article.title}</div>
                                        <div className="text-xs text-gray-400 mt-1 font-mono">{article.slug}</div>
                                    </td>
                                    <td className="p-6">
                                        <span
                                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${article.isPublished
                                                    ? 'bg-green-100 text-green-800'
                                                    : 'bg-yellow-100 text-yellow-800'
                                                }`}
                                        >
                                            <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${article.isPublished ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
                                            {article.isPublished ? 'Published' : 'Draft'}
                                        </span>
                                    </td>
                                    <td className="p-6 text-sm text-gray-500">
                                        {new Date(article.createdAt).toLocaleDateString()}
                                    </td>
                                    <td className="p-6 text-right space-x-3">
                                        <Link
                                            href={`/admin/articles/edit/${article.slug}`}
                                            className="text-gray-600 hover:text-blue-600 font-medium transition-colors text-sm"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(article.slug)}
                                            className="text-gray-600 hover:text-red-600 font-medium transition-colors text-sm"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {articles.length === 0 && (
                                <tr>
                                    <td colSpan="4" className="p-16 text-center">
                                        <div className="text-gray-400 mb-2 text-4xl">📭</div>
                                        <p className="text-gray-500 font-medium">No articles found</p>
                                        <p className="text-gray-400 text-sm">Get started by creating your first post.</p>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
