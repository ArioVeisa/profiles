'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import 'react-quill-new/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

export default function ArticleEditor({ initialData = {} }) {
    const router = useRouter();
    const [formData, setFormData] = useState({
        title: '',
        slug: '',
        excerpt: '',
        content: '',
        coverImage: '',
        tags: '',
        isPublished: true,
        ...initialData,
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (initialData.tags && Array.isArray(initialData.tags)) {
            setFormData(prev => ({ ...prev, tags: initialData.tags.join(', ') }));
        }
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleContentChange = (content) => {
        setFormData((prev) => ({ ...prev, content }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const url = initialData.slug
                ? `/api/articles/${initialData.slug}`
                : '/api/articles';
            const method = initialData.slug ? 'PUT' : 'POST';

            const payload = {
                ...formData,
                tags: formData.tags.split(',').map((t) => t.trim()).filter(Boolean),
            };

            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (res.ok) {
                router.push('/admin/articles');
            } else {
                const data = await res.json();
                setError(data.error || 'Failed to save article');
            }
        } catch (err) {
            setError('An error occurred');
        } finally {
            setLoading(false);
        }
    };

    // Auto-generate slug from title if creating new
    const handleTitleBlur = () => {
        if (!initialData.slug && formData.title) {
            const slug = formData.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)+/g, '');
            setFormData((prev) => ({ ...prev, slug }));
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-6">
            {error && (
                <div className="bg-red-50 text-red-600 p-4 rounded-lg border border-red-200">{error}</div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium mb-1 text-gray-700">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        onBlur={handleTitleBlur}
                        className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition shadow-sm"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1 text-gray-700">Slug</label>
                    <input
                        type="text"
                        name="slug"
                        value={formData.slug}
                        onChange={handleChange}
                        className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition shadow-sm"
                        required
                    />
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">Excerpt</label>
                <textarea
                    name="excerpt"
                    value={formData.excerpt}
                    onChange={handleChange}
                    rows="3"
                    className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition shadow-sm"
                    required
                />
            </div>

            <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">Content</label>
                <div className="bg-white text-gray-900 rounded-lg border border-gray-300 overflow-hidden">
                    <ReactQuill
                        theme="snow"
                        value={formData.content}
                        onChange={handleContentChange}
                        className="h-64 mb-12"
                        modules={{
                            toolbar: [
                                [{ 'header': [1, 2, 3, false] }],
                                ['bold', 'italic', 'underline', 'strike'],
                                ['blockquote', 'code-block'],
                                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                                ['link', 'image'],
                                ['clean']
                            ],
                        }}
                    />
                </div>
                <p className="text-sm text-gray-500 mt-2">
                    💡 Tip: Click the image icon in the toolbar to insert images. You can paste an image URL from Unsplash or any other source.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium mb-1 text-gray-700">Cover Image URL</label>
                    <input
                        type="text"
                        name="coverImage"
                        value={formData.coverImage}
                        onChange={handleChange}
                        className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition shadow-sm"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1 text-gray-700">Tags (comma separated)</label>
                    <input
                        type="text"
                        name="tags"
                        value={formData.tags}
                        onChange={handleChange}
                        className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition shadow-sm"
                    />
                </div>
            </div>

            <div className="flex items-center space-x-2">
                <input
                    type="checkbox"
                    name="isPublished"
                    checked={formData.isPublished}
                    onChange={handleChange}
                    className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 transition"
                />
                <label className="text-gray-700 font-medium">Publish immediately</label>
            </div>

            <div className="flex justify-end space-x-4 pt-4 border-t border-gray-200">
                <button
                    type="button"
                    onClick={() => router.back()}
                    className="px-6 py-2.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium transition shadow-sm"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold transition shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {loading ? 'Saving...' : 'Save Article'}
                </button>
            </div>
        </form>
    );
}
