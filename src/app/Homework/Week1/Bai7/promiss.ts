import fetch from 'node-fetch';

async function callApi(): Promise<any> {
  const apiUrl = 'http://localhost:3000/posts/1';

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}


async function main() {
  try {
    const data = await callApi();
    console.log('API Response:', data);
  } catch (error) {
    console.error('Error calling API:', error);
  }
}

main();
