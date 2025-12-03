import Link from 'next/link';
import prisma from '@/lib/prisma';
import Header from '@/components/Header';

export const metadata = {
    title: 'Blog - Ario Veisa',
    description: 'Insights on Security, Business Development, and Technology.',
};

async function getArticles() {
    try {
        const articles = await prisma.article.findMany({
            where: { isPublished: true },
            orderBy: { createdAt: 'desc' },
        });
        return articles;
    } catch (error) {
        console.error('Failed to fetch articles:', error);
        // Jika database tidak bisa diakses saat build, jangan gagalkan build
        return [];
    }
}

export default async function BlogPage() {
    const articles = await getArticles();
    const featuredArticle = articles[0];
    const featuredPosts = articles.slice(1, 3);
    const recentArticles = articles.slice(3);

    return (
        <div className="min-h-screen" style={{ background: 'linear-gradient(to bottom, #ffffff, #f8f9fa)' }}>
            <Header />
            {/* Featured Hero Section */}
            {featuredArticle && (
                <section className="pt-32 pb-20 md:pt-40 md:pb-24">
                    <div className="container mx-auto px-6 md:px-12 lg:px-20">
                        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                                {/* Image Side */}
                                <div className="relative h-96 lg:h-[600px] overflow-hidden group order-2 lg:order-1">
                                    <img
                                        src={featuredArticle.coverImage || '/assets/images/placeholder.jpg'}
                                        alt={featuredArticle.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                                    {/* Category badge on image */}
                                    <div className="absolute bottom-8 left-8">
                                        <span className="inline-block px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider" style={{ backgroundColor: '#c7b1dd', color: '#ffffff' }}>
                                            {featuredArticle.tags?.split(',')[0] || 'Featured'}
                                        </span>
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className="p-10 lg:p-14 flex flex-col justify-center order-1 lg:order-2" style={{ backgroundColor: '#f8f5fb' }}>
                                    <p className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: '#a07cc5' }}>
                                        Featured Story
                                    </p>

                                    <h2 className="text-5xl lg:text-6xl xl:text-7xl font-black mb-6 leading-tight tracking-tight" style={{ color: '#1a202c' }}>
                                        {featuredArticle.title}
                                    </h2>

                                    <p className="text-xl md:text-2xl mb-8 leading-relaxed" style={{ color: '#4a5568' }}>
                                        {featuredArticle.excerpt}
                                    </p>

                                    <p className="text-base font-medium mb-8" style={{ color: '#718096' }}>
                                        {new Date(featuredArticle.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                    </p>

                                    <Link
                                        href={`/blog/${featuredArticle.slug}`}
                                        className="inline-flex items-center text-xl font-bold group"
                                        style={{ color: '#a07cc5' }}
                                    >
                                        Read Full Story
                                        <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Featured Posts Section */}
            {featuredPosts.length > 0 && (
                <section className="py-12">
                    <div className="container mx-auto px-6 md:px-12 lg:px-20">
                        <div className="mb-10">
                            <h2 className="text-5xl md:text-6xl font-black mb-4 tracking-tight" style={{ color: '#1a202c' }}>
                                Featured Posts
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {featuredPosts.map((article, index) => {
                                const colors = [
                                    { bg: '#f1f5fd', accent: '#8caeec' },
                                    { bg: '#f5faf7', accent: '#b0d4c1' },
                                ];
                                const colorScheme = colors[index % colors.length];

                                return (
                                    <article
                                        key={article.id}
                                        className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                                    >
                                        <div className="flex flex-col sm:flex-row gap-0">
                                            {/* Image */}
                                            <div className="relative h-56 sm:h-auto sm:w-48 flex-shrink-0 overflow-hidden">
                                                <img
                                                    src={article.coverImage || '/assets/images/placeholder.jpg'}
                                                    alt={article.title}
                                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                                />
                                            </div>

                                            {/* Content */}
                                            <div className="p-6 flex-1" style={{ backgroundColor: colorScheme.bg }}>
                                                <div className="mb-3">
                                                    <span
                                                        className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white"
                                                        style={{ backgroundColor: colorScheme.accent }}
                                                    >
                                                        {article.tags?.split(',')[0] || 'Article'}
                                                    </span>
                                                </div>

                                                <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight tracking-tight line-clamp-2" style={{ color: '#1a202c' }}>
                                                    <Link href={`/blog/${article.slug}`} className="hover:opacity-75 transition-opacity">
                                                        {article.title}
                                                    </Link>
                                                </h3>

                                                <p className="text-base font-medium" style={{ color: '#718096' }}>
                                                    {new Date(article.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}

            {/* Recent Posts Section */}
            <section className="py-16 pb-32">
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                    <div className="flex justify-between items-center mb-10">
                        <h2 className="text-5xl md:text-6xl font-black tracking-tight" style={{ color: '#1a202c' }}>
                            Recent Posts
                        </h2>
                        <Link href="/blog" className="text-lg font-bold hover:opacity-70 transition-opacity" style={{ color: '#a07cc5' }}>
                            view all
                        </Link>
                    </div>

                    {recentArticles.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {recentArticles.map((article, index) => {
                                const colors = [
                                    { bg: '#fcf4f6', accent: '#e3a6b6' },
                                    { bg: '#f8f5fb', accent: '#c7b1dd' },
                                    { bg: '#f1f5fd', accent: '#8caeec' },
                                    { bg: '#f5faf7', accent: '#b0d4c1' },
                                ];
                                const colorScheme = colors[index % colors.length];

                                return (
                                    <article
                                        key={article.id}
                                        className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                                    >
                                        {/* Image */}
                                        <div className="relative h-56 overflow-hidden">
                                            <img
                                                src={article.coverImage || '/assets/images/placeholder.jpg'}
                                                alt={article.title}
                                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="p-6" style={{ backgroundColor: colorScheme.bg }}>
                                            <div className="mb-3">
                                                <span
                                                    className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white"
                                                    style={{ backgroundColor: colorScheme.accent }}
                                                >
                                                    {article.tags?.split(',')[0] || 'Article'}
                                                </span>
                                            </div>

                                            <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight tracking-tight line-clamp-2" style={{ color: '#1a202c' }}>
                                                <Link href={`/blog/${article.slug}`} className="hover:opacity-75 transition-opacity">
                                                    {article.title}
                                                </Link>
                                            </h3>

                                            <p className="text-base font-medium mb-4" style={{ color: '#718096' }}>
                                                {new Date(article.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                            </p>

                                            <p className="text-lg md:text-xl mb-6 line-clamp-2 leading-relaxed" style={{ color: '#4a5568' }}>
                                                {article.excerpt}
                                            </p>

                                            <Link
                                                href={`/blog/${article.slug}`}
                                                className="inline-flex items-center text-base md:text-lg font-bold group"
                                                style={{ color: colorScheme.accent }}
                                            >
                                                Read More
                                                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                                </svg>
                                            </Link>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    ) : articles.length === 0 ? (
                        <div className="text-center py-24 bg-white rounded-3xl shadow-lg">
                            <div className="text-6xl mb-6 opacity-50">✍️</div>
                            <h3 className="text-3xl font-bold mb-3" style={{ color: '#1a202c' }}>No articles published yet</h3>
                            <p className="text-xl" style={{ color: '#718096' }}>The blog is coming soon with amazing content!</p>
                        </div>
                    ) : null}
                </div>
            </section>
        </div>
    );
}
