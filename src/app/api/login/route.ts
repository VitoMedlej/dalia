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

        const {email,password} = await req.json()
    if (!password || !email) {
        return NextResponse.json({success: false});      
    }
    
    const Users = await client.db("DALIA").collection("CLIENTS");

    // let moreProducts: any[]= []
    const selectedUser = await Users
    .findOne({email});
     
    if (!selectedUser) {
        return NextResponse.json({success: false});
    }


    const isSameUser = await bcrypt.compare(password.replace(/\s+/g, ''), selectedUser?.password);
      
    if(isSameUser) {
       const token = await jwt.sign({ id:selectedUser._id,name:selectedUser.name,
        email:selectedUser.email }, `241oi2j4oic9jcjzncxmbcnbcbcbcbcqjwhuiu9828941u1892zklsfojghgwquif-0qw0-olflfvmamsfklsanmiofqwrquwnv`,{ expiresIn: '94h' });
       if (!token) {throw 'Error generating token'}
       return NextResponse.json({success:true, authorized: true,jwt: token,user:{name : selectedUser.name ,email}});


       }



}
catch ( e) {
    console.log(' e: get by id:',  e);
    return NextResponse.json({
        success: false
      
    });
}

}
export const dynamic = 'force-dynamic'