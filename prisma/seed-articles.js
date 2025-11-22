const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    // Create sample articles with varied content
    const articles = [
        {
            title: 'The Future of Cybersecurity in 2025',
            slug: 'future-of-cybersecurity-2025',
            excerpt: 'Explore the emerging trends and technologies that will shape the cybersecurity landscape in the coming years.',
            content: '<p>As we approach 2025, the cybersecurity landscape is evolving at an unprecedented pace. AI-driven threats, quantum computing, and the expanding IoT ecosystem are creating new challenges for security professionals.</p><p>In this article, we delve into the key predictions for the next few years and how organizations can prepare themselves.</p>',
            coverImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
            tags: 'Security, AI, Tech',
            isPublished: true,
        },
        {
            title: 'Mastering React Server Components',
            slug: 'mastering-react-server-components',
            excerpt: 'A comprehensive guide to understanding and implementing React Server Components in your Next.js applications.',
            content: '<p>React Server Components (RSC) represent a paradigm shift in how we build React applications. By moving component rendering to the server, we can significantly reduce bundle sizes and improve performance.</p><p>This guide covers everything you need to know to get started with RSC.</p>',
            coverImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80',
            tags: 'React, Next.js, Web Development',
            isPublished: true,
        },
        {
            title: 'The Art of Business Development',
            slug: 'art-of-business-development',
            excerpt: 'Strategies and insights for growing your business and building lasting partnerships.',
            content: '<p>Business development is more than just sales; it\'s about creating long-term value for an organization from customers, markets, and relationships.</p><p>Learn the core principles that drive successful business development strategies.</p>',
            coverImage: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
            tags: 'Business, Growth, Strategy',
            isPublished: true,
        },
        {
            title: 'Understanding Zero Trust Architecture',
            slug: 'understanding-zero-trust',
            excerpt: 'Why "Never Trust, Always Verify" is becoming the standard for modern network security.',
            content: '<p>Zero Trust is a security framework requiring all users, whether in or outside the organization\'s network, to be authenticated, authorized, and continuously validated for security configuration and posture before being granted or keeping access to applications and data.</p>',
            coverImage: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=800&q=80',
            tags: 'Security, Zero Trust, Network',
            isPublished: true,
        },
        {
            title: 'Building Progressive Web Apps: Bridging The Gap Between Web And Mobile',
            slug: 'building-progressive-web-apps',
            excerpt: 'Integrating mindfulness practices helps developers cultivate present-moment awareness, fostering focus, problem-solving, and work-life balance.',
            content: '<p>Progressive Web Apps (PWAs) combine the best of web and mobile apps. They work offline, send push notifications, and can be installed on your device, all while being built with standard web technologies.</p><p>Learn how to build PWAs that provide native-like experiences for your users.</p>',
            coverImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
            tags: 'Web Development, PWA, Mobile',
            isPublished: true,
        },
        {
            title: 'Best Practices For Web Accessibility: Building Inclusive Websites',
            slug: 'web-accessibility-best-practices',
            excerpt: 'Creating websites that everyone can use, regardless of their abilities or disabilities.',
            content: '<p>Web accessibility ensures that people with disabilities can perceive, understand, navigate, and interact with websites and tools. It also benefits people without disabilities, such as those using mobile devices or slow Internet connections.</p>',
            coverImage: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80',
            tags: 'Code Quality, Accessibility, Web',
            isPublished: true,
        },
        {
            title: 'RESTful APIs: Building Blocks Of Modern Web Applications',
            slug: 'restful-apis-building-blocks',
            excerpt: 'Understanding and implementing RESTful APIs for scalable modern web applications.',
            content: '<p>REST (Representational State Transfer) is an architectural style for designing networked applications. It relies on a stateless, client-server protocol, almost always HTTP.</p><p>In this article, we explore best practices for building robust RESTful APIs.</p>',
            coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
            tags: 'Code Quality, API, Backend',
            isPublished: true,
        },
        {
            title: 'Mindfulness And Meditation Techniques For Developers',
            slug: 'mindfulness-for-developers',
            excerpt: 'Improving focus and clarity through mindfulness practices tailored for software developers.',
            content: '<p>The tech industry is known for its fast pace and high stress. Mindfulness and meditation can help developers manage stress, improve focus, and enhance overall well-being.</p><p>Discover practical techniques you can incorporate into your daily routine.</p>',
            coverImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
            tags: 'Productivity, Wellness, Focus',
            isPublished: true,
        },
        {
            title: 'Mastering CSS Grid Layout: A Comprehensive Guide',
            slug: 'mastering-css-grid-layout',
            excerpt: 'Learn how to create complex, responsive layouts with CSS Grid in this comprehensive guide.',
            content: '<p>CSS Grid Layout is a two-dimensional layout system for the web. It lets you lay content out in rows and columns and has many features that make building complex layouts straightforward.</p>',
            coverImage: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&w=800&q=80',
            tags: 'CSS, Frontend, Web Development',
            isPublished: true,
        },
        {
            title: 'The Rise Of Progressive Web Apps (PWAs): A Game Changer In Web Development',
            slug: 'rise-of-progressive-web-apps',
            excerpt: 'How PWAs are revolutionizing the way we think about web and mobile applications.',
            content: '<p>Progressive Web Apps are transforming the digital landscape. They offer the reliability of native apps with the reach of the web, all while being easier to develop and maintain.</p>',
            coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
            tags: 'PWA, Mobile, Innovation',
            isPublished: true,
        },
        {
            title: 'Best Practices For Writing Clean And Maintainable Code',
            slug: 'clean-code-best-practices',
            excerpt: 'Essential principles and patterns for writing code that\'s easy to read, understand, and maintain.',
            content: '<p>Clean code is more than just code that works. It\'s code that is easy to understand, modify, and extend. Learn the principles that will make you a better developer.</p>',
            coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
            tags: 'Code Quality, Best Practices, Software',
            isPublished: true,
        },
        {
            title: 'Automating Repetitive Tasks: Productivity Hacks For Developers',
            slug: 'automating-repetitive-tasks',
            excerpt: 'Save time and reduce errors by automating your daily development workflows.',
            content: '<p>Automation is key to productivity. By automating repetitive tasks, developers can focus on what really matters: solving complex problems and creating value.</p>',
            coverImage: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&w=800&q=80',
            tags: 'Productivity, Automation, Tools',
            isPublished: true,
        },
    ];

    for (const article of articles) {
        await prisma.article.upsert({
            where: { slug: article.slug },
            update: {},
            create: article,
        });
    }

    console.log('Sample articles added successfully!');
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
