export function merge(data1, data2) {
  const start = Date.now();
  let data = [];

  if ((!data1 || data1.length == 0) || (!data2 || data2.length == 0) ) {
    console.error('No data provided');
  }

  //your code - start
  let keyProp = "name";
  data = data1.filter(d1 => !data2.find(d2 => d1[keyProp] === d2[keyProp])).concat(data2);

  //your code - end

  const duration = Date.now() - start;
  console.log("Merge duration: ", duration);
  return data;
}