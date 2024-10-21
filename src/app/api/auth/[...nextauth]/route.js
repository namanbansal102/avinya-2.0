import NextAuth from "next-auth/next"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import UserSchema from "../../../../../models/UserSchema";
import connectDb from "../../../../../middleware/mongoose";
import { signOut } from "next-auth/react";

const authoptions={
    providers:[
        CredentialsProvider({
            name:"credentials",
            credentials:{
                email:{label:"username",type:"text"},
                password:{label:"password",type:"password"},
            },
            async authorize(credentials){
                
                console.log(process.env.NEXTAUTH_SECRET);
                
                console.log("credentials on backend is:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::",credentials);
                await connectDb()
                if (credentials.email==null || credentials.email==undefined) {
                    return null;
                }
                const data=await UserSchema.findOne({"email":credentials.email,"password":credentials.password})
                if(data==null || data==undefined){
                    return null;
                }
            console.log("my Data Fetched From Backend in route file is::::",data);

          
                const user={id:data._id,name:[{"name":data.firstName
                }],email:data.email}
                console.log("user is::::",user);
                return user;
            }
        }),
    ],
    session:{
        strategy:"jwt" 
    },
    secret:process.env.NEXTAUTH_SECRET,
    pages:{
        signIn:"/login",
        
    }
}
const handler=NextAuth(authoptions);
export {handler as GET,handler as POST} 
