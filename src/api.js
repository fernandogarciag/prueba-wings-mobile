const BASE_URL = "http://localhost:3001";

async function callApi(endpoint, options = {}) {
  options.headers = {
    "Content-Type": "application/json",
    pragma: "no-cache",
    "cache-control": "no-store",
  };

  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}

const api = {
  tasks: {
    list() {
      return callApi("/tasks");
    },
    create(task) {
      return callApi(`/tasks`, {
        method: "POST",
        body: JSON.stringify(task),
      });
    },
    read(taskId) {
      return callApi(`/tasks/${taskId}`);
    },
    update(taskId, updates) {
      return callApi(`/tasks/${taskId}`, {
        method: "PUT",
        body: JSON.stringify(updates),
      });
    },
    remove(taskId) {
      return callApi(`/tasks/${taskId}`, {
        method: "DELETE",
      });
    },
  },
};

export default api;
