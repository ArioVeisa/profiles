const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const publishedArticles = await prisma.article.findMany({
        where: { isPublished: true },
        orderBy: { createdAt: 'desc' }
    });

    console.log('Published articles (Ordered by Descending Date):');
    publishedArticles.forEach((a, index) => {
        console.log(`${index + 1}. ${a.title}`);
        console.log(`   ID: ${a.id}`);
        console.log(`   Created: ${a.createdAt}`);
    });
}

main()
    .catch(e => console.error(e))
    .finally(async () => await prisma.$disconnect());
