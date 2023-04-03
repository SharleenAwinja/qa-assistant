import storage from "../../app/localStorage";
import { Patient } from "../../types/Patient";
import { ProcessQueuePayload } from "../../types/Payloads";

export const fetchMoh731SyncQueue = async (): Promise<Patient[]> => {
  const { user } = storage.loadData();
  const userId = user.uuid;
  console.log("user", userId);

  const response = await fetch(
    `/api/rde-sync/queue-patientlist?user_id=${userId}&reporting_month=2021-09-30` //2022-12-31
  );
  const data = await response.json();
  console.log("data", data);

  return data;
};

export const processQueuedPatients = async (payload: ProcessQueuePayload) => {
  return fetch("/api/rde-sync/process-queue-patients", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
