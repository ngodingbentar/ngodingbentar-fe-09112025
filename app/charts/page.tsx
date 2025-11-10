"use client"

import { useQuery } from "@tanstack/react-query";
import { getRoles } from "@/services";
import { RolesCharts } from "./_components/RolesCharts";
import HeaderBack from "../_components/Header.back";

const ChartsPage = () => {
  const { data } = useQuery({
    queryKey: ['roles'],
    queryFn: getRoles,
  });

  if (!data) return null;

  return (
    <>
      <HeaderBack title="Charts" />
      <RolesCharts roles={data} />
    </>
  )
}

export default ChartsPage;