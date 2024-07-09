import BusinessList from './components/BusinessList';
import './App.css';
import SearchBar from './components/SearchBar';

function App() {
  let businesses = [{
    image: "https://via.placeholder.com/150",
    name: "Panda Express",
    address: "123 Main St",
    city: "Wahiawa",
    state: "HI",
    zipcode: "96786",
    category: "Chinese",
    rating: 4.0,
    review_count: 100
  }, {
    image: "https://via.placeholder.com/150",
    name: "Raising Canes",
    address: "124 Main St",
    city: "Wahiawa",
    state: "HI",
    zipcode: "96786",
    category: "Fast Food",
    rating: 4.0,
    review_count: 100
  }, {
    image: "https://via.placeholder.com/150",
    name: "Burger King",
    address: "124 Main St",
    city: "Wahiawa",
    state: "HI",
    zipcode: "96786",
    category: "Fast Food",
    rating: 4.0,
    review_count: 100
  }
  ];
  return (
    <div className="App m-5">
      <SearchBar/>
      <BusinessList
        businesses={businesses}
      />
    </div>
  );
}

export default App;
