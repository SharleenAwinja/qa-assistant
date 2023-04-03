export const queuePatients = async (requestBody: any) => {
  console.log("body", requestBody);
  const response = await fetch("/api/rde-sync/queue", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: requestBody,
  });
  return response;
};
