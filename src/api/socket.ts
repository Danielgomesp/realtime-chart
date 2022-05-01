export function Socket() {
  function init() {
    const url = 'ws://localhost:8999';
    return new WebSocket(url);
  }

  return {
    init,
  };
}
