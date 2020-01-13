$(init);
let config = {
    apiKey: "AIzaSyCq9o1CEXhuPRn2q9GfxZ_0aeHc06XTiCQ",
    authDomain: "mhvi-crm.firebaseapp.com",
    databaseURL: "https://mhvi-crm.firebaseio.com",
    projectId: "mhvi-crm",
    storageBucket: "mhvi-crm.appspot.com",
    messagingSenderId: "687387915507"
};
firebase.initializeApp(config);
let db = firebase.firestore();
let clientsRef = db.collection("clients");
clientsRef.get().then((querySnapshot) => {
    LoadTable(querySnapshot);
    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
    })

});
function init() {
    $('#add').on('click', addClient);
    $('#search').on('click', searchClient)

}

function LoadTable(querySnapshot) {
    var tableRow='';
    querySnapshot.forEach(function(doc) {
        var document = doc.data();
        tableRow +='<tr>';
        tableRow += '<td class="fname">' + document.FirstName + '</td>';
        tableRow += '<td class="lname">' + document.LastName + '</td>';
        tableRow += '<td class="editEmployee"><i class="fa fa-pencil" aria-hidden="true" style="color:green"></i></td>';
/*        tableRow += '<td class="email">' + document.email + '</td>';
        tableRow += '<td class="age">' + document.age + '</td>';
        tableRow += '<td class="gender">' + document.gender + '</td>';
        tableRow += '<td class="yearsofexperience">' + document.yearsOfExperience + '</td>';
        tableRow += '<td class="isfulltime">' + document.isFullTime + '</td>';
        tableRow += '<td class="deleteEmployee"><i class="fa fa-trash" aria-hidden="true" style="color:red"></i></td>'*/
        tableRow += '</tr>';
    });
    $('#tbody').html(tableRow);
}
function addClient() {
    let fName = $('#fName').val();
    let lName = $('#lName').val();
    clientsRef.add({
        FirstName: fName,
        LastName: lName
    }).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });

}
function searchClient() {
    let lName = $('#lastName').val();
    clientsRef.where("LastName", "==", lName)
    .get()
        .then((querySnapshot) => {
            LoadTable(querySnapshot);
        });
}