
const name = document.getElementById("inp1");
const age = document.getElementById("inp2");
const mobile = document.getElementById("inp3");
const mail = document.getElementById("inp4");
const button = document.getElementById("btn");
const userNamesParagraph = document.getElementById("userNames");

button.onclick = () => {
    const info = {
        name: name.value,
        age: age.value,
        Contact: mobile.value,
        Email: mail.value
    };
   
    let userDetails = localStorage.getItem("UserInfo");
    let setData = userDetails ? JSON.parse(userDetails) : [];
    setData.push(info);
    let ans = JSON.stringify(setData);
    console.log(setData);
    window.localStorage.setItem("UserInfo", ans);

     // Retrieve user names and display them
let infos = localStorage.getItem("UserInfo");
if (infos) {
    let userData = JSON.parse(infos);
    let userNames = userData.map(user => user.name).join(", ");
    userNamesParagraph.textContent = "Names: " + userNames;
}
};
