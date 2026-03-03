import { useEffect, useState } from "react";
import { Suggestions } from "./Suggestions";

export const SearchAutocomplete = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const handleChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  const handleClick = (e) => {
    setShowDropdown(false);
    setSearchParam(e.target.innerText);
    setFilteredUsers([]);
  };

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await fetch(`https://dummyjson.com/users`);
      const data = await res.json();

      if (data && data.users && data.users.length) {
        setUsers(data.users.map((user) => user.firstName));
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <h1>Loading data... Please wait</h1>;
  }

  return (
    <div className="search-autocomplete-container">
      <input
        value={searchParam}
        type="text"
        name="search-user"
        placeholder="Search user here..."
        onChange={handleChange}
      />
      {showDropdown && (
        <Suggestions data={filteredUsers} handleClick={handleClick} />
      )}
    </div>
  );
};
