export function fetchPosts() {
  return new Promise<{ data: any[] }>((resolve) => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => resolve({ data: json }));
  });
}
