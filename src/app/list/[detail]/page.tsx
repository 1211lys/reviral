import React from "react";

interface Props {
  slug: string;
}

export default function Slug({ slug }: Props) {
  return <div>detail{slug}</div>;
}
