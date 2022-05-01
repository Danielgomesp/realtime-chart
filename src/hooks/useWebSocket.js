import { toast } from 'components/Toast';
import { useEffect } from 'react';
import { Socket } from 'api/socket';

export default function useWebSocket(handleOnMessage) {
  const socket = Socket();

  return useEffect(() => {
    const ws = socket.init();

    ws.onmessage = ({ data }) => {
      const parsedData = JSON.parse(data);
      handleOnMessage(parsedData);
    };
    ws.onopen = () => toast.info('We are connected! :)');
    ws.onerror = (error) => {
      toast.error(error?.message);
    };
    ws.onclose = () => toast.warn('We are disconnected!');

    return () => {
      ws.close();
    };
  }, []);
}
