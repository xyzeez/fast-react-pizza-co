import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SearchOrder = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!query) return;

    navigate(`/order/${query}`);

    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="search order #"
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
};
