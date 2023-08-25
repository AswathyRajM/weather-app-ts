export const timeConverter = (UNIX_timestamp: number) => {
  return new Date(UNIX_timestamp).toLocaleTimeString();
};
