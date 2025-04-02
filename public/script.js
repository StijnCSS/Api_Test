async function getQuote() {
    try {
      const res = await fetch('/api/quote');
      const data = await res.json();
      document.getElementById('quote').textContent = data.quote;
    } catch (error) {
      console.error('Error fetching quote:', error);
      document.getElementById('quote').textContent = 'Oops, something went wrong.';
    }
  }