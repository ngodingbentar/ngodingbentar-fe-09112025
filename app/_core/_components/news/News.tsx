"use client";
import { getNews } from "@/app/_core/services";
import { useQuery } from "@tanstack/react-query";
import NewsSlider from "./NewsSlider";

const News = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['news'],
    queryFn: getNews,
  });

  return (
    <div className="mt-4">
      <div className="font-bold px-6">PCS News</div>
      {isLoading ? (
        <div className="flex w-full justify-center items-center">Loading...</div>
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