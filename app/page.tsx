import GamesTable from './table';

export const dynamic = 'force-dynamic';

export default async function IndexPage({
  searchParams,
  user
}: {
  searchParams: { q: string },
  user: any
}) {
  const search = searchParams.q ?? '';

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
        <GamesTable searchParams={search} />
    </main>
  );
}
