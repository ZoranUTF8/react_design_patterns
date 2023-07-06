import { Listing } from "./Listing";
import { ListingsGrid } from "./ListingGrid";

export default function Listings({ data }) {
  if (!data) return null;

  return (
    <ListingsGrid>
      {data?.listings.map((listing) => (
        <Listing key={listing.id} listing={listing} />
      ))}
    </ListingsGrid>
  );
}
