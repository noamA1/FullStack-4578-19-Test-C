const getCompanies = async () => {
  const response = await fetch("http://localhost:5000/api/companies");
  const data = await response.json();
  return data;
};

const getMedicines = async () => {
  const response = await fetch("http://localhost:5000/api/meds");
  const medicinesData = await response.json();
  return medicinesData;
};

const getMedicinesByCompanyId = async (id) => {
  const response = await fetch("http://localhost:5000/api/meds/" + id);
  const medicinesData = await response.json();
  return medicinesData;
};

const updateMedicine = (id, reqBody) => {
  fetch("http://localhost:5000/api/meds/" + id, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(reqBody),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        console.log(data);
      } else {
        alert("Faild to add this medicine.");
      }
    })
    .catch((err) => {
      console.log("error: ");
      console.log(err);
    });
};

export { getCompanies, getMedicines, getMedicinesByCompanyId, updateMedicine };
