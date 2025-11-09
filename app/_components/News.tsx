"use client";
import { getNews } from "@/services";
import { useQuery } from "@tanstack/react-query";
import NewsSlider from "./NewsSlider";

const News = () => {
  const { data, isLoading } = useQuery({ // <-- Mulai dengan satu kurung kurawal
    queryKey: ['news'],
    queryFn: getNews,
  });

  return (
    <div className="mt-4">
      <div className="font-bold px-6">PCS News</div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {data && (
            <NewsSlider data={data} />
          )}
        </>
      )}
    </div>
  )
}

export default News;