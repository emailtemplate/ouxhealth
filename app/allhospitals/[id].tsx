import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  const currentPage = router.query.id;

  console.log(currentPage);

  return <div>i an {currentPage}</div>;
};

export default Page;
