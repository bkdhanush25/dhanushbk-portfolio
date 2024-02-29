// import { NextApiRequest, NextApiResponse } from 'next';
// import { PrismaClient } from '@prisma/client';

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method Not Allowed' });
//   }

//   const prisma = new PrismaClient();

//   try {
//     const { userMail } = req.body;

//     // Use Prisma client to store user mail in your database
//     const createdUser = await prisma.userModel.create({
//       data: {
//         userMail: userMail,
//       },
//     });

//     return res.status(201).json(createdUser);
//   } catch (error) {
//     console.error('Error storing user mail:', error);
//     return res.status(500).json({ message: 'Internal Server Error' });
//   } finally {
//     await prisma.$disconnect();
//   }
// }
