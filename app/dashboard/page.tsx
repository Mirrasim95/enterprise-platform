"use client";

import { useQuery } from "@tanstack/react-query";

export default function Page() {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => fetch("./api/products").then((res) => res.json()),
  });

  if (isLoading) {
    return <div>...Loading</div>;
  }
  return (
    <div>
      <div>
        {data?.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </div>
  );
}
