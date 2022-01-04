export function generateIP(): string {
  let ip_address =
    Math.floor(Math.random() * 255) +
    1 +
    "." +
    Math.floor(Math.random() * 255) +
    "." +
    Math.floor(Math.random() * 255) +
    "." +
    Math.floor(Math.random() * 255);
  return ip_address;
}

export async function middlewareBlockedIPs() {
  const response = await fetch("http://localhost:3000/api/fetchBlockedIPs", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let data = await response.json();
  console.log(data);
}
