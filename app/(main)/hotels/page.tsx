import HotelsList from "@/components/hotels/HotelsList";
//ssr
export const dynamic = "force-dynamic";

const HotelsPage = () => {
  return (
    <div>
      <h1>Hotels</h1>
      <HotelsList />
    </div>
  );
};

export default HotelsPage;
