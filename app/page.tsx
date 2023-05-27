import GamesTable from './table';

export const dynamic = 'force-dynamic';

export default async function IndexPage({
  user
}: {
  user: any
}) {

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
        <GamesTable />
        </main>
  );
}
