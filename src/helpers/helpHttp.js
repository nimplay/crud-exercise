export const helpHttp = (url) => {
  const custonFech = (endpoint, options) => {
    const defHeaders = {      
      accept: "application/json",
    };

    const controller = new AbortController();    
    options.signal = controller.signal;

    options.method = options.method || "GET";
    options.headers = options.headers ? { ...defHeaders, ...options.headers }: defHeaders;

    options.body = JSON.stringify(options.body) || false;
    if(!options.body) delete options.body;
      
    setTimeout(() => controller.abort(),3000);
    
   
    return fetch(endpoint, options)
    .then(res => 
      res.ok 
      ? res.json()
      : Promise.reject({
      err: true,
      status: res.status || "00",
      statusText: res.statusText || 'Error desconocido',
    })
    )
    .catch(err => err)
  }
  
  const get = (url, options = {}) => custonFech(url, options);
    const post = (url, options = {}) => {
      options.method ="POST";
      return custonFech(url, options);
    }
  const put = (url, options = {}) => {
    options.method = "PUT";
    return custonFech(url, options);
  }
  const del = (url, options = {}) => {
    options.method = "DELETE";
    return custonFech(url, options);
  }

  return {
    get,
    post,
    put,
    del,
  }
}