export default function cleanQueryParams(query:any) {
    for (var propName in query) {
      if (!query[propName]) {
        delete query[propName];
      }
    }
    return query;
}
  