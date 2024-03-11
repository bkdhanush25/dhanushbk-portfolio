import React from "react";
import Image from "next/image";
import SingleBlog from "@/components/SingleBlog";


export async function generateMetadata({
  params,
}: {
  params: { title: string }
}) {
  return {
    title: params.title,
  }
}

const page = async ({ params }: { params: { title: string } }) => {

  return (
    <><SingleBlog/></>
  );
};

export default page;
