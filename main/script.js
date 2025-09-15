document.addEventListener("DOMContentLoaded", function() {
    const logoutButton = document.getElementById('logoutButton');
    let activityTimer;

    const resetTimer = () => {
        clearTimeout(activityTimer);
        activityTimer = setTimeout(() => {
            alert('คุณไม่มีการใช้งานเป็นเวลา 5 นาที จะกลับสู่หน้าหลัก');
            localStorage.removeItem('isLoggedIn');
            window.location.replace('../index.html');
        }, 5 * 60 * 1000); 
    };

    document.addEventListener('mousemove', resetTimer);
    document.addEventListener('keypress', resetTimer);
    document.addEventListener('scroll', resetTimer);

    resetTimer();

    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('isLoggedIn');
        clearTimeout(activityTimer);
        document.body.style.opacity = '0';
        setTimeout(() => {
            window.location.replace('../index.html');
        }, 800);
    });
});
//สร้างปุ่มค้นหา
document.getElementById('searchButton').addEventListener('click', function() {
    let searchTerm = document.getElementById('searchInput').value.toLowerCase();
    let cards = document.querySelectorAll('.card, .card-large, .card1');

    cards.forEach(card => {
        let cardContent = card.textContent.toLowerCase();
        if (cardContent.includes(searchTerm)) {
            card.style.display = 'block'; 
        } else {
            card.style.display = 'none';
        }
    });
});



//รหัสผ่าน Code_CreditFlow
function checkPassword() {
        const correctPassword = "0000";
        const userPassword = document.getElementById("passwordInput").value; 
        const messageElement = document.getElementById("message");
        const passwordInput = document.getElementById("passwordInput");

        if (userPassword === correctPassword) {
            messageElement.textContent = "รหัสถูกต้อง! กำลังเข้าสู่ระบบ...";
            messageElement.style.color = "green";
            
            // Redirect to the correct page after a brief delay
            setTimeout(function() {
                window.open("https://github.com/kssb2156/credit.git", "_blank"); 
                
                // --- เพิ่มโค้ดส่วนนี้เพื่อรีเซ็ตค่า ---
                passwordInput.value = ""; // ทำให้ช่องรหัสผ่านว่าง
                messageElement.textContent = ""; // ทำให้ข้อความแสดงผลว่าง
                // ------------------------------------
                
            }, 500); // 500 milliseconds delay
            
    } else {
        messageElement.textContent = "รหัสผิด กรุณาลองอีกครั้ง";
        messageElement.style.color = "red";
        
        // Reset the input field after a brief delay
        setTimeout(function() {
            passwordInput.value = ""; 
            messageElement.textContent = "";
        }, 1500); // Wait a bit longer so the user can read the error
    }
}

//รหัสผ่าน Code_CashFlow STM
function checkPassword1() {
    const correctPassword1 = "0000";
    const userPassword1 = document.getElementById("passwordInput1").value; 
    const messageElement1 = document.getElementById("message1"); // CORRECTED to message1
    const passwordInput1 = document.getElementById("passwordInput1");

    if (userPassword1 === correctPassword1) {
        messageElement1.textContent = "รหัสถูกต้อง! กำลังเข้าสู่ระบบ...";
        messageElement1.style.color = "green";
        
        // Redirect to the correct page after a brief delay
        setTimeout(function() {
            window.open("https://codepen.io/kssb2156/pen/RNWOBWx", "_blank"); 
            
            // --- เพิ่มโค้ดส่วนนี้เพื่อรีเซ็ตค่า ---
            passwordInput1.value = ""; // ทำให้ช่องรหัสผ่านว่าง
            messageElement1.textContent = ""; // ทำให้ข้อความแสดงผลว่าง
            // ------------------------------------
            
        }, 500); // 500 milliseconds delay
        
    } else {
        messageElement1.textContent = "รหัสผิด กรุณาลองอีกครั้ง"; 
        messageElement1.style.color = "red";
        
        // Reset the input field after a brief delay
        setTimeout(function() {
            passwordInput1.value = ""; 
            messageElement1.textContent = "";
        }, 1500); // Wait a bit longer so the user can read the error
    }
}

