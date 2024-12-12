import { notFound } from "next/navigation";

export default async function DetailItemsPage({
  params,
}: {
  params: { id: string };
}) {
  console.log("Params:", params);

  if (!params?.id) {
    console.error("`id`가 전달되지 않았습니다.");
    return notFound();
  }

  return <div>ID: {params.id}</div>;
}
