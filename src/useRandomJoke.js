import { useEffect, useState } from 'react';

const BASE_URL = 'https://api.icndb.com/jokes/random';

const useRandomJoke = (firstName, lastName) => {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    const fetchJoke = async () =>
      await fetch(`${BASE_URL}?firstName=${firstName}&lastName=${lastName}`)
        .then((res) => res.json())
        .then((data) => {
          setJoke(data.value.joke);
        });

    fetchJoke();
  }, [firstName, lastName]);

  return joke;
};

export default useRandomJoke;
