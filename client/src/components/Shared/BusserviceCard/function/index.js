export const getTimeDifference = (dateString, dateNow) => {
  const ArrivalDate = new Date(dateString);
  const timeDifferenceInSeconds = parseInt((ArrivalDate - dateNow) / 1000);
  const minutes = parseInt(timeDifferenceInSeconds / 60);
  const seconds = parseInt(timeDifferenceInSeconds % minutes);
  return { seconds, minutes };
};
