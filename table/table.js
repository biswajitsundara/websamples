let refreshCount = 0;
const maxRefreshCount = 5;
let jobID;

function addJob() {
  var newRow = document.createElement("tr");
  jobID = document.getElementById("jobTable").rows.length;
  var jobName = "Create a New User job " + jobID;
  var jobStatus = "Pending";

  newRow.innerHTML = `<td>${jobID}</td>
      <td>${jobName}</td>
      <td id=job${jobID}Status class='pending'>${jobStatus}</td>
     `;

  document.getElementById("jobTable").appendChild(newRow);
}

function refreshStatus() {
  refreshCount++;
  if (refreshCount >= maxRefreshCount) {
    setTimeout(function () {
      const cellId = `job${jobID}Status`;
      document.getElementById(cellId).innerHTML = "Success";
      document.getElementById(cellId).classList.remove("pending");
      document.getElementById(cellId).classList.add("success");
    }, 5000);
  }
}
