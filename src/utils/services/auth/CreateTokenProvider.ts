const CreateTokenProvider = () => {
  let currentToken: string | null = localStorage.getItem('token') || null;

  const setToken = (token: typeof currentToken) => {
    if (token) {
      localStorage.setItem('token', JSON.stringify(token));
    } else {
      localStorage.removeItem('token');
    }
    currentToken = token;
    notify();
  };

  const isLoggedIn = () => !!currentToken;

  let observers: Array<(isLogged: boolean) => void> = [];

  const subscribe = (observer: (isLogged: boolean) => void) => {
    observers.push(observer);
  };

  const unsubscribe = (observer: (isLogged: boolean) => void) => {
    observers = observers.filter((_observer) => _observer !== observer);
  };

  const notify = () => {
    const isLogged = isLoggedIn();
    observers.forEach((observer) => observer(isLogged));
  };

  return {
    isLoggedIn,
    setToken,
    subscribe,
    unsubscribe
  };
};

export default CreateTokenProvider;
