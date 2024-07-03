import { data } from "@/components/hotels/HotelsList";

const HotelPage = ({ params }: { params: { slug: string } }) => {
  return <>{`slug ${params.slug}`}</>;
};

export default HotelPage;

export async function generateStaticParams() {
  const hotels = data;

  return hotels.map((hotel) => ({
    slug: hotel.slug,
  }));
}

export const dynamicParams = false;
