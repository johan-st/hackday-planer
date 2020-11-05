const fetchAll = async cb => {
  console.log(':::::fetchALL:::::');

  fetch('http://localhost:5000/api/tasks')
    .then(raw => {
      return raw.json();
    })
    .then(json => {
      cb(json);
    })
    .catch(err => alert(err));
};
export { fetchAll };
