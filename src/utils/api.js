const makeRequest = async (
  url,
  method = 'GET',
  contentType = 'application/x-www-form-urlencoded'
) => {
  const headers = new Headers();
  headers.append('Content-Type', contentType);
  try {
    const response = await fetch(
      url,
      {
        method,
        headers
      });
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.log('Error: ', error);
  }
};

export default makeRequest;