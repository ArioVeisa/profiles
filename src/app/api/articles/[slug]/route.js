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

export async function GET(request, { params }) {
    const { slug } = await params;

    try {
        const article = await prisma.article.findUnique({
            where: { slug },
        });

        if (!article) {
            return NextResponse.json(
                { error: 'Article not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(article);
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fetch article' },
            { status: 500 }
        );
    }
}

export async function PUT(request, { params }) {
    const user = await verifyToken();
    if (!user) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { slug } = await params;

    try {
        const body = await request.json();
        const article = await prisma.article.update({
            where: { slug },
            data: body,
        });

        return NextResponse.json(article);
    } catch (error) {
        console.error('Update article error:', error);
        return NextResponse.json(
            { error: 'Failed to update article' },
            { status: 500 }
        );
    }
}

export async function DELETE(request, { params }) {
    const user = await verifyToken();
    if (!user) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { slug } = await params;

    try {
        await prisma.article.delete({
            where: { slug },
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Delete article error:', error);
        return NextResponse.json(
            { error: 'Failed to delete article' },
            { status: 500 }
        );
    }
}
