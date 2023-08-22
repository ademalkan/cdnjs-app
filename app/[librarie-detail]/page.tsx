import React from "react";

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://api.cdnjs.com/libraries/jquery`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

const LibrarieDetail = ({ data }) => {
  console.log(data);
  return <div>LibrarieDetail</div>;
};

export default LibrarieDetail;
