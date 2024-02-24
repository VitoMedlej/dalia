import client from '@/database/mongodb';
import { ObjectId } from 'mongodb';
import type {NextApiResponse}
from 'next';
import {NextResponse} from 'next/server'
import {type NextRequest} from 'next/server'
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

export async function POST(req : NextRequest, res : NextApiResponse) {
    try {
        const { email, name, password } = await req.json();
        
        if (!email || !name || !password) {
            return NextResponse.json({ success: false });
        }

        const Users = await client.db("DALIA").collection("CLIENTS");

        const existingUser = await Users.findOne({ email });

        if (existingUser) {
            return NextResponse.json({ success: false, message: 'Email already exists' });
        }

        const hashedPassword = await bcrypt.hash(password.replace(/\s+/g, ''), 10);

        const newUser = {
            email,
            name,
            password: hashedPassword
        };

        const insertedUser = await Users.insertOne(newUser);

        if (!insertedUser) {
            throw 'Error creating user';
        }

        const token = await jwt.sign(
            { id: insertedUser._id, name, email },
            '241oi2j4oic9jcjzncxmbcnbcbcbcbcqjwhuiu9828941u1892zklsfojghgwquif-0qw0-olflfvmamsfklsanmiofqwrquwnv', // Replace with your actual secret key
            { expiresIn: '92h' }
        );

        if (!token) {
            throw 'Error generating token';
        }

        return NextResponse.json({ success: true, jwt: token, user:{name,email} });
        
    } catch (e) {
        console.log('Error:', e);
        return NextResponse.json({ success: false });
    }
}