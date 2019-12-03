var firebaseConfig = {
    apiKey: "",
    authDomain: "cinetripv1.firebaseapp.com",
    databaseURL: "https://cinetripv1.firebaseio.com",
    projectId: "cinetripv1",
    storageBucket: "cinetripv1.appspot.com",
    messagingSenderId: "1080605216749",
    appId: "1:1080605216749:web:bbf39c1570ecc474a1a1e4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.database().ref('Subscription');
// Reference messages collection
// var subscriptionRef = firebase.database().ref('Subscription');


document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    var email = getInputVal('cemail');

    saveEmail(email);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function() {
        document.querySelector('.alert').style.display = 'none';
    }, 3000);

    // Clear form
    document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save emails to firebase
function saveEmail(email) {
    var newSubscriptionRef = db.push();
    newSubscriptionRef.set({
        email: email,
    });
}
