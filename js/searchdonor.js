var db = firebase.database();

function get_data() {
  var sts = document.getElementById("sts").value;
  var city = document.getElementById("state").value;
  var blood = document.getElementById("blood").value;
  
  // Convert blood group selection to blood type string
  if (A.selected) {
    blood = "A+";
  } else if (O.selected) {
    blood = "O+";
  } else if (B.selected) {
    blood = "B+";
  } else if (AB.selected) {
    blood = "AB+";
  } else if (An.selected) {
    blood = "A-";
  } else if (On.selected) {
    blood = "O-";
  } else if (Bn.selected) {
    blood = "B-";
  } else if (ABn.selected) {
    blood = "AB-";
  }

  db.ref("data/")
    .once("value")
    .then((snapshot) => {
      var dataFound = false; // Flag to check if data is found
      snapshot.forEach((ele) => {
        if (ele.val().sts === sts && ele.val().state === city && ele.val().blood === blood) {
          dataFound = true;
          var tr = document.createElement("tr");
          var td = document.createElement("td");
          var td1 = document.createElement("td");
          var td2 = document.createElement("td");
          var td3 = document.createElement("td");
          var td4 = document.createElement("td");
          var td5 = document.createElement("td");
          td.innerHTML = ele.val().user;
          td1.innerHTML = ele.val().number;
          td2.innerHTML = ele.val().mail;
          td3.innerHTML = ele.val().blood;
          td4.innerHTML = ele.val().state;
          td5.innerHTML = ele.val().sts;
          tr.append(td, td1, td2, td3, td4, td5);
          document.getElementById("root").appendChild(tr);
        }
      });
      // Show "Data not available" only if no matching data is found
      if (!dataFound) {
        alert("Data not available");
        window.location.href = "searchdonor.html";
      }
      // Hide container and show the results
      document.getElementById("container").style.display = "none";
      document.getElementsByClassName("container4")[0].style.display = "block";
    });
}

function get_data1() {
  var sts = document.getElementById("sts").value;
  var city = document.getElementById("state").value;

  db.ref("bloodbankdata/")
    .once("value")
    .then((snapshot) => {
      var dataFound = false; // Flag to check if data is found
      snapshot.forEach((ele) => {
        if (ele.val().sts === sts && ele.val().state === city) {
          dataFound = true;
          var tr = document.createElement("tr");
          var td = document.createElement("td");
          var td1 = document.createElement("td");
          var td2 = document.createElement("td");
          var td3 = document.createElement("td");
          var td4 = document.createElement("td");
          var td5 = document.createElement("td");
          td.innerHTML = ele.val().user;
          td1.innerHTML = ele.val().number;
          td2.innerHTML = ele.val().mail;
          td3.innerHTML = ele.val().state;
          td4.innerHTML = ele.val().sts;
          td5.innerHTML = ele.val().address;
          tr.append(td, td1, td2, td3, td4, td5);
          document.getElementById("root").appendChild(tr);
        }
      });
      // Show "Data not available" only if no matching data is found
      if (!dataFound) {
        alert("Data not available");
        window.location.href = "searchbloodbank.html";
      }
      // Hide container and show the results
      document.getElementById("container").style.display = "none";
      document.getElementsByClassName("container4")[0].style.display = "block";
    });
}
