import GoClient from "./go-client";

export const dynamic = "force-dynamic";

export default async function GoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  return <GoClient restaurantId={resolvedParams.id} />;
}
