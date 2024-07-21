import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
    getDatabase,
    ref,
    set,
    get,
    child,
    push,
    update,
    remove,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
const firebaseConfig = {
    apiKey: "AIzaSyBPWp2ha8zD9ZnbOv7dSbSELGCe86iytAY",
    authDomain: "thanhnppcecma.firebaseapp.com",
    databaseURL:
        "https://thanhnppcecma-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "thanhnppcecma",
    storageBucket: "thanhnppcecma.appspot.com",
    messagingSenderId: "96233696774",
    appId: "1:96233696774:web:b47da30031cc6231269d87",
};

initializeApp(firebaseConfig);

const dbRefCategory = ref(getDatabase(), "category");

    window.addCategory = async function (event) {
        event.preventDefault();

        const categoryNameInput = document.getElementById("categoryName");
        const categoryName = categoryNameInput.value.trim(); 

        const errorMessageDiv = document.getElementById("error-message");

        if (categoryName === "") {
            errorMessageDiv.innerText = "Danh mục không được để trống";
            return;
        }

        // Check if the input contains only letters
        if (!/^[a-zA-Z\s]+$/.test(categoryName)) {
            errorMessageDiv.innerText = "Tên danh mục không được nhập số";
            return;
        }

        const categoriesRef = ref(getDatabase(), "category");
        const newCategoryRef = push(categoriesRef);

        const categoryData = {
            id: newCategoryRef.key,
            name: categoryName,
        };

        set(newCategoryRef, categoryData);

        window.location.href = "category.html";

        console.log(categoryData);
        console.log("Category added successfully!");
    };