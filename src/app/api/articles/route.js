import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'supersecretkeychangeinproduction';

// Helper to verify token
async function verifyToken() {
    const cookieStore = await cookies();
    const token = cookieStore.get('admin_token')?.value;

    if (!token) return null;

    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (error) {
        return null;
    }
}

export async function GET() {
    try {
        const articles = await prisma.article.findMany({
            orderBy: { createdAt: 'desc' },
        });
        return NextResponse.json(articles);
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fetch articles' },
            { status: 500 }
        );
    }
}

export async function POST(request) {
    const user = await verifyToken();
    if (!user) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const body = await request.json();
        const { title, slug, content, excerpt, coverImage, tags, isPublished } = body;

        const article = await prisma.article.create({
            data: {
                title,
                slug,
                content,
                excerpt,
                coverImage,
                tags,
                isPublished: isPublished ?? true,
            },
        });

        return NextResponse.json(article, { status: 201 });
    } catch (error) {
        console.error('Create article error:', error);
        if (error.code === 'P2002') {
            return NextResponse.json(
                { error: 'Slug already exists' },
                { status: 400 }
            );
        }
        return NextResponse.json(
            { error: 'Failed to create article' },
            { status: 500 }
        );
    }
}
