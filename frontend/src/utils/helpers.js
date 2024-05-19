export const formatHtmlMaxDate = (dateStr) => {
  // const dateStr = "Sat May 18 2024 20:44:34 GMT+0530 (India Standard Time)";
  const date = new Date(dateStr);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
};

export const formatCompanyFoundationDate = (dateStr) => {
  const date = new Date(dateStr);

  const day = String(date.getUTCDate()).padStart(2, "0");
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const year = date.getUTCFullYear();

  const formattedDate = `${day}-${month}-${year}`;
  return formattedDate;
};

export const formatTime = (dateStr) => {
  const date = new Date(dateStr);

  const hours = String(date.getUTCHours()).padStart(2, "0");
  const minutes = String(date.getUTCMinutes()).padStart(2, "0");

  const formattedTime = `${hours}:${minutes}`;
  return formattedTime;
};
