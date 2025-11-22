'use client';

import { useState, useEffect } from 'react';
import ArticleEditor from '@/components/ArticleEditor';
import { useParams } from 'next/navigation';

export default function EditArticlePage() {
    const { slug } = useParams();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const res = await fetch(`/api/articles/${slug}`);
                if (res.ok) {
                    const data = await res.json();
                    setArticle(data);
                }
            } catch (error) {
                console.error('Failed to fetch article', error);
            } finally {
                setLoading(false);
            }
        };

        if (slug) {
            fetchArticle();
        }
    }, [slug]);

    if (loading) return <div>Loading...</div>;
    if (!article) return <div>Article not found</div>;

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Edit Article</h1>
            <ArticleEditor initialData={article} />
        </div>
    );
}
