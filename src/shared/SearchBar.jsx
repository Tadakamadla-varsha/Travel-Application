import { useState } from "react";
import { MapPin, Navigation, Users, Search } from "lucide-react";
import "../shared/SearchBar.css";

const SearchBar = () => {
  const [location, setLocation] = useState("");
  const [distance, setDistance] = useState("");
  const [maxPeople, setMaxPeople] = useState("0");

  const handleSearch = () => {
    console.log({ location, distance, maxPeople });
  };

  return (
    <div className="search-bar-wrapper">
      <div className="search-bar">
        <div className="search-content">

          {/* Location */}
          <div className="search-field">
            <MapPin className="search-icon" />
            <div className="search-input-wrapper">
              <label className="search-label">Location</label>
              <input
                type="text"
                className="search-input"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Where are you going?"
              />
            </div>
          </div>

          <div className="search-divider"></div>

          {/* Distance */}
          <div className="search-field">
            <Navigation className="search-icon" />
            <div className="search-input-wrapper">
              <label className="search-label">Distance</label>
              <input
                type="text"
                className="search-input"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
                placeholder="Distance (km)"
              />
            </div>
          </div>

          <div className="search-divider"></div>

          {/* Max People */}
          <div className="search-field">
            <Users className="search-icon" />
            <div className="search-input-wrapper">
              <label className="search-label">Max People</label>
              <input
                type="number"
                className="search-input"
                value={maxPeople}
                onChange={(e) => setMaxPeople(e.target.value)}
                placeholder="0"
              />
            </div>
          </div>

          {/* Search Button */}
          <button className="search-button" onClick={handleSearch}>
            <Search className="search-button-icon" />
          </button>

        </div>
      </div>
    </div>
  );
};

export default SearchBar;
