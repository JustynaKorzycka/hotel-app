import ListItem from "./ListItem";

export const data = [
  { id: "1", slug: "triada", name: "Triada" },
  { id: "2", slug: "filozof", name: "Filozof" },
  { id: "3", slug: "artemida", name: "Artemida" },
];

const HotelsList = () => {
  return (
    <div>
      {data.map((hotel) => (
        <ListItem
          name={hotel.name}
          link={`/hotels/${hotel.slug}`}
          key={hotel.id}
        />
      ))}
    </div>
  );
};

export default HotelsList;
