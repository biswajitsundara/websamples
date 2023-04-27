function addJob() {
  var newRow = document.createElement("tr");
  var jobID = document.getElementById("jobTable").rows.length;
  var jobName = "Create a New User job " + jobID;
  var jobStatus = "Pending";

  newRow.innerHTML = `<td>${jobID}</td>
      <td>${jobName}</td>
      <td id=job${jobID}Status>${jobStatus}</td>
     `;

  document.getElementById("jobTable").appendChild(newRow);

  setTimeout(function () {
    const cellId = `job${jobID}Status`;
    document.getElementById(cellId).innerHTML = "Success";
    document.getElementById(cellId).classList.add('success');

  }, 5000);
}
