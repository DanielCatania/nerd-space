export { default } from "@/screens/HomeScreen/";

export async function getServerSideProps() {
  const res = await fetch(`${process.env["URL_API"]}/api/articlesList/`);
  const data = await res.json();

  return { props: { data } };
}
