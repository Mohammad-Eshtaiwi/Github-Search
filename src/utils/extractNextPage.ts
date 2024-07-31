export default function extractNextPage(header: string) {
  const match = header.match(/<([^>]+)>; rel="next"/);
  const url = match ? match[1] : null;
  return url;
}
