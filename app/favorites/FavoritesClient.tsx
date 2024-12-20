import { SafeListing, SafeUser } from '../types'
import Container from '../components/Container'
import Heading from '../components/Heading'
import ListingCard from '../components/listings/ListingCard'

interface FavoritesClientProps {
  listings: SafeListing[]
  currentUser?: SafeUser | null
}

const FavoritesClient: React.FC<FavoritesClientProps> = ({ listings, currentUser }) => (
  <Container>
    <Heading title="Favorites" subtitle="List of places you have favorited!" />
    {/* eslint-disable-next-line */}
    <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
      {listings.map((listing) => (
        <ListingCard currentUser={currentUser} key={listing.id} data={listing} />
      ))}
    </div>
  </Container>
)

export default FavoritesClient
