const API_KEY = "pk_63509e5b43384ab08845be28759fb5ea"
const API_BASE_URL = "https://cloud.iexapis.com/stable"


/**
 * 
 * ToDo - add browser cache
 * 
 * @param symbol 
 */
export async function getQuote(symbol = 'AAPL') {
  const request = new Request(`${API_BASE_URL}/${symbol}/quote?token=${API_KEY}`);

  try {
    const newResponse = await window.fetch(request)
    if (!newResponse.ok) {
      throw new Error('Bad request')
    }
    return newResponse.json();
  } catch (e) {
    return Promise.reject(e.message)
  }
}

export async function getBatch(symbol = 'AAPL') {
  const request = new Request(`${API_BASE_URL}/${symbol}/batch?token=${API_KEY}`);

  try {
    const newResponse = await window.fetch(request)
    if (!newResponse.ok) {
      throw new Error('Bad request')
    }
    return newResponse.json();
  } catch (e) {
    return Promise.reject(e.message)
  }
}

export async function getSymbols() {
  const request = new Request(`${API_BASE_URL}/ref-data/symbols?token=${API_KEY}`);

  try {
    const newResponse = await window.fetch(request)
    console.log(newResponse.headers.get('date'))
    if (!newResponse.ok) {
      throw new Error('Bad request')
    }
    const resolvedBody = await newResponse.json();
    // @ts-ignore
    return resolvedBody.map(symbolPayload => ({
      [symbolPayload.symbol]: symbolPayload.name
    }))
  } catch (e) {
    return Promise.reject(e.message)
  }
}

// historical - GET /stock/{symbol}/chart/{range}/{date}
// search - GET /search/{fragment}


