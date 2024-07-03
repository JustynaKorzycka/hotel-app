interface ITraveler {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {};
  phone: string;
  website: string;
  company: {};
}

const TravelerPage = async ({ params }: { params: { slug: string } }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users?name=${params.slug}`
  );
  const travelerData = await res.json();
  const traveler = travelerData[0];
  return (
    <>
      <h1>{traveler.name}</h1>
    </>
  );
};

export default TravelerPage;

export async function generateStaticParams() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const travelers = await response.json();

  return travelers.map((traveler: ITraveler) => ({
    slug: `${traveler.name.replace(/\s/g, "%20")}`,
  }));
}

export const dynamicParams = false;
