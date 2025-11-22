import prisma from '@/lib/prisma';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const article = await prisma.article.findUnique({
        where: { slug },
    });

    if (!article) {
        return {
            title: 'Article Not Found',
        };
    }

    return {
        title: `${article.title} - Ario Veisa`,
        description: article.excerpt,
        openGraph: {
            title: article.title,
            description: article.excerpt,
            images: article.coverImage ? [article.coverImage] : [],
        },
    };
}

// Helper function to extract headings from HTML content
function extractHeadings(htmlContent) {
    const headingRegex = /<h([2-3])[^>]*>(.*?)<\/h\1>/gi;
    const headings = [];
    let match;

    while ((match = headingRegex.exec(htmlContent)) !== null) {
        const level = parseInt(match[1]);
        const text = match[2].replace(/<[^>]*>/g, ''); // Remove any HTML tags
        const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        headings.push({ level, text, id });
    }

    return headings;
}

export default async function ArticlePage({ params }) {
    const { slug } = await params;
    const article = await prisma.article.findUnique({
        where: { slug },
    });

    if (!article || (!article.isPublished && process.env.NODE_ENV === 'production')) {
        notFound();
    }

    // Calculate read time
    const wordCount = article.content.split(/\s+/).length;
    const readTime = Math.ceil(wordCount / 200);

    // Extract headings for TOC
    const headings = extractHeadings(article.content);

    // Get related articles
    const relatedArticles = await prisma.article.findMany({
        where: {
            isPublished: true,
            id: { not: article.id },
        },
        take: 5,
        orderBy: { createdAt: 'desc' },
    });

    console.log(`Fetching related articles for ${slug}. Found: ${relatedArticles.length}`);

    return (
        <article className="min-h-screen bg-white">
            {/* Hero Section */}
            {article.coverImage && (
                <section className="relative h-[60vh] min-h-[500px] bg-gray-900">
                    <img
                        src={article.coverImage}
                        alt={article.title}
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>

                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
                            {article.tags && (
                                <span className="inline-block px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6" style={{ backgroundColor: '#c7b1dd', color: '#ffffff' }}>
                                    {article.tags.split(',')[0].trim()}
                                </span>
                            )}
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight tracking-tight max-w-5xl mx-auto">
                                {article.title}
                            </h1>
                        </div>
                    </div>

                    <div className="absolute top-8 left-6 md:left-12 lg:left-20 z-10">
                        <Link
                            href="/blog"
                            className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                            </svg>
                            Back
                        </Link>
                    </div>
                </section>
            )}

            {/* Meta Bar */}
            <section className="py-6" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-white">
                        <div className="flex items-center space-x-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                            <span className="font-medium">{new Date(article.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span className="font-medium">{readTime} min read</span>
                        </div>
                        {article.tags && article.tags.split(',').slice(1).map((tag, index) => (
                            <span key={index} className="px-3 py-1 rounded-full bg-white/20 text-sm font-bold">
                                #{tag.trim()}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Article Content with Fixed Sidebar */}
            <section className="py-16 md:py-20">
                <div className="mx-auto px-8 md:px-16 lg:px-24" style={{ maxWidth: '1800px' }}>
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Fixed Sidebar: TOC or Related Articles */}
                        <aside className="lg:w-1/3 lg:flex-shrink-0">
                            <div className="lg:sticky lg:top-0 py-8">
                                {headings.length > 0 && (
                                    <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg mb-8">
                                        <h3 className="text-3xl font-black mb-8 text-gray-900">Table of Contents</h3>
                                        <nav className="space-y-4">
                                            {headings.map((heading, index) => (
                                                <a
                                                    key={index}
                                                    href={`#${heading.id}`}
                                                    className={`block hover:text-purple-600 transition-colors leading-relaxed ${heading.level === 2 ? 'text-xl font-bold text-gray-900' : 'ml-6 text-lg text-gray-600'
                                                        }`}
                                                >
                                                    {heading.text}
                                                </a>
                                            ))}
                                        </nav>
                                    </div>
                                )}

                                {relatedArticles.length > 0 && (
                                    <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg">
                                        <h3 className="text-2xl font-black mb-6 text-gray-900">More to Read</h3>
                                        <div className="space-y-6">
                                            {relatedArticles.map((related) => (
                                                <Link
                                                    key={related.id}
                                                    href={`/blog/${related.slug}`}
                                                    className="group flex items-start gap-4"
                                                >
                                                    <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden rounded-lg">
                                                        <img
                                                            src={related.coverImage || '/assets/images/placeholder.jpg'}
                                                            alt={related.title}
                                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                        />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <h4 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors line-clamp-3 mb-1 leading-snug">
                                                            {related.title}
                                                        </h4>
                                                        <p className="text-sm text-gray-500">
                                                            {new Date(related.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                                        </p>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </aside>

                        {/* Main Content */}
                        <div className="lg:w-2/3 lg:flex-shrink-0">
                            {/* Excerpt */}
                            <div className="mb-12 p-8 rounded-2xl" style={{ backgroundColor: '#f8f9fa', borderLeft: '4px solid #667eea' }}>
                                <p className="text-xl md:text-2xl leading-relaxed italic" style={{ color: '#4a5568' }}>
                                    {article.excerpt}
                                </p>
                            </div>

                            {/* Article Body */}
                            <div
                                className="prose prose-xl max-w-none
                  prose-headings:font-black prose-headings:tracking-tight prose-headings:scroll-mt-8
                  prose-h2:text-4xl prose-h2:mt-16 prose-h2:mb-8 prose-h2:pb-4 prose-h2:border-b-2
                  prose-h3:text-3xl prose-h3:mt-12 prose-h3:mb-6
                  prose-p:text-xl prose-p:leading-relaxed prose-p:mb-8
                  prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
                  prose-strong:font-bold prose-strong:text-gray-900
                  prose-img:rounded-2xl prose-img:shadow-2xl prose-img:my-12
                  prose-blockquote:border-l-4 prose-blockquote:py-6 prose-blockquote:px-8 prose-blockquote:rounded-r-2xl prose-blockquote:text-xl prose-blockquote:italic
                  prose-code:px-3 prose-code:py-1 prose-code:rounded-lg prose-code:font-mono prose-code:text-lg
                  prose-ul:text-xl prose-ul:leading-relaxed prose-ul:my-8 prose-ul:space-y-3
                  prose-ol:text-xl prose-ol:leading-relaxed prose-ol:my-8 prose-ol:space-y-3
                  prose-li:my-2"
                                style={{
                                    '--tw-prose-body': '#2d3748',
                                    '--tw-prose-headings': '#1a202c',
                                    '--tw-prose-links': '#667eea',
                                    '--tw-prose-bold': '#1a202c',
                                    '--tw-prose-code': '#667eea',
                                    '--tw-prose-code-bg': '#f7fafc',
                                    '--tw-prose-quotes': '#4a5568',
                                    '--tw-prose-quote-borders': '#667eea',
                                    '--tw-prose-bullets': '#667eea',
                                    '--tw-prose-counters': '#667eea',
                                }}
                                dangerouslySetInnerHTML={{
                                    __html: article.content.replace(
                                        /<h([2-3])([^>]*)>(.*?)<\/h\1>/gi,
                                        (match, level, attrs, text) => {
                                            const id = text.replace(/<[^>]*>/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-');
                                            return `<h${level}${attrs} id="${id}">${text}</h${level}>`;
                                        }
                                    )
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 border-t border-gray-200" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
                    <h3 className="text-3xl font-bold mb-6" style={{ color: '#1a202c' }}>
                        Want to read more?
                    </h3>
                    <Link
                        href="/blog"
                        className="inline-flex items-center px-10 py-5 rounded-full font-bold text-xl text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                        style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
                    >
                        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                        </svg>
                        Explore All Articles
                    </Link>
                </div>
            </section>
        </article>
    );
}
