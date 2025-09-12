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
//รหัสผ่าน CodeCreate (card8)
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
                window.open("https://www.pyezcode.com/", "_blank"); 
                
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

//รหัสผ่าน CodeCreate (card9)
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

//รหัสผ่าน Aoonbook (card10)
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
            window.open("https://codepen.io/kssb2156/pen/RNWOBWx", "_blank"); 
            
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