//รหัสผ่านCode_Upload IMG 
function checkPassword2() {
    const correctPassword2 = "0000";
    const userPassword2 = document.getElementById("passwordInput2").value; 
    const messageElement2 = document.getElementById("message2"); // CORRECTED to message1
    const passwordInput2 = document.getElementById("passwordInput2");

    if (userPassword2 === correctPassword2) {
        messageElement2.textContent = "รหัสถูกต้อง! กำลังเข้าสู่ระบบ...";
        messageElement2.style.color = "green";
        
        // Redirect to the correct page after a brief delay
        setTimeout(function() {
            window.open("https://github.com/kssb2156/-uploadimg.git", "_blank"); 
            
            // --- เพิ่มโค้ดส่วนนี้เพื่อรีเซ็ตค่า ---
            passwordInput2.value = ""; // ทำให้ช่องรหัสผ่านว่าง
            messageElement2.textContent = ""; // ทำให้ข้อความแสดงผลว่าง
            // ------------------------------------
            
        }, 500); // 500 milliseconds delay
        
    } else {
        messageElement2.textContent = "รหัสผิด กรุณาลองอีกครั้ง"; 
        messageElement2.style.color = "red";
        
        // Reset the input field after a brief delay
        setTimeout(function() {
            passwordInput2.value = ""; 
            messageElement2.textContent = "";
        }, 1500); // Wait a bit longer so the user can read the error
    }
}

//รหัสผ่านCode_บอทคลิกตีบวกFIFA
function checkPassword3() {
    const correctPassword3 = "0000";
    const userPassword3 = document.getElementById("passwordInput3").value; 
    const messageElement3 = document.getElementById("message3"); // CORRECTED to message1
    const passwordInput3 = document.getElementById("passwordInput3");

    if (userPassword3 === correctPassword3) {
        messageElement3.textContent = "รหัสถูกต้อง! กำลังเข้าสู่ระบบ...";
        messageElement3.style.color = "green";
        
        // Redirect to the correct page after a brief delay
        setTimeout(function() {
            window.open("https://drive.google.com/drive/folders/1EdZlPQe9412cIekKQxfrVu5jnHhBVM86?usp=drive_link", "_blank"); 
            
            // --- เพิ่มโค้ดส่วนนี้เพื่อรีเซ็ตค่า ---
            passwordInput3.value = ""; // ทำให้ช่องรหัสผ่านว่าง
            messageElement3.textContent = ""; // ทำให้ข้อความแสดงผลว่าง
            // ------------------------------------
            
        }, 500); // 500 milliseconds delay
        
    } else {
        messageElement3.textContent = "รหัสผิด กรุณาลองอีกครั้ง"; 
        messageElement3.style.color = "red";
        
        // Reset the input field after a brief delay
        setTimeout(function() {
            passwordInput3.value = ""; 
            messageElement3.textContent = "";
        }, 1500); // Wait a bit longer so the user can read the error
    }
}

