import {
  Table,
  Card,
  Title,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text
} from '@tremor/react';
import Image from 'next/image';
import { getServerSession } from 'next-auth/next';

interface Game {
  id: number;
  name: string;
  menu_title: string;
  category: string;
  image: string;
}
import { queryBuilder } from '../lib/planetscale';

export const dynamic = 'force-dynamic';

export async function UsersTable({ games }: { games: Game[] }) {

  
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Slug</TableHeaderCell>
          <TableHeaderCell>Provider</TableHeaderCell>
          <TableHeaderCell>Image</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {games.map((game) => (
          <TableRow key={game.id}>
            <TableCell>{game.name}</TableCell>
            <TableCell>
              <Text>{game.menu_title}</Text>
            </TableCell>
            <TableCell>
              <Text>
                {game.category}
              </Text>
            </TableCell>
            <TableCell>
              <Text>
                  <img 
                  width={'55px'}
                  height={'auto'}
                  src={"/api/gapiImg/"+game.category+"/"+game.menu_title+".png"}
                  />

              </Text>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default async function GamesTable({}) {
  const session = await getServerSession();
  if(!session?.user) {
    return (
      <>
        <p>You need to be logged in.</p>
      </>
    );
  } else {
    const games = await queryBuilder
    .selectFrom('Game')
    .select(['id', 'name', 'category', 'menu_title', 'image'])
    .limit(1000)
    .execute();
    
    var count = 0;
    await games.map((game) => (
      count = (count + 1)
    ));
    
    return (
      <>
        <Title>Games {count}</Title>
        <Text>
          List of games retrieved.
        </Text>
        <Card className="mt-6">
          {/* @ts-expect-error Server Component */}
          <UsersTable games={games} />
        </Card>
      </>
    );
  }
}
