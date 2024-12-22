import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function syncUser() {
  try {
    const user = {
      clerkId: 'user_2qOJ4xwQS3yov8t62nZMYbxGqxn', // Use clerkId for matching
      fullname: 'Sabarish',
      type: 'standard',
      stripeId: null,
    };

    // Upsert user based on clerkId
    const dbUser = await prisma.user.upsert({
      where: { clerkId: user.clerkId }, // Match on clerkId
      update: {
        fullname: user.fullname,
        type: user.type,
        updatedAt: new Date(),
      },
      create: {
        clerkId: user.clerkId,
        fullname: user.fullname,
        type: user.type,
      },
    });

    console.log('User synced:', dbUser);

    // Fetch all users
    const allUsers = await prisma.user.findMany();
    console.log('All Users in DB:', allUsers);
  } catch (error) {
    console.error('Error syncing user:', error);
  } finally {
    await prisma.$disconnect();
  }
}

syncUser();