//รหัสผ่านCode_บอทคลิก ADB
function checkPassword4() {
    const correctPassword4 = "0000";
    const userPassword4 = document.getElementById("passwordInput4").value; 
    const messageElement4 = document.getElementById("message4"); // CORRECTED to message1
    const passwordInput4 = document.getElementById("passwordInput4");

    if (userPassword4 === correctPassword4) {
        messageElement4.textContent = "รหัสถูกต้อง! กำลังเข้าสู่ระบบ...";
        messageElement4.style.color = "green";
        
        // Redirect to the correct page after a brief delay
        setTimeout(function() {
            window.open("https://drive.google.com/drive/folders/1wNEdHYNXXZdLfajueyqxphH7JSO-AE5y?usp=drive_link", "_blank"); 
            
            // --- เพิ่มโค้ดส่วนนี้เพื่อรีเซ็ตค่า ---
            passwordInput4.value = ""; // ทำให้ช่องรหัสผ่านว่าง
            messageElement4.textContent = ""; // ทำให้ข้อความแสดงผลว่าง
            // ------------------------------------
            
        }, 500); // 500 milliseconds delay
        
    } else {
        messageElement4.textContent = "รหัสผิด กรุณาลองอีกครั้ง"; 
        messageElement4.style.color = "red";
        
        // Reset the input field after a brief delay
        setTimeout(function() {
            passwordInput4.value = ""; 
            messageElement4.textContent = "";
        }, 1500); // Wait a bit longer so the user can read the error
    }
}
//รหัสผ่านCode_บอทคลิก CMD 
function checkPassword5() {
    const correctPassword5 = "0000";
    const userPassword5 = document.getElementById("passwordInput5").value; 
    const messageElement5 = document.getElementById("message5"); // CORRECTED to message1
    const passwordInput5 = document.getElementById("passwordInput5");

    if (userPassword5 === correctPassword5) {
        messageElement5.textContent = "รหัสถูกต้อง! กำลังเข้าสู่ระบบ...";
        messageElement5.style.color = "green";
        
        // Redirect to the correct page after a brief delay
        setTimeout(function() {
            window.open("https://drive.google.com/drive/folders/1wNEdHYNXXZdLfajueyqxphH7JSO-AE5y?usp=drive_linkhttps://drive.google.com/drive/folders/1D8zhkmRXyCyZjyAWqKiOz8ubaYxKDkMu?usp=drive_link", "_blank"); 
            
            // --- เพิ่มโค้ดส่วนนี้เพื่อรีเซ็ตค่า ---
            passwordInput5.value = ""; // ทำให้ช่องรหัสผ่านว่าง
            messageElement5.textContent = ""; // ทำให้ข้อความแสดงผลว่าง
            // ------------------------------------
            
        }, 500); // 500 milliseconds delay
        
    } else {
        messageElement5.textContent = "รหัสผิด กรุณาลองอีกครั้ง"; 
        messageElement5.style.color = "red";
        
        // Reset the input field after a brief delay
        setTimeout(function() {
            passwordInput5.value = ""; 
            messageElement5.textContent = "";
        }, 1500); // Wait a bit longer so the user can read the error
    }
}
//Code_ระบบเบิกเงิน CMD 
function checkPassword6() {
    const correctPassword6 = "0000";
    const userPassword6 = document.getElementById("passwordInput6").value; 
    const messageElement6 = document.getElementById("message6"); // CORRECTED to message1
    const passwordInput6 = document.getElementById("passwordInput6");

    if (userPassword6 === correctPassword6) {
        messageElement6.textContent = "รหัสถูกต้อง! กำลังเข้าสู่ระบบ...";
        messageElement6.style.color = "green";
        
        // Redirect to the correct page after a brief delay
        setTimeout(function() {
            window.open("https://github.com/kssb2156/employee.git"); 
            
            // --- เพิ่มโค้ดส่วนนี้เพื่อรีเซ็ตค่า ---
            passwordInput6.value = ""; // ทำให้ช่องรหัสผ่านว่าง
            messageElement6.textContent = ""; // ทำให้ข้อความแสดงผลว่าง
            // ------------------------------------
            
        }, 500); // 500 milliseconds delay
        
    } else {
        messageElement6.textContent = "รหัสผิด กรุณาลองอีกครั้ง"; 
        messageElement6.style.color = "red";
        
        // Reset the input field after a brief delay
        setTimeout(function() {
            passwordInput6.value = ""; 
            messageElement6.textContent = "";
        }, 1500); // Wait a bit longer so the user can read the error
    }
}
