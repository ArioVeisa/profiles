'use client';

import ArticleEditor from '@/components/ArticleEditor';

export default function NewArticlePage() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Create New Article</h1>
            <ArticleEditor />
        </div>
    );
}
