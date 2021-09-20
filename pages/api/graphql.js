import {gql, ApolloServer }from "apollo-server-micro";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const typeDefs = gql`

    type Ticket {
        id: String 
        isAlive: Boolean
        createdAt: String
        updatedAt: String
        operatorId: String
        userId: String
        ticketProblemId: String
    }

    type User {
        userId:      String  
        userEmail:   String   
        userName:    String
        userSurname: String
    }
    type Operator {
        operatorId:      String  
        operatorEmail:   String   
        operatorName:    String
        operatorSurname: String
    }

    type Query {
        tickets: [Ticket]
    }

`;

const resolvers = {

	Query: {
		tickets: (_parent, _args, _context) => {
			return prisma.ticket.findMany();
		},
	}, 
    
};

const apolloServer =  new ApolloServer({typeDefs, resolvers });


export const config = {api: { bodyParser: false,},};


export default apolloServer.createHandler({path: "api/graphql"});




